'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarCheck, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { visaCategoryLabels, visaGuides, type VisaGuide } from '@/content/visaGuides';
import { useI18n } from '@/i18n/LocaleProvider';

const order: VisaGuide['category'][] = [
  'pilgrimage',
  'visit',
  'work',
  'residency',
  'platform',
];

export default function VisaGuideIndex() {
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#16243F]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <span className="mb-3 block h-px w-10 bg-[#B98B3C]" />
            <h1 className="max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {t.visaGuide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
              {t.visaGuide.subtitle}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11.5px] text-white/70">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E3C77E]" />
              Every page links the official portal it is based on
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-12 px-5 py-12 sm:px-8 sm:py-16">
          {order.map((category) => {
            const guides = visaGuides.filter((g) => g.category === category);
            if (!guides.length) return null;
            return (
              <div key={category}>
                <h2 className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#B98B3C]">
                  {visaCategoryLabels[category]}
                  <span className="h-px flex-1 bg-[#eee7d8]" />
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={p(`/visa-guide/${g.slug}`)}
                      className="group flex flex-col overflow-hidden rounded-lg border border-[#e8e4dc] bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#F2EEE5]">
                        <Image
                          src={g.heroImage}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col gap-2.5 p-5">
                        <h3 className="font-serif text-lg leading-snug text-[#16243F] group-hover:text-[#0B4D3B]">
                          {g.title}
                        </h3>
                        <p className="text-[13px] leading-relaxed text-[#5c5c5c]">{g.summary}</p>
                        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#f2eee5] pt-3">
                          <span className="flex items-center gap-1.5 text-[11px] text-[#8a8378]">
                            <CalendarCheck className="h-3.5 w-3.5" />
                            {t.common.lastVerified} {g.lastVerified}
                          </span>
                          <ArrowRight className="h-4 w-4 text-[#0B4D3B] transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5 text-[12.5px] leading-relaxed text-[#6b6b6b]">
            {t.visaGuide.disclaimer}
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
