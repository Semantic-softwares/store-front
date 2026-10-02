import { DestroyRef, effect, inject } from '@angular/core';
import { StorefrontStore } from '../data-access/storefront.store';

const THEME_CSS_VARS = ['--sf-accent', '--sf-text', '--sf-font-family'] as const;

/**
 * Mirrors the active store's theme settings onto :root (not just the calling
 * component's host) so MatDialog/MatBottomSheet content — portaled to a CDK
 * overlay attached directly to <body>, outside any component's DOM subtree —
 * still inherits the store's chosen colors. Shared by every top-level page
 * that reads from StorefrontStore (the order shell, the landing page), since
 * each one is reached directly by URL and needs this applied independently.
 * Must be called from an injection context (e.g. a component constructor).
 */
export function syncStorefrontThemeVars(): void {
  const store = inject(StorefrontStore);

  effect(() => {
    const settings = store.themeSettings();
    const root = document.documentElement.style;
    settings['accentColor'] ? root.setProperty('--sf-accent', settings['accentColor']) : root.removeProperty('--sf-accent');
    settings['primaryColor'] ? root.setProperty('--sf-text', settings['primaryColor']) : root.removeProperty('--sf-text');
    settings['fontFamily'] ? root.setProperty('--sf-font-family', settings['fontFamily']) : root.removeProperty('--sf-font-family');
  });

  inject(DestroyRef).onDestroy(() => {
    const root = document.documentElement.style;
    for (const prop of THEME_CSS_VARS) {
      root.removeProperty(prop);
    }
  });
}
