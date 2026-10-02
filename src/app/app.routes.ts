import { Routes } from '@angular/router';

// '' = the store's landing page (/:storeSlug) — a plain link, no QR scan.
// 'menu' = browse-only ordering (/:storeSlug/menu), reached via the landing
// page's "View Menu" button. 't/:qrToken' = table-ordering context
// (/:storeSlug/t/:qrToken), reached by scanning a table's QR code. 'menu' and
// 't/:qrToken' share the same shell component, which resolves either way
// based on which route params are present — see storefront-shell.component.ts.
export const routes: Routes = [
  {
    path: ':storeSlug',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./store-landing/store-landing.component').then((m) => m.StoreLandingComponent),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./storefront-shell/storefront-shell.component').then((m) => m.StorefrontShellComponent),
      },
      {
        path: 't/:qrToken',
        loadComponent: () =>
          import('./storefront-shell/storefront-shell.component').then((m) => m.StorefrontShellComponent),
      },
    ],
  },
  // Bare domain visit (no store slug) or a link that doesn't match anything
  // above — show a real message instead of leaving <router-outlet> empty.
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/empty-state/empty-state.component').then((m) => m.EmptyStateComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./components/empty-state/empty-state.component').then((m) => m.EmptyStateComponent),
  },
];
