'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BedDouble,
  Building2,
  CalendarDays,
  Check,
  Footprints,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Train,
  X,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ImageSlider } from '@/components/ui/ImageSlider';
import ratesData from '@/content/rates.json';
import { useI18n } from '@/i18n/LocaleProvider';

const notIncluded = [
  'Personal expenses, shopping and gifts',
  'Meals not listed in the inclusions',
  'Qurbani, sadaqah and optional donations',
  'Excess baggage beyond the airline allowance',
  'Passport renewal or attestation fees',
  'Anything caused by flight delays outside our control',
];

export default function PackageDetailPage({
  params,
}: PageProps<'/[locale]/umrah-packages/[id]'>) {
  const { id } = use(params);
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const pkg = ratesData.umrahPackages.find((x) => x.id === id);
  if (!pkg) notFound();

  const others = ratesData.umrahPackages.filter((x) => x.id !== pkg.id);

  const gallery = [
    '/images/hero-kaaba-night.jpg',
    '/images/hotel-makkah-room.jpg',
    '/images/madina-nabawi-sunset.jpg',
    '/images/hotel-madina-lobby.jpg',
  ];

  // A day-by-day outline derived from the actual night split, rather than a
  // generic itinerary that would contradict the package data.
  const itinerary = [
    { day: 'Day 1', title: 'Departure and arrival in Jeddah', detail: 'Group assembles at the departure airport. Arrival at Jeddah, immigration, and transfer to your Makkah hotel.' },
    { day: `Days 2–${pkg.makkahNights}`, title: `Makkah — ${pkg.makkahNights} nights`, detail: `Umrah performed on arrival, then free worship at Masjid al-Haram. Staying at ${pkg.makkahHotel}, ${pkg.distanceMakkah} from the Haram. Guided ziyarat of the Makkah sites.` },
    { day: `Day ${pkg.makkahNights + 1}`, title: 'Transfer to Madina', detail: `Travel by ${pkg.transport}.` },
    { day: `Days ${pkg.makkahNights + 2}–${pkg.durationDays - 1}`, title: `Madina — ${pkg.madinaNights} nights`, detail: `Staying at ${pkg.madinaHotel}, ${pkg.distanceMadina} from Masjid an-Nabawi. Rawdah permit arranged through Nusuk. Ziyarat of Quba, Uhud and Qiblatain.` },
    { day: `Day ${pkg.durationDays}`, title: 'Return', detail: 'Transfer to the airport and return flight to Pakistan.' },
  ];

  const stats = [
    { icon: CalendarDays, label: 'Duration', value: `${pkg.durationDays} days` },
    { icon: Building2, label: 'Makkah', value: `${pkg.makkahNights} nights` },
    { icon: BedDouble, label: 'Madina', value: `${pkg.madinaNights} nights` },
    { icon: Train, label: 'Transport', value: pkg.transport.split('/')[0].trim() },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#FBF9F4]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12px] text-[#8a8378]">
              <Link href={p('/umrah-packages')} className="hover:text-[#0B4D3B]">
                {t.nav.umrah}
              </Link>
              <span>/</span>
              <span className="text-[#5c5c5c]">{pkg.tier}</span>
            </nav>

            <span className="mb-3 inline-block rounded-full border border-[#B98B3C]/40 bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#B98B3C]">
              {pkg.tier}
            </span>

            <h1 className="max-w-3xl font-serif text-[1.75rem] leading-[1.15] text-[#0B4D3B] sm:text-4xl">
              {pkg.name}
            </h1>

            <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[#5c5c5c]">
              {pkg.makkahNights} nights in Makkah and {pkg.madinaNights} in Madina, with hotels
              booked on Nusuk and the visa filed against a confirmed BRN.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="space-y-10 lg:col-span-2">
              <ImageSlider
                images={gallery}
                alt={pkg.name}
                className="aspect-[16/9] rounded-lg"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />

              {/* At a glance */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-[#e8e4dc] bg-white px-4 py-3.5"
                  >
                    <s.icon className="mb-2 h-4 w-4 text-[#B98B3C]" />
                    <div className="text-[10.5px] uppercase tracking-wide text-[#8a8378]">
                      {s.label}
                    </div>
                    <div className="mt-0.5 text-[13.5px] font-semibold leading-snug text-[#1a1a1a]">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hotels */}
              <div>
                <h2 className="mb-4 font-serif text-xl text-[#16243F]">Where you stay</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { city: 'Makkah', hotel: pkg.makkahHotel, dist: pkg.distanceMakkah, nights: pkg.makkahNights },
                    { city: 'Madina', hotel: pkg.madinaHotel, dist: pkg.distanceMadina, nights: pkg.madinaNights },
                  ].map((h) => (
                    <div key={h.city} className="rounded-lg border border-[#e8e4dc] bg-white p-5">
                      <div className="mb-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                        {h.city} · {h.nights} nights
                      </div>
                      <h3 className="font-serif text-[17px] leading-snug text-[#1a1a1a]">
                        {h.hotel}
                      </h3>
                      <p className="mt-2 flex items-start gap-1.5 text-[12.5px] text-[#5c5c5c]">
                        <Footprints className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                        {h.dist}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="mb-5 font-serif text-xl text-[#16243F]">Day by day</h2>
                <ol className="space-y-0">
                  {itinerary.map((step, i) => (
                    <li key={step.day} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < itinerary.length - 1 && (
                        <span
                          className="absolute start-[7px] top-4 bottom-0 w-px bg-[#e8e4dc]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#0B4D3B] bg-white" />
                      <div>
                        <div className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#B98B3C]">
                          {step.day}
                        </div>
                        <h3 className="text-[15px] font-semibold text-[#1a1a1a]">{step.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[#5c5c5c]">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Included / not included */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h2 className="mb-3 font-serif text-lg text-[#16243F]">What is included</h2>
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-[#3a3a3a]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 font-serif text-lg text-[#16243F]">What is not included</h2>
                  <ul className="space-y-2">
                    {notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-[#6b6b6b]">
                        <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b5b0a4]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking rail */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5 lg:sticky lg:top-24">
                <div className="text-[11px] uppercase tracking-wide text-[#8a8378]">
                  {t.common.from}
                </div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-serif text-[2rem] leading-none text-[#0B4D3B]">
                    PKR {pkg.startingPricePKR.toLocaleString('en-PK')}
                  </span>
                  <span className="text-[12px] text-[#8a8378]">{t.common.perPerson}</span>
                </div>
                <p className="mt-2 text-[11.5px] leading-relaxed text-[#8a8378]">
                  Approx. SAR {pkg.startingPriceSAR.toLocaleString()}. Indicative — final price
                  depends on season, room occupancy and seat availability, and is confirmed in
                  writing before you pay anything.
                </p>

                <dl className="mt-4 space-y-2 border-t border-[#f2eee5] pt-4 text-[12.5px]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6b6b6b]">Visa</dt>
                    <dd className="text-end font-medium text-[#1a1a1a]">{pkg.visaType}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6b6b6b]">Transport</dt>
                    <dd className="text-end font-medium text-[#1a1a1a]">{pkg.transport}</dd>
                  </div>
                </dl>

                <div className="mt-5 space-y-2">
                  <a
                    href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(
                      `Assalam o Alaikum, I would like a firm quote for the "${pkg.name}" package (${pkg.durationDays} days). Please share available dates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#063528]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.common.getQuote}
                  </a>
                  <a
                    href={`tel:${ratesData.agency.phonePrimary.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-md border border-[#e8e4dc] px-4 py-3 text-[13px] text-[#16243F] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B]"
                  >
                    <Phone className="h-4 w-4" />
                    {ratesData.agency.phonePrimary}
                  </a>
                  <Link
                    href={p('/package-builder')}
                    className="block rounded-md border border-[#e8e4dc] px-4 py-3 text-center text-[13px] text-[#16243F] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B]"
                  >
                    Adjust this into a custom package
                  </Link>
                </div>

                <p className="mt-4 flex items-start gap-2 border-t border-[#f2eee5] pt-4 text-[11.5px] leading-relaxed text-[#6b6b6b]">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                  Booked as a licensed operator. An Umrah visa cannot be filed until your hotel
                  BRN and transport are confirmed on Nusuk, so no one can issue one instantly.
                </p>
              </div>

              <div className="rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5">
                <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  Compare packages
                </h2>
                <ul className="space-y-3">
                  {others.map((o) => (
                    <li key={o.id}>
                      <Link
                        href={p(`/umrah-packages/${o.id}`)}
                        className="group block rounded-md border border-[#e8e4dc] bg-white p-3 transition-colors hover:border-[#0B4D3B]"
                      >
                        <span className="block text-[10.5px] uppercase tracking-wide text-[#B98B3C]">
                          {o.tier}
                        </span>
                        <span className="block text-[13.5px] font-medium leading-snug text-[#1a1a1a] group-hover:text-[#0B4D3B]">
                          {o.name}
                        </span>
                        <span className="mt-1 block text-[12px] text-[#6b6b6b]">
                          {t.common.from} PKR {o.startingPricePKR.toLocaleString('en-PK')}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
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
