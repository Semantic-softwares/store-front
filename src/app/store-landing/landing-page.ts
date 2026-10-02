import { StorefrontStoreInfo } from '../data-access/storefront.models';

/** One item in the strip along the bottom of the home page. */
export interface LandingHighlight {
  icon: string;
  title: string;
  subtitle: string;
}

/**
 * Store.selfOrderSettings.landingPage — what the back office's "Home page"
 * settings write. Every field is optional: a store that has never opened
 * those settings still gets a complete page from the defaults below.
 */
export interface LandingPageSettings {
  logoText?: string;
  accentColor?: string;
  backgroundType?: 'image' | 'video';
  backgroundImage?: string;
  backgroundVideo?: string;
  badgeText?: string;
  headline?: string;
  headlineAccent?: string;
  subtext?: string;
  showOrderButton?: boolean;
  orderButtonText?: string;
  showMenuButton?: boolean;
  menuButtonText?: string;
  showHighlights?: boolean;
  highlights?: LandingHighlight[];
}

export interface ResolvedLandingPage {
  logoText: string;
  accentColor: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  badgeText?: string;
  headline: string;
  headlineAccent: string;
  subtext: string;
  showOrderButton: boolean;
  orderButtonText: string;
  showMenuButton: boolean;
  menuButtonText: string;
  highlights: LandingHighlight[];
}

export const DEFAULT_ACCENT = '#f97316';

export const DEFAULT_HIGHLIGHTS: LandingHighlight[] = [
  { icon: 'delivery_dining', title: 'Fast delivery', subtitle: 'Straight to your door' },
  { icon: 'eco', title: 'Fresh ingredients', subtitle: 'Prepared to order' },
  { icon: 'touch_app', title: 'Easy ordering', subtitle: 'Done in a few taps' },
];

const text = (value: string | undefined, fallback: string): string => value?.trim() || fallback;

export function resolveLandingPage(info: StorefrontStoreInfo): ResolvedLandingPage {
  const s: LandingPageSettings = info.selfOrderSettings?.landingPage ?? {};
  const backgroundImage = s.backgroundImage?.trim() || info.bannerImage || undefined;
  const backgroundVideo = s.backgroundType === 'video' ? s.backgroundVideo?.trim() || undefined : undefined;

  return {
    logoText: text(s.logoText, info.name),
    accentColor: text(s.accentColor, DEFAULT_ACCENT),
    backgroundImage,
    backgroundVideo,
    badgeText: s.badgeText?.trim() || undefined,
    headline: text(s.headline, 'Fresh food,'),
    headlineAccent: s.headlineAccent === undefined ? 'made with love' : s.headlineAccent.trim(),
    subtext: text(
      s.subtext,
      info.description || `Order from ${info.name} in a few taps — for pickup, delivery or right at your table.`,
    ),
    showOrderButton: s.showOrderButton ?? true,
    orderButtonText: text(s.orderButtonText, 'Order Now'),
    showMenuButton: s.showMenuButton ?? true,
    menuButtonText: text(s.menuButtonText, 'View Menu'),
    highlights:
      s.showHighlights === false
        ? []
        : (s.highlights?.length ? s.highlights : DEFAULT_HIGHLIGHTS).filter((h) => h.title?.trim()),
  };
}
