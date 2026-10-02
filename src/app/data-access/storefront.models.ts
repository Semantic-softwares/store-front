import type { LandingPageSettings } from '../store-landing/landing-page';

// Deliberately independent of shared/models's staff-facing Product/Store types —
// this is a separate, public data contract, not a reuse of the authenticated
// app's models. See the plan's "don't reuse staff components/stores" decision.

export interface SelfOrderSettings {
  enabled: boolean;
  templateSlug: string;
  settingsValues: Record<string, any>;
  showWifi?: boolean;
  showContactInfo?: boolean;
  wifi?: StorefrontWifi;
  landingPage?: LandingPageSettings;
}

// Only what a guest would use to find or call the venue. The backend already
// omits this block entirely when the store has filled nothing in (or has the
// toggle off), so the footer decides whether to render on presence alone.
export interface StorefrontContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface PublicBusinessHoursDay {
  day: string;
  isToday: boolean;
  open: boolean;
  opens: string;
  closes: string;
}

export interface StorefrontStoreInfo {
  _id: string;
  name: string;
  description?: string;
  logo?: string;
  bannerImage?: string;
  currency?: string;
  selfOrderSettings: SelfOrderSettings;
  contactInfo?: StorefrontContactInfo;
  // The venue-wide network, already resolved server-side. Present on the
  // browse-only path too, so the card still renders when there's no table.
  wifi?: StorefrontWifi;
  // Informational regardless of whether the store enforces it — always
  // present so the "View info" modal can show posted hours either way.
  businessHours?: PublicBusinessHoursDay[];
  // True only when the store has opted into hours enforcement AND is
  // currently outside them — the single source of truth for the "closed"
  // badge and for disabling add-to-cart/checkout.
  orderingLocked?: boolean;
  placeName?: string;
  location?: { latitude: number; longitude: number };
  deliveryInstructions?: string;
  estimatedDeliveryTime?: { minimum: number; maximum: number };
}

export interface StorefrontWifi {
  ssid: string;
  password?: string;
}

export interface StorefrontTable {
  _id: string;
  name: string;
  // Present only when this table has a network name AND the store hasn't
  // switched the card off — the backend does that filtering, so any `wifi`
  // that arrives here is meant to be shown.
  wifi?: StorefrontWifi;
}

export interface StorefrontOptionItem {
  _id: string;
  name: string;
  price: number;
}

export interface StorefrontOptionGroup {
  _id: string;
  name: string;
  mandatory: boolean;
  atLeast: number;
  atMost: number;
  enabled: boolean;
  options: StorefrontOptionItem[];
}

export interface StorefrontProduct {
  _id: string;
  name: string;
  description?: string;
  price: number;
  photos: string[];
  options: StorefrontOptionGroup[];
}

export interface StorefrontMenuSection {
  _id: string;
  name: string;
  position: number;
  foods: StorefrontProduct[];
}

export interface CartLineOption {
  groupId: string;
  groupName: string;
  optionItemId: string;
  optionItemName: string;
  price: number;
  quantity: number;
}

export interface CartLine {
  // Client-generated — lets two lines for the same product with different
  // option selections coexist (a plain productId key can't distinguish them).
  lineId: string;
  productId: string;
  name: string;
  price: number; // base product price, per unit — options are priced separately
  photo?: string;
  quantity: number;
  notes: string;
  options: CartLineOption[];
}

export interface SubmitOrderResult {
  orderReference: string;
  itemCount: number;
  total: number;
  subTotal?: number;
  shippingFee?: number;
  deliveryType?: string;
}

// Same shape Order.shipping expects on the backend — built either from the
// browser's geolocation (reverse-geocoded) or a Google Places selection.
export interface SelfOrderLocation {
  name?: string;
  latitude: number;
  longitude: number;
  country?: string;
  locality?: string;
  postalCode?: string;
  administrativeArea?: string;
  subAdministrativeArea?: string;
  subLocality?: string;
  subThoroughfare?: string;
  thoroughfare?: string;
  label?: string;
}

export interface PlaceSelfOrderResult {
  orderId: string;
  orderReference: string;
  subTotal: number;
  total: number;
  shippingFee: number;
  deliveryType: string;
}

export interface PublicOrderStatusItem {
  name: string;
  quantity: number;
  price: number;
  notes?: string;
  orderedBy?: string;
  options?: { name: string; price: number; quantity: number }[];
}

// The table's current order, live — not the one-shot "just placed" flash
// (see SubmitOrderResult/OrderConfirmationComponent). Populated on load via
// StorefrontApiService.getOrderStatus() and kept fresh after that by
// StorefrontSocketService's push (see SelfOrderStatusGateway on the backend).
export interface PublicOrderShipping {
  name?: string;
  latitude: number;
  longitude: number;
  locality?: string;
  administrativeArea?: string;
  country?: string;
}

export interface PublicOrderStatus {
  hasActiveOrder: boolean;
  orderReference?: string;
  category?: string;
  statusLabel?: string;
  paymentStatus?: string;
  items?: PublicOrderStatusItem[];
  subTotal?: number;
  shippingFee?: number;
  total?: number;
  updatedAt?: string;
  assignedStaffName?: string;
  // Pickup/delivery orders only (storefront, no table) — undefined for a table order.
  deliveryType?: string;
  shipping?: PublicOrderShipping;
  // Set only when staff just moved this table's order to another table. This
  // page is bound to the OLD table's qrToken so it can't follow — it shows a
  // "rescan at your new table" notice instead. Live-socket only: a hard
  // refresh reads the now-empty table and falls back to the normal menu.
  movedToTableName?: string;
}
