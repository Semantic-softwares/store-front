import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StorefrontStore } from '../data-access/storefront.store';
import { LoadingStateComponent } from '../components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';
import { ContactDialogComponent, ContactDialogData } from '../components/contact-dialog/contact-dialog.component';
import { syncStorefrontThemeVars } from '../theme-engine/storefront-theme-vars';
import { resolveLandingPage } from './landing-page';

// The storefront's "front door" — a plain link to a store (no QR scan) lands
// here first, not straight into the menu. Everything on it — copy, buttons,
// background image or video, the feature strip — comes from
// selfOrderSettings.landingPage, edited in the back office's Self-Order
// settings; resolveLandingPage() fills in anything the store hasn't set.
@Component({
  selector: 'app-store-landing',
  standalone: true,
  imports: [LoadingStateComponent, EmptyStateComponent, MatIconModule],
  templateUrl: './store-landing.component.html',
  styleUrl: './store-landing.component.css',
  host: { '(document:keydown.escape)': 'mobileNavOpen.set(false)' },
})
export class StoreLandingComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  protected readonly store = inject(StorefrontStore);

  protected readonly page = computed(() => {
    const info = this.store.storeInfo();
    return info ? resolveLandingPage(info) : null;
  });

  protected readonly mobileNavOpen = signal(false);

  private readonly video = viewChild<ElementRef<HTMLVideoElement>>('bgVideo');

  constructor() {
    syncStorefrontThemeVars();

    const storeSlug = this.route.snapshot.paramMap.get('storeSlug');
    if (storeSlug) {
      this.store.resolveBySlug(storeSlug);
    }

    // Autoplay is only allowed muted, and Angular's `muted` attribute doesn't
    // set the element's muted *property*, so set it here before playing.
    // Reduced-motion visitors get the still poster instead.
    effect(() => {
      const el = this.video()?.nativeElement;
      if (!el) return;
      el.muted = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.pause();
        return;
      }
      el.play().catch(() => {
        // Blocked (e.g. low-power mode): the poster stays up, which is fine.
      });
    });
  }

  viewMenu(): void {
    this.mobileNavOpen.set(false);
    this.router.navigate(['menu'], { relativeTo: this.route });
  }

  openContact(): void {
    this.mobileNavOpen.set(false);
    this.dialog.open<ContactDialogComponent, ContactDialogData>(ContactDialogComponent, {
      width: '440px',
      maxWidth: 'calc(100vw - 32px)',
      panelClass: 'lp-dialog',
      autoFocus: 'dialog',
      data: { accentColor: this.page()?.accentColor ?? '#f97316' },
    });
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }
}
