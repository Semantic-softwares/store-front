import { Component, DestroyRef, ElementRef, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StorefrontStore } from '../../data-access/storefront.store';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { WifiCardComponent } from '../../components/wifi-card/wifi-card.component';
import { StoreFooterComponent } from '../../components/store-footer/store-footer.component';
import { StoreInfoDialogComponent } from '../../components/store-info-dialog/store-info-dialog.component';
import { shareStorefrontLink } from '../../theme-engine/share-storefront-link';

@Component({
  selector: 'app-storefront-modern-theme',
  standalone: true,
  imports: [ProductCardComponent, LanguageSwitcherComponent, WifiCardComponent, StoreFooterComponent, MatIconModule],
  templateUrl: './modern-theme.component.html',
  styleUrl: './modern-theme.component.scss',
})
export class ModernThemeComponent {
  protected readonly store = inject(StorefrontStore);
  private readonly dialog = inject(MatDialog);
  protected readonly activeSectionId = signal<string | null>(null);
  protected readonly justCopied = signal(false);

  async share(): Promise<void> {
    const outcome = await shareStorefrontLink(this.store.storeInfo()?.name || 'Menu');
    if (outcome === 'copied') {
      this.justCopied.set(true);
      setTimeout(() => this.justCopied.set(false), 2000);
    }
  }

  openInfo(): void {
    this.dialog.open(StoreInfoDialogComponent, { width: '420px' });
  }

  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  // Suppressed while a tap-triggered smooth scroll is in flight, so the
  // scrollspy doesn't fight the button that just set the active section.
  private isProgrammaticScroll = false;

  constructor() {
    effect(() => {
      this.store.menu(); // re-run whenever sections are (re)rendered
      // Sections are rendered by @for off this same signal — defer to the
      // next tick so the DOM actually has them before we query for it.
      setTimeout(() => this.setupObserver());
    });

    inject(DestroyRef).onDestroy(() => this.observer?.disconnect());
  }

  private setupObserver(): void {
    this.observer?.disconnect();
    const sections = this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[id^="sf-section-"]');
    if (!sections.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.isProgrammaticScroll) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Topmost currently-intersecting section wins.
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        const id = topMost.target.id.replace('sf-section-', '');
        this.activeSectionId.set(id);
        this.scrollNavIntoView(id);
      },
      // Counts a section "active" once it's past the sticky nav bar and
      // within the top ~30% of the viewport — avoids two sections both
      // registering as active during a fast scroll.
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((el) => this.observer!.observe(el));
  }

  scrollTo(sectionId: string): void {
    this.activeSectionId.set(sectionId);
    this.isProgrammaticScroll = true;
    document.getElementById('sf-section-' + sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.scrollNavIntoView(sectionId);
    setTimeout(() => {
      this.isProgrammaticScroll = false;
    }, 700);
  }

  private scrollNavIntoView(sectionId: string): void {
    const btn = this.elementRef.nativeElement.querySelector<HTMLElement>(`[data-nav-id="${sectionId}"]`);
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}
