import { Component, computed, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StorefrontStore } from '../../data-access/storefront.store';

export interface ContactDialogData {
  accentColor: string;
}

/**
 * "Contact" from the home page navbar: every way to reach the store, each one
 * a real link (call, email, directions) so a guest on a phone is one tap
 * away, plus the posted opening hours.
 */
@Component({
  selector: 'app-storefront-contact-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './contact-dialog.component.html',
  host: { '[style.--lp-accent]': 'data.accentColor' },
  styles: `
    .contact-row {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      border-radius: 1rem;
      padding: 0.75rem 0.875rem;
      background: #f8f7f6;
      transition: background-color 150ms ease, transform 150ms ease;
    }
    .contact-row:hover { background: #f1efed; }
    .contact-row:active { transform: scale(0.99); }
    .contact-row:focus-visible { outline: 2px solid var(--lp-accent); outline-offset: 2px; }
    .contact-icon {
      display: grid;
      place-items: center;
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
      border-radius: 0.75rem;
      color: var(--lp-accent);
      background: color-mix(in oklab, var(--lp-accent) 14%, white);
    }
  `,
})
export class ContactDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  protected readonly data = inject<ContactDialogData>(MAT_DIALOG_DATA);
  protected readonly store = inject(StorefrontStore);

  protected readonly info = computed(() => this.store.storeInfo());

  protected readonly address = computed(() => {
    const contact = this.info()?.contactInfo;
    const parts = [contact?.address, contact?.city, contact?.state, contact?.country].filter(Boolean);
    return parts.length ? parts.join(', ') : this.info()?.placeName;
  });

  protected readonly directionsUrl = computed(() => {
    const location = this.info()?.location;
    const query = location ? `${location.latitude},${location.longitude}` : this.address();
    return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : null;
  });

  protected readonly hasAnyContact = computed(
    () => !!(this.info()?.contactInfo?.phone || this.info()?.contactInfo?.email || this.address()),
  );

  protected telHref(phone: string): string {
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  close(): void {
    this.dialogRef.close();
  }
}
