import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, locales } from '@/i18n/config';

/**
 * Sends every un-prefixed request to a locale URL, so /umrah-packages becomes
 * /en/umrah-packages. Real URLs per language is what makes Urdu and Arabic
 * indexable and shareable — a client-side toggle is invisible to Google and
 * cannot be linked to.
 */
function pickLocale(request: NextRequest): string {
  // A returning visitor's choice wins over their browser setting.
  const saved = request.cookies.get('NEXT_LOCALE')?.value;
  if (saved && isLocale(saved)) return saved;

  const header = request.headers.get('accept-language');
  if (header) {
    for (const part of header.split(',')) {
      const tag = part.split(';')[0].trim().toLowerCase();
      const base = tag.split('-')[0];
      if (isLocale(base)) return base;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the metadata files and anything with a file extension.
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
