'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { AutoRotateImage } from '@/components/ui/ImageSlider';
import { offices } from '@/content/offices';
import { useI18n } from '@/i18n/LocaleProvider';

export default function OfficesPage() {
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#FBF9F4]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <span className="mb-3 block h-px w-10 bg-[#B98B3C]" />
            <h1 className="max-w-2xl font-serif text-3xl leading-tight text-[#0B4D3B] sm:text-4xl lg:text-[2.75rem]">
              {t.offices.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5c5c5c]">
              {t.offices.subtitle}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <Link
                key={office.slug}
                href={p(`/offices/${office.slug}`)}
                className="group flex flex-col overflow-hidden rounded-lg border border-[#e8e4dc] bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <AutoRotateImage
                  images={office.images}
                  alt={`Meeqat Travel office in ${office.city}`}
                  className="aspect-[16/10]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  interval={8}
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-3 start-4 end-4 flex items-center justify-between gap-2">
                    <span className="font-serif text-lg text-white">{office.city}</span>
                    {office.isHeadOffice && (
                      <span className="rounded-full border border-[#E3C77E]/60 bg-black/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#E3C77E]">
                        {t.offices.headOffice}
                      </span>
                    )}
                  </span>
                </AutoRotateImage>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-[13px] leading-relaxed text-[#5c5c5c]">{office.intro}</p>
                  <div className="mt-auto space-y-1.5 border-t border-[#f2eee5] pt-3 text-[12px] text-[#6b6b6b]">
                    <span className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B98B3C]" />
                      <span>{office.addressLine}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-[#B98B3C]" />
                      <span>{office.nearestAirport}</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#0B4D3B]">
                    {t.offices.visitUs}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5 text-[13px] leading-relaxed text-[#5c5c5c] sm:p-6">
            <strong className="text-[#0B4D3B]">Not near any of these?</strong> We work with
            agents across Pakistan, and most of a file can be handled over WhatsApp — only the
            Tasheer biometrics require you in person. Call{' '}
            <a href="tel:+923006842111" className="font-medium text-[#0B4D3B] underline">
              +92 300 6842111
            </a>{' '}
            and we will tell you the nearest place you actually need to travel to.
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
