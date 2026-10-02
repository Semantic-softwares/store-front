import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelfOrderCheckoutDetails, StorefrontStore, unitPrice } from '../../data-access/storefront.store';
import { CartLine } from '../../data-access/storefront.models';
import { CustomerNameDialogComponent } from '../customer-name-dialog/customer-name-dialog.component';
import { CheckoutDetailsDialogComponent } from '../checkout-details-dialog/checkout-details-dialog.component';

@Component({
  selector: 'app-storefront-cart-drawer',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './cart-drawer.component.html',
})
export class CartDrawerComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  protected readonly store = inject(StorefrontStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly unitPrice = unitPrice;

  optionsSummary(line: CartLine): string {
    return line.options.map((o) => o.optionItemName).join(', ');
  }

  placeOrder(): void {
    // The button is already disabled when closed, but a cart filled before
    // the store closed (or a stale page) could still reach this — check
    // again before opening either dialog, not just after the round trip.
    if (this.store.orderingLocked()) {
      this.snackBar.open('This store is currently closed and not accepting orders.', 'Close', { duration: 4000 });
      return;
    }

    // A table was scanned — same flow as always, a name is all that's needed.
    if (this.store.qrToken()) {
      if (this.store.hasPromptedForName()) {
        this.store.submitOrder();
        return;
      }

      this.dialog
        .open(CustomerNameDialogComponent, { width: '380px', disableClose: true })
        .afterClosed()
        .subscribe((name: string | null) => {
          // disableClose + no skip path means this only resolves with a real,
          // trimmed name — but afterClosed() is still typed as nullable.
          if (!name) {
            return;
          }
          this.store.setCustomerName(name);
          this.store.submitOrder();
        });
      return;
    }

    // No table — browse-only checkout, pickup or delivery. Unlike the table
    // flow above, this one must stay closable (backdrop/Escape/X) — there's
    // no cart submission riding on it yet, just a guest backing out.
    this.dialog
      .open(CheckoutDetailsDialogComponent, { width: '420px' })
      .afterClosed()
      .subscribe((details: SelfOrderCheckoutDetails | null) => {
        if (!details) {
          return;
        }
        this.store.placeOrder(details);
      });
  }
}
