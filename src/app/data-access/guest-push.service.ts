import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { StorefrontApiService } from './storefront-api.service';

/**
 * Web push token registration for a guest's own order-status updates — the
 * browser-tab-closed/backgrounded backstop to the real-time socket update
 * (see StorefrontSocketService, StorefrontStore#setOrderStatus). Same
 * logic/credentials as the back-office's FirebasePushService, just
 * registering a guest's device against their order instead of a staff
 * member's merchant account.
 *
 * Deliberately lazy: nothing Firebase-related loads or runs until
 * requestPermissionAndRegister() is actually called — right after an order
 * exists to track (a table's first addItems, or placeOrder succeeding) — and
 * that call itself no-ops safely if environment.firebaseConfig hasn't been
 * filled in yet.
 */
@Injectable({ providedIn: 'root' })
export class GuestPushService {
  private readonly api = inject(StorefrontApiService);
  private readonly snackBar = inject(MatSnackBar);
  private registered = false;

  private isConfigured(): boolean {
    return !!(environment.firebaseConfig?.apiKey && environment.vapidKey);
  }

  async requestPermissionAndRegister(identity: { qrToken: string } | { orderId: string }): Promise<void> {
    if (this.registered || !this.isConfigured() || !('serviceWorker' in navigator) || !('Notification' in window)) {
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        return;
      }

      const { initializeApp } = await import('firebase/app');
      const { getMessaging, getToken, onMessage } = await import('firebase/messaging');

      const app = initializeApp(environment.firebaseConfig);
      const messaging = getMessaging(app);
      const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

      const token = await getToken(messaging, {
        vapidKey: environment.vapidKey,
        serviceWorkerRegistration: registration,
      });

      if (!token) {
        return;
      }

      // Foreground delivery — Firebase doesn't auto-display a notification
      // while the tab is focused, so raise the same in-app toast the status
      // effect already uses for an assigned-staff update.
      onMessage(messaging, (payload) => {
        const body = payload.notification?.body;
        if (body) {
          this.snackBar.open(body, undefined, { duration: 6000, horizontalPosition: 'center', verticalPosition: 'top' });
        }
      });

      const register$ =
        'qrToken' in identity
          ? this.api.registerPushTokenForTable(identity.qrToken, token)
          : this.api.registerPushTokenForOrder(identity.orderId, token);

      register$.subscribe({
        next: () => {
          this.registered = true;
        },
        error: () => {
          // Non-fatal — the socket connection still carries live updates.
        },
      });
    } catch {
      // Non-fatal — push is a backstop, not the primary channel.
    }
  }
}
