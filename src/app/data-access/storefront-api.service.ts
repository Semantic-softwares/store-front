import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  PlaceSelfOrderResult,
  PublicOrderStatus,
  SelfOrderLocation,
  StorefrontMenuSection,
  StorefrontStoreInfo,
  StorefrontTable,
  SubmitOrderResult,
} from './storefront.models';

export interface ResolveByQrTokenResponse {
  store: StorefrontStoreInfo;
  table: StorefrontTable;
}

export interface SubmitOrderItemOption {
  groupId: string;
  optionItemId: string;
  quantity: number;
}

export interface SubmitOrderItem {
  productId: string;
  quantity: number;
  notes?: string;
  options?: SubmitOrderItemOption[];
}

export interface PlaceSelfOrderPayload {
  items: SubmitOrderItem[];
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  fulfillmentType: 'pickup' | 'delivery';
  location?: SelfOrderLocation;
  orderInstruction?: string;
  paymentMethod: 'cash' | 'transfer';
}

export interface DeliveryQuote {
  subtotal: number;
  shippingFee: number;
  distanceKm: number;
}

// Thin wrapper over the public self-order API — no auth header is ever
// attached to these calls (the app's authInterceptor passes requests through
// unmodified when there's no stored token, so this works unattended).
@Injectable({ providedIn: 'root' })
export class StorefrontApiService {
  private readonly baseUrl = `${environment.apiUrl}/self-order`;

  constructor(private readonly http: HttpClient) {}

  // Unlike resolveByQrToken below, the backend returns the store object
  // directly here — not wrapped in `{ store }` (confirmed against the real
  // /self-order/stores/slug/:storeSlug response).
  resolveBySlug(storeSlug: string): Observable<StorefrontStoreInfo> {
    return this.http.get<StorefrontStoreInfo>(`${this.baseUrl}/stores/slug/${storeSlug}`);
  }

  resolveByQrToken(qrToken: string): Observable<ResolveByQrTokenResponse> {
    return this.http.get<ResolveByQrTokenResponse>(`${this.baseUrl}/resolve/${qrToken}`);
  }

  getMenu(storeId: string): Observable<StorefrontMenuSection[]> {
    return this.http.get<StorefrontMenuSection[]>(`${this.baseUrl}/stores/${storeId}/menu`);
  }

  submitOrder(qrToken: string, items: SubmitOrderItem[], customerName?: string): Observable<SubmitOrderResult> {
    return this.http.post<SubmitOrderResult>(`${this.baseUrl}/tables/${qrToken}/items`, {
      items,
      customerName: customerName || undefined,
    });
  }

  // Initial snapshot for page load/reload — StorefrontSocketService carries
  // live updates from here on.
  getOrderStatus(qrToken: string): Observable<PublicOrderStatus> {
    return this.http.get<PublicOrderStatus>(`${this.baseUrl}/tables/${qrToken}/status`);
  }

  // Browse-only checkout — pickup or delivery, no table/QR scan.
  placeOrder(storeId: string, payload: PlaceSelfOrderPayload): Observable<PlaceSelfOrderResult> {
    return this.http.post<PlaceSelfOrderResult>(`${this.baseUrl}/stores/${storeId}/orders`, payload);
  }

  // Live preview while the guest is still filling in the checkout dialog —
  // re-derived from the real catalog server-side, so it's exact, not an
  // estimate that could drift from what placeOrder() actually charges.
  getDeliveryQuote(
    storeId: string,
    payload: { items: SubmitOrderItem[]; location: SelfOrderLocation },
  ): Observable<DeliveryQuote> {
    return this.http.post<DeliveryQuote>(`${this.baseUrl}/stores/${storeId}/delivery-quote`, payload);
  }

  // No-table counterpart to getOrderStatus, for a pickup/delivery order.
  getOrderStatusById(orderId: string): Observable<PublicOrderStatus> {
    return this.http.get<PublicOrderStatus>(`${this.baseUrl}/orders/${orderId}/status`);
  }

  registerPushTokenForOrder(orderId: string, token: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.baseUrl}/orders/${orderId}/push-token`, { token });
  }

  registerPushTokenForTable(qrToken: string, token: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.baseUrl}/tables/${qrToken}/push-token`, { token });
  }
}
