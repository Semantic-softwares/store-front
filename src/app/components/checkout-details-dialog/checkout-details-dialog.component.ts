import { AfterViewInit, Component, ElementRef, OnDestroy, computed, inject, signal, viewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelfOrderCheckoutDetails, StorefrontStore } from '../../data-access/storefront.store';
import { StorefrontApiService, DeliveryQuote } from '../../data-access/storefront-api.service';

const REMEMBERED_CUSTOMER_KEY = 'sf_customer_info';

interface RememberedCustomer {
  name: string;
  phone: string;
  email?: string;
}

// So a returning guest doesn't retype their name/phone every visit — private
// to this browser, never sent anywhere except as part of placing an order.
function readRememberedCustomer(): RememberedCustomer | null {
  try {
    const raw = localStorage.getItem(REMEMBERED_CUSTOMER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function rememberCustomer(customer: RememberedCustomer): void {
  try {
    localStorage.setItem(REMEMBERED_CUSTOMER_KEY, JSON.stringify(customer));
  } catch {
    // Private browsing/storage full — not worth failing the order over.
  }
}

// Collected once, right when a browse-only (no table scan) guest places an
// order — the non-table counterpart to CustomerNameDialogComponent. Asks
// pickup-or-delivery FIRST (a MatSlideToggle), then only shows the address
// section when delivery is chosen, per the explicit requirement that the
// switch comes before the location options. Address comes from either the
// device's geolocation (reverse-geocoded) or a Google Places search — both
// paths normalize into the exact shape Order.shipping expects on the
// backend, same fields the old shopbot-customer mobile app's location picker
// already produced for this schema.
@Component({
  selector: 'app-storefront-checkout-details-dialog',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, MatDialogModule, MatIconModule, MatSlideToggleModule, MatProgressSpinnerModule],
  templateUrl: './checkout-details-dialog.component.html',
})
export class CheckoutDetailsDialogComponent implements AfterViewInit, OnDestroy {
  private readonly dialogRef = inject(MatDialogRef<CheckoutDetailsDialogComponent>);
  private readonly api = inject(StorefrontApiService);
  protected readonly store = inject(StorefrontStore);
  private readonly addressInput = viewChild<ElementRef<HTMLInputElement>>('addressInput');

  protected readonly name = signal('');
  protected readonly phone = signal('');
  protected readonly email = signal('');
  // The toggle itself means "I'll pick this up myself" — checked = pickup,
  // unchecked (the default) = delivery, since most guests opening this
  // dialog want something brought to them rather than coming to collect it.
  // isDelivery is derived so every other reference in this file keeps
  // reading naturally.
  protected readonly pickupMyself = signal(false);
  protected readonly isDelivery = computed(() => !this.pickupMyself());
  protected readonly addressLabel = signal('');
  protected readonly location = signal<SelfOrderCheckoutDetails['location'] | null>(null);
  protected readonly isLocating = signal(false);
  protected readonly locationError = signal<string | null>(null);
  protected readonly paymentMethod = signal<'cash' | 'transfer'>('cash');

  // Live delivery fee/eligibility preview, re-fetched every time the address
  // changes — not a client-side estimate, the exact figure placeOrder() will
  // charge (same calculation, same endpoint logic).
  protected readonly deliveryQuote = signal<DeliveryQuote | null>(null);
  protected readonly quoteLoading = signal(false);
  protected readonly quoteError = signal<string | null>(null);

  protected readonly subtotal = computed(() => this.store.cartEstimatedTotal());
  protected readonly total = computed(() => this.subtotal() + (this.isDelivery() ? this.deliveryQuote()?.shippingFee || 0 : 0));

  protected readonly canSubmit = computed(() => {
    if (this.name().trim().length === 0 || this.phone().trim().length === 0) return false;
    if (!this.isDelivery()) return true;
    // A chosen address must have cleared the radius/minimum-order checks —
    // no quote yet, still loading, or an error all block submission.
    return !!this.location() && !!this.deliveryQuote() && !this.quoteError() && !this.quoteLoading();
  });

  // google.maps.places.Autocomplete is marked deprecated (March 2025) in
  // favor of PlaceAutocompleteElement, but verified live (Playwright, both
  // against this exact API key): it still constructs and works, the
  // deprecation notice itself says it's "not scheduled to be discontinued"
  // and still gets bug fixes. PlaceAutocompleteElement was tried here first
  // — its full-screen mobile suggestion UI has no documented (or found by
  // testing several CSS custom property guesses) way to override its
  // dark-theme-follows-system-only behavior, which looked broken against
  // this app's always-light styling. Reverted to the simpler, fully
  // supported widget rather than fight an unstyleable one.
  private autocomplete: google.maps.places.Autocomplete | null = null;
  private autocompleteListener: google.maps.MapsEventListener | null = null;
  private autocompletePollTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    const remembered = readRememberedCustomer();
    if (remembered) {
      this.name.set(remembered.name);
      this.phone.set(remembered.phone);
      this.email.set(remembered.email ?? '');
    }
  }

  ngAfterViewInit(): void {
    this.waitForPlacesThenInit();
  }

  private waitForPlacesThenInit(): void {
    if (typeof google !== 'undefined' && google.maps) {
      this.initAutocomplete();
      return;
    }
    // The Maps JS API script tag has no load callback wired up — poll briefly
    // rather than block the dialog opening on it.
    let attempts = 0;
    this.autocompletePollTimer = setInterval(() => {
      attempts += 1;
      if (typeof google !== 'undefined' && google.maps) {
        this.stopPolling();
        this.initAutocomplete();
      } else if (attempts > 50) {
        this.stopPolling();
      }
    }, 100);
  }

  private stopPolling(): void {
    if (this.autocompletePollTimer) {
      clearInterval(this.autocompletePollTimer);
      this.autocompletePollTimer = null;
    }
  }

  private initAutocomplete(): void {
    const input = this.addressInput()?.nativeElement;
    if (!input) return;

    this.autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ['address_components', 'geometry', 'formatted_address', 'name'],
    });
    this.reparentPacContainer(input);
    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete!.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (lat == null || lng == null) {
        return;
      }

      // Prefer the specific place/establishment name ("Afrinaija Pots
      // Restaurant") over the bare formatted address when Places has one —
      // that's what a delivery driver actually recognizes.
      const parts = this.parseGeocoderAddressComponents(place.address_components || []);
      const loc = {
        name: place.name || place.formatted_address,
        latitude: lat,
        longitude: lng,
        ...parts,
      };
      this.location.set(loc);
      this.addressLabel.set(place.name || place.formatted_address || '');
      this.locationError.set(null);
      this.fetchDeliveryQuote(loc);
    });
  }

  // Google always appends .pac-container to <body>, outside this dialog's
  // own stacking context. Verified empirically with Playwright that
  // Angular Material's dialog overlay still wins hit-testing over it
  // regardless of z-index — even pushed to the maximum possible value,
  // the dialog's own scrollable content div still received clicks meant
  // for the suggestion underneath it. Moving pac-container to be a child
  // of the dialog's own container is the one approach that actually
  // works (also verified). It gets destroyed along with the dialog on
  // close, so no manual cleanup is needed in ngOnDestroy.
  private reparentPacContainer(input: HTMLInputElement): void {
    const dialogHost = input.closest('mat-dialog-container');
    if (!dialogHost) return;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const pac = document.querySelector('.pac-container');
      if (pac && pac.parentElement !== dialogHost) {
        dialogHost.appendChild(pac);
        clearInterval(timer);
      } else if (attempts > 50) {
        clearInterval(timer);
      }
    }, 100);
  }

  private fetchDeliveryQuote(location: NonNullable<SelfOrderCheckoutDetails['location']>): void {
    const storeInfo = this.store.storeInfo();
    const cart = this.store.cart();
    if (!storeInfo || cart.length === 0) return;

    this.quoteLoading.set(true);
    this.quoteError.set(null);
    this.deliveryQuote.set(null);

    this.api
      .getDeliveryQuote(storeInfo._id, {
        location,
        items: cart.map((line) => ({
          productId: line.productId,
          quantity: line.quantity,
          options: line.options.map((o) => ({
            groupId: o.groupId,
            optionItemId: o.optionItemId,
            quantity: o.quantity,
          })),
        })),
      })
      .subscribe({
        next: (quote) => {
          this.quoteLoading.set(false);
          this.deliveryQuote.set(quote);
        },
        error: (error: any) => {
          this.quoteLoading.set(false);
          this.quoteError.set(error?.error?.message || 'Could not check this address — please try again.');
        },
      });
  }

  // Shared by both the Autocomplete selection above and reverseGeocode()
  // below — both return the same `long_name`-shaped GeocoderAddressComponent.
  private parseGeocoderAddressComponents(
    components: google.maps.GeocoderAddressComponent[],
  ): Partial<NonNullable<SelfOrderCheckoutDetails['location']>> {
    const find = (type: string) => components.find((c) => c.types.includes(type))?.long_name;
    return {
      country: find('country'),
      locality: find('locality'),
      postalCode: find('postal_code'),
      administrativeArea: find('administrative_area_level_1'),
      subAdministrativeArea: find('administrative_area_level_2'),
      subLocality: find('sublocality'),
      thoroughfare: find('route'),
      subThoroughfare: find('street_number'),
    };
  }

  useCurrentLocation(): void {
    if (!navigator.geolocation) {
      this.locationError.set('Location is not available on this device.');
      return;
    }
    this.isLocating.set(true);
    this.locationError.set(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.reverseGeocode(latitude, longitude);
      },
      () => {
        this.isLocating.set(false);
        this.locationError.set('Could not get your location — please search for your address instead.');
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  private reverseGeocode(latitude: number, longitude: number): void {
    if (typeof google === 'undefined' || !google.maps) {
      this.isLocating.set(false);
      const loc = { latitude, longitude };
      this.location.set(loc);
      this.addressLabel.set(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
      this.fetchDeliveryQuote(loc);
      return;
    }

    new google.maps.Geocoder().geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      this.isLocating.set(false);
      if (status !== 'OK' || !results?.[0]) {
        // Still usable — the coordinates alone are enough for the delivery
        // fee/distance calculation even without a readable address.
        const loc = { latitude, longitude };
        this.location.set(loc);
        this.addressLabel.set(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        this.fetchDeliveryQuote(loc);
        return;
      }
      const place = results[0];
      const parts = this.parseGeocoderAddressComponents(place.address_components || []);
      const loc = { name: place.formatted_address, latitude, longitude, ...parts };
      this.location.set(loc);
      this.addressLabel.set(place.formatted_address);
      this.fetchDeliveryQuote(loc);
    });
  }

  submit(): void {
    if (!this.canSubmit()) return;

    const customerName = this.name().trim();
    const customerPhone = this.phone().trim();
    const customerEmail = this.email().trim() || undefined;

    rememberCustomer({ name: customerName, phone: customerPhone, email: customerEmail });

    const details: SelfOrderCheckoutDetails = {
      customerName,
      customerPhone,
      customerEmail,
      fulfillmentType: this.isDelivery() ? 'delivery' : 'pickup',
      location: this.isDelivery() ? this.location() ?? undefined : undefined,
      paymentMethod: this.paymentMethod(),
    };
    this.dialogRef.close(details);
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.stopPolling();
    this.autocompleteListener?.remove();
  }
}
