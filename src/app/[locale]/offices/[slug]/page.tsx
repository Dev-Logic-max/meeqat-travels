'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { getOffice, mapsUrl, offices } from '@/content/offices';
import ratesData from '@/content/rates.json';
import { useI18n } from '@/i18n/LocaleProvider';

export default function OfficePage({ params }: PageProps<'/[locale]/offices/[slug]'>) {
  const { slug } = use(params);
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const office = getOffice(slug);
  if (!office) notFound();

  const others = offices.filter((o) => o.slug !== office.slug).slice(0, 3);
  const localName =
    locale === 'ur' ? office.cityUrdu : locale === 'ar' ? office.cityArabic : office.city;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        {/* Header */}
        <section className="border-b border-[#e8e4dc] bg-[#FBF9F4]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12px] text-[#8a8378]">
              <Link href={p('/offices')} className="hover:text-[#0B4D3B]">
                {t.offices.title}
              </Link>
              <span>/</span>
              <span className="text-[#5c5c5c]">{office.city}</span>
            </nav>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h1 className="font-serif text-3xl text-[#0B4D3B] sm:text-4xl">{office.city}</h1>
              {localName !== office.city && (
                <span className="font-serif text-xl text-[#B98B3C]">{localName}</span>
              )}
              <span
                className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide ${
                  office.isHeadOffice
                    ? 'bg-[#0B4D3B] text-[#E3C77E]'
                    : 'border border-[#e8e4dc] bg-white text-[#6b6b6b]'
                }`}
              >
                {office.isHeadOffice ? t.offices.headOffice : t.offices.branch}
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5c5c5c]">
              {office.intro}
            </p>

            {!office.verified && (
              <p className="mt-4 inline-block rounded border border-[#e6d9b8] bg-[#FBF3DF] px-3 py-2 text-[12px] text-[#7a5c1d]">
                Street address and direct line for this branch are being confirmed. Please call
                the head office on {ratesData.agency.phonePrimary} before travelling here.
              </p>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {/* Photos + services */}
            <div className="lg:col-span-2 space-y-8">
              <ImageSlider
                images={office.images}
                alt={`Meeqat Travel & Tours office, ${office.city}`}
                className="aspect-[16/10] rounded-lg"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />

              <div>
                <h2 className="mb-4 font-serif text-xl text-[#16243F]">{t.offices.services}</h2>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {office.services.map((s) => (
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
            </div>

            {/* Contact rail */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5">
                <h2 className="mb-4 font-serif text-lg text-[#16243F]">{t.offices.findUs}</h2>

                <div className="space-y-3.5 text-[13px]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B98B3C]" />
                    <div>
                      <p className="text-[#3a3a3a]">{office.addressLine}</p>
                      {locale === 'ur' && (
                        <p className="mt-1 text-[#6b6b6b]" lang="ur">
                          {office.addressUrdu}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Plane className="mt-0.5 h-4 w-4 shrink-0 text-[#B98B3C]" />
                    <p className="text-[#3a3a3a]">{office.nearestAirport}</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#B98B3C]" />
                    <div className="space-y-0.5">
                      {office.hours.map((h) => (
                        <p key={h.days} className="text-[#3a3a3a]">
                          <span className="text-[#6b6b6b]">{h.days}</span> — {h.time}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-[#B98B3C]" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="font-medium text-[#0B4D3B] hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-[#B98B3C]" />
                    <a
                      href={`mailto:${ratesData.agency.email}`}
                      className="text-[#0B4D3B] hover:underline"
                    >
                      {ratesData.agency.email}
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <a
                    href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(
                      `Assalam o Alaikum, I would like to speak to the Meeqat ${office.city} office.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#063528]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.common.getQuote}
                  </a>
                  <a
                    href={mapsUrl(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md border border-[#e8e4dc] px-4 py-2.5 text-[13px] text-[#16243F] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B]"
                  >
                    <MapPin className="h-4 w-4" />
                    {t.common.openInMaps}
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5">
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  Other offices
                </h3>
                <ul className="space-y-1.5">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={p(`/offices/${o.slug}`)}
                        className="group flex items-center justify-between gap-2 py-1 text-[13px] text-[#3a3a3a] hover:text-[#0B4D3B]"
                      >
                        {o.city}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 rtl:rotate-180" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p('/offices')}
                  className="mt-3 inline-block text-[12.5px] font-medium text-[#0B4D3B] hover:underline"
                >
                  {t.menu.viewAll} →
                </Link>
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
