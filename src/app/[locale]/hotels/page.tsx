'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Footprints, Info, Star } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { formatDistance, hotelsByCity, type HotelCity } from '@/content/hotels';
import { useI18n } from '@/i18n/LocaleProvider';

type SortKey = 'distance' | 'price' | 'stars';

export default function HotelsPage() {
  const { locale } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const [city, setCity] = useState<HotelCity>('makkah');
  const [sort, setSort] = useState<SortKey>('distance');
  const [maxStars, setMaxStars] = useState<number | null>(null);

  const list = useMemo(() => {
    let rows = hotelsByCity(city);
    if (maxStars) rows = rows.filter((h) => h.stars === maxStars);
    if (sort === 'price') rows = [...rows].sort((a, b) => a.priceFromPKR - b.priceFromPKR);
    if (sort === 'stars') rows = [...rows].sort((a, b) => b.stars - a.stars);
    return rows;
  }, [city, sort, maxStars]);

  const cityLabel = city === 'makkah' ? 'Makkah' : 'Madina';
  const reference = city === 'makkah' ? 'Masjid al-Haram' : "the Prophet's Mosque";

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#FBF9F4]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
            <span className="mb-3 block h-px w-10 bg-[#B98B3C]" />
            <h1 className="font-serif text-3xl text-[#0B4D3B] sm:text-4xl">
              Hotels in Makkah &amp; Madina
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5c5c5c]">
              Every hotel we book, sorted by how far you actually have to walk. Distances are
              approximate and measured to the nearest gate — published figures differ widely
              because sources measure to different points.
            </p>

            <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#e6d9b8] bg-[#FBF3DF] p-4 text-[12.5px] leading-relaxed text-[#6b5320]">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                We do not publish photographs of these hotels because we do not hold licensed
                images of them, and a stock photo of a different building would be misleading.
                Every hotel below links to its own official site, where the real photographs are.
                Ask us and we will send you photographs from our own groups&rsquo; stays.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
          {/* Controls */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-lg border border-[#e8e4dc] bg-white p-1">
              {(['makkah', 'madina'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={`rounded-md px-4 py-2 text-[13px] font-medium transition-colors ${
                    city === c ? 'bg-[#0B4D3B] text-white' : 'text-[#5c5c5c] hover:text-[#0B4D3B]'
                  }`}
                >
                  {c === 'makkah' ? 'Makkah' : 'Madina'}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-[#e8e4dc] bg-white px-3 py-2 text-[13px] text-[#3a3a3a]"
              aria-label="Sort hotels"
            >
              <option value="distance">Nearest first</option>
              <option value="price">Lowest price first</option>
              <option value="stars">Highest rating first</option>
            </select>

            <div className="inline-flex rounded-lg border border-[#e8e4dc] bg-white p-1">
              {[null, 5, 4, 3].map((s) => (
                <button
                  key={String(s)}
                  onClick={() => setMaxStars(s)}
                  className={`rounded-md px-3 py-2 text-[12.5px] transition-colors ${
                    maxStars === s ? 'bg-[#16243F] text-white' : 'text-[#5c5c5c] hover:text-[#0B4D3B]'
                  }`}
                >
                  {s === null ? 'All' : `${s}★`}
                </button>
              ))}
            </div>

            <span className="ms-auto text-[12.5px] text-[#8a8378]">
              {list.length} hotels in {cityLabel}
            </span>
          </div>

          {/* List */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((h) => (
              <div
                key={h.slug}
                className="flex flex-col rounded-lg border border-[#e8e4dc] bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-[#0B4D3B]/8 px-2 py-0.5 text-[10.5px] font-semibold text-[#0B4D3B]">
                    {h.stars}
                    <Star className="h-2.5 w-2.5 fill-current" />
                  </span>
                  <span className="rounded-full border border-[#e8e4dc] px-2 py-0.5 text-[10.5px] text-[#6b6b6b]">
                    {h.zone}
                  </span>
                </div>

                <h2 className="font-serif text-[16px] leading-snug text-[#1a1a1a]">
                  <Link href={p(`/hotels/${h.slug}`)} className="hover:text-[#0B4D3B]">
                    {h.name}
                  </Link>
                </h2>

                <p className="mt-2 flex items-start gap-1.5 text-[12.5px] text-[#5c5c5c]">
                  <Footprints className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B98B3C]" />
                  <span>
                    {formatDistance(h)} to {h.distanceReference} · about {h.walkMinutes} min walk
                  </span>
                </p>

                <p className="mt-3 text-[13px] tabular-nums text-[#0B4D3B]">
                  From PKR {h.priceFromPKR.toLocaleString('en-PK')}
                  <span className="text-[11px] text-[#8a8378]"> / night, off-peak</span>
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#f2eee5] pt-3">
                  <Link
                    href={p(`/hotels/${h.slug}`)}
                    className="flex items-center gap-1 text-[12.5px] font-medium text-[#0B4D3B] hover:underline"
                  >
                    Details <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                  <a
                    href={h.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[12px] text-[#8a8378] hover:text-[#0B4D3B]"
                  >
                    Official site <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[12px] leading-relaxed text-[#8a8378]">
            Prices are indicative off-peak nightly rates for a double room and move constantly
            with season and availability. Ramadan&rsquo;s last ten nights cost several times
            these figures. Nothing here is a quote — ask us for a firm price.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
