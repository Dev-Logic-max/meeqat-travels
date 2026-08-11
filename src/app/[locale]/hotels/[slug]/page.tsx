'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Check,
  ExternalLink,
  Footprints,
  ImageOff,
  MessageCircle,
  Star,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { formatDistance, getHotel, hotelsByCity } from '@/content/hotels';
import ratesData from '@/content/rates.json';
import { useI18n } from '@/i18n/LocaleProvider';

export default function HotelPage({ params }: PageProps<'/[locale]/hotels/[slug]'>) {
  const { slug } = use(params);
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const hotel = getHotel(slug);
  if (!hotel) notFound();

  const nearby = hotelsByCity(hotel.city)
    .filter((h) => h.slug !== hotel.slug)
    .slice(0, 4);

  const cityLabel = hotel.city === 'makkah' ? 'Makkah' : 'Madina';

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#FBF9F4]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12px] text-[#8a8378]">
              <Link href={p('/hotels')} className="hover:text-[#0B4D3B]">
                Hotels
              </Link>
              <span>/</span>
              <span className="text-[#5c5c5c]">{cityLabel}</span>
            </nav>

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-0.5 rounded-full bg-[#0B4D3B] px-2.5 py-1 text-[10.5px] font-semibold text-[#E3C77E]">
                {hotel.stars}
                <Star className="h-2.5 w-2.5 fill-current" />
              </span>
              <span className="rounded-full border border-[#e8e4dc] bg-white px-2.5 py-1 text-[10.5px] text-[#6b6b6b]">
                {hotel.zone}
              </span>
              {hotel.commonForUmrahGroups && (
                <span className="rounded-full border border-[#B98B3C]/40 bg-white px-2.5 py-1 text-[10.5px] text-[#B98B3C]">
                  Commonly used for groups
                </span>
              )}
            </div>

            <h1 className="max-w-3xl font-serif text-[1.7rem] leading-[1.2] text-[#0B4D3B] sm:text-4xl">
              {hotel.name}
            </h1>

            <p className="mt-3 flex items-start gap-2 text-[14.5px] text-[#5c5c5c]">
              <Footprints className="mt-1 h-4 w-4 shrink-0 text-[#B98B3C]" />
              {formatDistance(hotel)} to {hotel.distanceReference} · about {hotel.walkMinutes}{' '}
              minutes on foot
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="space-y-8 lg:col-span-2">
              {hotel.photos.length > 0 ? (
                <ImageSlider
                  images={hotel.photos}
                  alt={hotel.name}
                  className="aspect-[16/9] rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  autoPlay
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[#ded5c4] bg-[#FBF9F4] px-6 py-14 text-center">
                  <ImageOff className="h-6 w-6 text-[#b5ad9c]" />
                  <p className="max-w-md text-[13px] leading-relaxed text-[#6b6b6b]">
                    We do not publish photographs of this hotel because we do not hold licensed
                    images of it. A stock photo of a different building would tell you nothing
                    true. See the real photographs on the hotel&rsquo;s own site below — or ask
                    us and we will send you pictures from our own groups&rsquo; stays.
                  </p>
                  <a
                    href={hotel.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0B4D3B] hover:underline"
                  >
                    Official hotel website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              {hotel.notes && (
                <p className="rounded-lg border border-[#e8e4dc] bg-white p-5 text-[13.5px] leading-relaxed text-[#3a3a3a]">
                  {hotel.notes}
                </p>
              )}

              <div>
                <h2 className="mb-4 font-serif text-xl text-[#16243F]">Services and facilities</h2>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {hotel.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 rounded-md border border-[#f2eee5] bg-white px-3.5 py-2.5 text-[13px] text-[#3a3a3a]"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-xl text-[#16243F]">
                  Other hotels in {cityLabel}
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {nearby.map((h) => (
                    <Link
                      key={h.slug}
                      href={p(`/hotels/${h.slug}`)}
                      className="group rounded-md border border-[#e8e4dc] bg-white p-4 transition-colors hover:border-[#0B4D3B]"
                    >
                      <span className="block text-[13.5px] font-medium leading-snug text-[#1a1a1a] group-hover:text-[#0B4D3B]">
                        {h.name}
                      </span>
                      <span className="mt-1 block text-[12px] text-[#6b6b6b]">
                        {h.stars}★ · {formatDistance(h)} · {h.walkMinutes} min walk
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={p('/hotels')}
                  className="mt-4 inline-block text-[13px] font-medium text-[#0B4D3B] hover:underline"
                >
                  View all hotels →
                </Link>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5 lg:sticky lg:top-24">
                <div className="text-[11px] uppercase tracking-wide text-[#8a8378]">
                  {t.common.from}
                </div>
                <div className="font-serif text-[1.9rem] leading-none tabular-nums text-[#0B4D3B]">
                  PKR {hotel.priceFromPKR.toLocaleString('en-PK')}
                </div>
                <p className="mt-2 text-[11.5px] leading-relaxed text-[#8a8378]">
                  Indicative off-peak, per night, double room. Ramadan&rsquo;s last ten nights
                  run several times this. Not a quote — ask us for a firm price with your dates.
                </p>

                <a
                  href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(
                    `Assalam o Alaikum, I would like a quote for a stay at ${hotel.name} in ${cityLabel}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#063528]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.common.getQuote}
                </a>

                <a
                  href={hotel.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[#e8e4dc] px-4 py-3 text-[13px] text-[#16243F] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Official website
                </a>

                <dl className="mt-5 space-y-2 border-t border-[#f2eee5] pt-4 text-[12.5px]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6b6b6b]">Rating</dt>
                    <dd className="font-medium text-[#1a1a1a]">{hotel.stars} star</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6b6b6b]">Zone</dt>
                    <dd className="text-end font-medium text-[#1a1a1a]">{hotel.zone}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6b6b6b]">Walk</dt>
                    <dd className="font-medium text-[#1a1a1a]">~{hotel.walkMinutes} min</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
