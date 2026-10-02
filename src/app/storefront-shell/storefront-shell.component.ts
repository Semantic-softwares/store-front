import { Component, OnDestroy, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorefrontStore } from '../data-access/storefront.store';
import { StorefrontSocketService } from '../data-access/storefront-socket.service';
import { GuestPushService } from '../data-access/guest-push.service';
import { ThemeHostComponent } from '../theme-engine/theme-host.component';
import { CartBadgeComponent } from '../components/cart-badge/cart-badge.component';
import { CartDrawerComponent } from '../components/cart-drawer/cart-drawer.component';
import { OrderConfirmationComponent } from '../components/order-confirmation/order-confirmation.component';
import { OrderStatusFabComponent } from '../components/order-status-fab/order-status-fab.component';
import { LoadingStateComponent } from '../components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';
import { LanguageSelectDialogComponent } from '../components/language-select-dialog/language-select-dialog.component';
import { STOREFRONT_LANG_STORAGE_KEY } from '../i18n/languages';
import { syncStorefrontThemeVars } from '../theme-engine/storefront-theme-vars';

// Resolves the URL (browse-only vs. table-scanned) into the StorefrontStore
// once, then just renders state — the theme, cart, and confirmation
// components below all read from that same store, never fetch on their own.
@Component({
  selector: 'app-storefront-shell',
  standalone: true,
  imports: [
    ThemeHostComponent,
    CartBadgeComponent,
    CartDrawerComponent,
    OrderConfirmationComponent,
    OrderStatusFabComponent,
    LoadingStateComponent,
    EmptyStateComponent,
  ],
  templateUrl: './storefront-shell.component.html',
})
export class StorefrontShellComponent implements OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly socketService = inject(StorefrontSocketService);
  private readonly guestPushService = inject(GuestPushService);
  protected readonly store = inject(StorefrontStore);
  protected readonly isCartOpen = signal(false);
  private hasPromptedLanguage = false;
  private hasRequestedPush = false;
  // Last server name we announced, so re-emitted status updates (which arrive
  // on every order change) don't re-toast the same assignment repeatedly.
  private announcedServerName: string | null = null;

  constructor() {
    const qrToken = this.route.snapshot.paramMap.get('qrToken');
    const storeSlug = this.route.parent?.snapshot.paramMap.get('storeSlug') ?? this.route.snapshot.paramMap.get('storeSlug');

    this.socketService.orderStatus$.pipe(takeUntilDestroyed()).subscribe((status) => {
      this.store.setOrderStatus(status);
    });

    if (qrToken) {
      this.store.resolveByQrToken(qrToken);
      this.socketService.connectAndJoin(qrToken);
    } else if (storeSlug) {
      this.store.resolveBySlug(storeSlug);
      // Browse-only (no qrToken) — nothing to track until the guest actually
      // places a pickup/delivery order, at which point activeOrderId is set
      // and this joins the order's own status room (see CheckoutDetailsDialog
      // / StorefrontStore#placeOrder).
      effect(() => {
        const orderId = this.store.activeOrderId();
        if (orderId) {
          this.socketService.connectAndJoinOrder(orderId);
        }
      });
    }

    syncStorefrontThemeVars();

    // The cart drawer has no reason to still be open once an order has
    // actually gone through — without this, dismissing the full-screen
    // confirmation left the guest looking at the (now-empty) drawer behind it.
    effect(() => {
      if (this.store.lastOrderResult()) {
        this.isCartOpen.set(false);
      }
    });

    // First-ever visit to the storefront (no stored language preference yet)
    // — ask once the page is actually showing something worth reading, not
    // over the loading spinner or an error state.
    effect(() => {
      if (this.store.storeInfo() && !this.hasPromptedLanguage) {
        this.hasPromptedLanguage = true;
        this.maybePromptForLanguage();
      }
    });

    // Reassure the guest the moment a server picks up their table. Status
    // updates re-emit on every order change, so this only announces when the
    // server's name actually changes (first assignment, or a handover).
    effect(() => {
      const serverName = this.store.orderStatus()?.assignedStaffName;
      if (serverName && serverName !== this.announcedServerName) {
        this.announcedServerName = serverName;
        this.snackBar.open(
          $localize`:@@storefront.orderStatus.acceptedToast:${serverName}:serverName: is taking care of your order`,
          undefined,
          { duration: 6000, horizontalPosition: 'center', verticalPosition: 'top' },
        );
      }
    });

    // Offer background status updates right once there's an actual order to
    // track — a table's first item, or a placed pickup/delivery order — never
    // before, so the permission prompt has an obvious reason behind it.
    effect(() => {
      if (this.hasRequestedPush || !this.store.orderStatus()?.hasActiveOrder) {
        return;
      }
      this.hasRequestedPush = true;
      if (qrToken) {
        this.guestPushService.requestPermissionAndRegister({ qrToken });
      } else {
        const orderId = this.store.activeOrderId();
        if (orderId) {
          this.guestPushService.requestPermissionAndRegister({ orderId });
        }
      }
    });
  }

  private maybePromptForLanguage(): void {
    if (localStorage.getItem(STOREFRONT_LANG_STORAGE_KEY)) {
      return;
    }
    this.dialog.open(LanguageSelectDialogComponent, {
      width: '360px',
      disableClose: true,
      data: { dismissible: false },
    });
  }

  ngOnDestroy(): void {
    this.socketService.disconnect();
  }
}
