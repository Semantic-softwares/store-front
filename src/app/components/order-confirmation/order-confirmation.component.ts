import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StorefrontStore } from '../../data-access/storefront.store';
import { DeliveryAddressCardComponent } from '../delivery-address-card/delivery-address-card.component';

@Component({
  selector: 'app-storefront-order-confirmation',
  standalone: true,
  imports: [CurrencyPipe, MatIconModule, DeliveryAddressCardComponent],
  templateUrl: './order-confirmation.component.html',
})
export class OrderConfirmationComponent {
  protected readonly store = inject(StorefrontStore);
}
