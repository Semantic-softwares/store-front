import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorefrontStore } from '../data-access/storefront.store';
import { LoadingStateComponent } from '../components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';
import { WifiCardComponent } from '../components/wifi-card/wifi-card.component';
import { StoreFooterComponent } from '../components/store-footer/store-footer.component';
import { syncStorefrontThemeVars } from '../theme-engine/storefront-theme-vars';

// The storefront's "front door" — a plain link to a store (no QR scan) lands
// here first, not straight into the menu. Just resolves the store by slug and
// renders its branding + a way into the menu; the actual ordering UI only
// lives behind /menu (browse-only) or /t/:qrToken (table-scanned), same as
// before this page existed. Content here is deliberately minimal — this is
// the one page the backoffice will eventually make customizable per store.
@Component({
  selector: 'app-store-landing',
  standalone: true,
  imports: [LoadingStateComponent, EmptyStateComponent, WifiCardComponent, StoreFooterComponent],
  templateUrl: './store-landing.component.html',
})
export class StoreLandingComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly store = inject(StorefrontStore);

  constructor() {
    syncStorefrontThemeVars();

    const storeSlug = this.route.snapshot.paramMap.get('storeSlug');
    if (storeSlug) {
      this.store.resolveBySlug(storeSlug);
    }
  }

  viewMenu(): void {
    this.router.navigate(['menu'], { relativeTo: this.route });
  }
}
