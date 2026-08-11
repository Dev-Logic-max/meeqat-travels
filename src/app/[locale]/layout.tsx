import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, localeMeta, type Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleProvider";

// Resolution order matters: an explicit override wins, otherwise fall back to
// whatever domain this deployment actually serves from. Hardcoding
// meeqattravel.com would point og:image at a domain we do not own yet, and
// social crawlers would silently show no preview image. Once the real domain is
// added as the production domain in Vercel, VERCEL_PROJECT_PRODUCTION_URL
// becomes that domain and this picks it up with no code change.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Meeqat Travel & Tours — Licensed Hajj & Umrah Operator";
const description =
  "Licensed Hajj and Umrah tour operator from Rahim Yar Khan, Pakistan. Nusuk-verified hotels in Makkah and Madina, flights, guided ziyarat, and Saudi visit visas — arranged end to end.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — Meeqat Travel & Tours" },
  description,
  applicationName: "Meeqat Travel & Tours",
  keywords: [
    "Umrah packages Pakistan",
    "Umrah package Rahim Yar Khan",
    "licensed Umrah operator",
    "Saudi visit visa Pakistan",
    "Saudi work visa Iqama",
    "Hajj packages Pakistan",
    "Makkah Madina hotels",
    "ziyarat tours",
    "عمرہ پیکج",
    "باقات العمرة",
  ],
  authors: [{ name: "Meeqat Travel & Tours" }],
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      "ur-PK": "/ur",
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Meeqat Travel & Tours",
    title,
    description,
    url: siteUrl,
    locale: "en_PK",
    alternateLocale: ["ur_PK", "ar_SA"],
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const meta = localeMeta[locale as Locale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className="h-full antialiased"
      // Urdu and Arabic need the Nastaliq/Naskh line-height rules in globals.css.
      data-locale={locale}
    >
      <body className="min-h-full flex flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-[#0B4D3B] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <LocaleProvider locale={locale as Locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
