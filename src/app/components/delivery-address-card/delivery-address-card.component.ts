import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PublicOrderShipping } from '../../data-access/storefront.models';

declare const google: any;

// Self-order only (table/pickup/delivery orders carry a real shipping
// location; nothing else in this app does) — shows where a delivery is
// headed: a real interactive map (not a Static Maps API image — that
// product isn't enabled for this key, which rendered as a broken image), a
// copy-address button, and a "Get Directions" link that opens the device's
// own maps app.
@Component({
  selector: 'app-storefront-delivery-address-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delivery-address-card.component.html',
})
export class DeliveryAddressCardComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) shipping!: PublicOrderShipping;

  @ViewChild('mapEl') private mapEl?: ElementRef<HTMLDivElement>;

  protected readonly copied = signal(false);
  protected readonly mapFailed = signal(false);

  private pollHandle?: ReturnType<typeof setInterval>;

  protected readonly addressLabel = computed(() => {
    const s = this.shipping;
    return (
      s.name ||
      [s.locality, s.administrativeArea, s.country].filter(Boolean).join(', ') ||
      `${s.latitude.toFixed(5)}, ${s.longitude.toFixed(5)}`
    );
  });

  protected readonly directionsUrl = computed(() => {
    const { latitude, longitude } = this.shipping;
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  });

  ngAfterViewInit(): void {
    // index.html's script tag loads async — poll briefly rather than assume
    // it's already on `window` by the time this card mounts.
    let attempts = 0;
    this.pollHandle = setInterval(() => {
      attempts++;
      if (typeof google !== 'undefined' && google.maps) {
        clearInterval(this.pollHandle);
        this.renderMap();
      } else if (attempts > 50) {
        clearInterval(this.pollHandle);
        this.mapFailed.set(true);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.pollHandle) clearInterval(this.pollHandle);
  }

  private renderMap(): void {
    const el = this.mapEl?.nativeElement;
    const { latitude, longitude } = this.shipping;
    if (!el || latitude == null || longitude == null) {
      this.mapFailed.set(true);
      return;
    }
    const position = { lat: latitude, lng: longitude };
    const map = new google.maps.Map(el, {
      center: position,
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
    });
    new google.maps.Marker({ position, map });
  }

  async copyAddress(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.addressLabel());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard access blocked (insecure origin, permissions) — the
      // address is on screen either way, so a guest can still copy it by hand.
    }
  }
}
