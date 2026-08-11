/**
 * Locale configuration.
 *
 * Arabic was originally out of scope (the buyer base is Pakistani), but it was
 * later requested explicitly, so it ships as a first-class locale here.
 */

export const locales = ['en', 'ur', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export interface LocaleMeta {
  /** Name written in its own language — what a speaker looks for in a menu. */
  nativeLabel: string;
  /** Name in English, for the aria-label and for non-speakers. */
  englishLabel: string;
  dir: 'ltr' | 'rtl';
  /** Regional flag shown in the switcher. Unicode, so no image request. */
  flag: string;
  /** BCP-47 tag for <html lang> and hreflang. */
  htmlLang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    nativeLabel: 'English',
    englishLabel: 'English',
    dir: 'ltr',
    flag: '🇬🇧',
    htmlLang: 'en',
  },
  ur: {
    nativeLabel: 'اردو',
    englishLabel: 'Urdu',
    dir: 'rtl',
    flag: '🇵🇰',
    htmlLang: 'ur-PK',
  },
  ar: {
    nativeLabel: 'العربية',
    englishLabel: 'Arabic',
    dir: 'rtl',
    flag: '🇸🇦',
    htmlLang: 'ar-SA',
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDir(locale: Locale): 'ltr' | 'rtl' {
  return localeMeta[locale].dir;
}

/**
 * Swap the locale segment of a path, keeping the rest of the route.
 * `/ur/offices/multan` + `ar` -> `/ar/offices/multan`
 */
export function localizePath(pathname: string, next: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return '/' + segments.join('/');
}
