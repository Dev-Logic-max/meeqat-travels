import type { Metadata } from "next";
import "./globals.css";

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
  title: {
    default: title,
    template: "%s — Meeqat Travel & Tours",
  },
  description,
  applicationName: "Meeqat Travel & Tours",
  keywords: [
    "Umrah packages Pakistan",
    "Umrah package Rahim Yar Khan",
    "licensed Umrah operator",
    "Saudi visit visa Pakistan",
    "Hajj packages Pakistan",
    "Makkah Madina hotels",
    "ziyarat tours",
    "عمرہ پیکج",
  ],
  authors: [{ name: "Meeqat Travel & Tours" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Meeqat Travel & Tours",
    title,
    description,
    url: siteUrl,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
