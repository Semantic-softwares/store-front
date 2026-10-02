import { Component, inject, signal } from '@angular/core';
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
  selector: 'app-storefront-classic-theme',
  standalone: true,
  imports: [ProductCardComponent, LanguageSwitcherComponent, WifiCardComponent, StoreFooterComponent, MatIconModule],
  templateUrl: './classic-theme.component.html',
  styleUrl: './classic-theme.component.scss',
})
export class ClassicThemeComponent {
  protected readonly store = inject(StorefrontStore);
  private readonly dialog = inject(MatDialog);

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
}
