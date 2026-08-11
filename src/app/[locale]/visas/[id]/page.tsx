'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BookOpen,
  CalendarClock,
  Check,
  ExternalLink,
  Fingerprint,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import ratesData from '@/content/rates.json';
import { visaGuides } from '@/content/visaGuides';
import { useI18n } from '@/i18n/LocaleProvider';

/** Which deep-dive guide, if any, explains this product in full. */
const guideFor: Record<string, string> = {
  'saudi-umrah': 'umrah-visa',
  'saudi-tourist-multiple': 'saudi-visit-visa',
};

const howItWorks = [
  {
    title: 'Bring your documents to any Meeqat office',
    detail:
      'We check the file before anything is submitted. Most refusals we see are avoidable paperwork errors that get caught at this stage.',
  },
  {
    title: 'We prepare and lodge the application',
    detail:
      'Forms, portal registration and fee payment through official channels only — never into a personal account.',
  },
  {
    title: 'You attend biometrics where required',
    detail:
      'Pakistani passport holders cannot use the Saudi e-visa route. Fingerprints and photograph are captured in person at a Tasheer centre; we book the appointment.',
  },
  {
    title: 'Decision and passport return',
    detail:
      'The mission decides. We collect your passport, explain the outcome, and if it is a refusal we tell you honestly whether reapplying is realistic.',
  },
];

export default function VisaDetailPage({ params }: PageProps<'/[locale]/visas/[id]'>) {
  const { id } = use(params);
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const visa = ratesData.visaCategories.find((v) => v.id === id);
  if (!visa) notFound();

  const others = ratesData.visaCategories.filter((v) => v.id !== visa.id);
  const guideSlug = guideFor[visa.id];
  const guide = guideSlug ? visaGuides.find((g) => g.slug === guideSlug) : undefined;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#16243F]">
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
              <Link href={p('/visas')} className="hover:text-[#E3C77E]">
                {t.nav.visas}
              </Link>
              <span>/</span>
              <span className="text-white/75">{visa.country}</span>
            </nav>

            <div className="flex items-start gap-4">
              <span className="text-4xl leading-none" aria-hidden="true">
                {visa.flag}
              </span>
              <div>
                <h1 className="max-w-2xl font-serif text-[1.6rem] leading-[1.2] text-white sm:text-3xl">
                  {visa.title}
                </h1>
                <p className="mt-2 text-[13.5px] text-white/70">
                  {visa.country} · {visa.validity}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="space-y-10 lg:col-span-2">
              {/* Key facts */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: CalendarClock, label: 'Validity', value: visa.validity },
                  { icon: Fingerprint, label: 'Processing', value: visa.processingDays },
                  {
                    icon: ShieldCheck,
                    label: t.common.from,
                    value: `PKR ${visa.startingPricePKR.toLocaleString('en-PK')}`,
                  },
                ].map((s) => (
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

              {/* Requirements */}
              <div>
                <h2 className="mb-4 font-serif text-xl text-[#16243F]">
                  {t.visaGuide.documents}
                </h2>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {visa.requirements.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2.5 rounded-md border border-[#f2eee5] bg-white px-3.5 py-2.5 text-[13px] text-[#3a3a3a]"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="mb-5 font-serif text-xl text-[#16243F]">{t.visaGuide.steps}</h2>
                <ol className="space-y-0">
                  {howItWorks.map((step, i) => (
                    <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < howItWorks.length - 1 && (
                        <span
                          className="absolute start-[15px] top-8 bottom-0 w-px bg-[#e8e4dc]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8e4dc] bg-white font-serif text-[13px] text-[#0B4D3B]">
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <h3 className="text-[15px] font-semibold text-[#1a1a1a]">{step.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[#5c5c5c]">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {guide && (
                <Link
                  href={p(`/visa-guide/${guide.slug}`)}
                  className="group flex items-start gap-4 rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5 transition-colors hover:border-[#0B4D3B]"
                >
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#B98B3C]" />
                  <div>
                    <h3 className="font-serif text-[16px] text-[#16243F] group-hover:text-[#0B4D3B]">
                      Read the full {guide.title} guide
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#5c5c5c]">
                      Fees, validity rules, common mistakes and the official sources — last
                      verified {guide.lastVerified}.
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {/* Rail */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5 lg:sticky lg:top-24">
                <div className="text-[11px] uppercase tracking-wide text-[#8a8378]">
                  {t.common.from}
                </div>
                <div className="font-serif text-[1.9rem] leading-none text-[#0B4D3B]">
                  PKR {visa.startingPricePKR.toLocaleString('en-PK')}
                </div>
                <p className="mt-2 text-[11.5px] leading-relaxed text-[#8a8378]">
                  Indicative. Government fees are set by the mission and move with the exchange
                  rate; our service fee is quoted to you before you commit.
                </p>

                <div className="mt-5 space-y-2">
                  <a
                    href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(
                      `Assalam o Alaikum, I want to apply for the ${visa.title}. Please tell me the documents and current fee.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#063528]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Start this application
                  </a>
                  <a
                    href={`tel:${ratesData.agency.phonePrimary.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-md border border-[#e8e4dc] px-4 py-3 text-[13px] text-[#16243F] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B]"
                  >
                    <Phone className="h-4 w-4" />
                    {ratesData.agency.phonePrimary}
                  </a>
                </div>

                {visa.officialPortalUrl && (
                  <a
                    href={visa.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-start gap-2 border-t border-[#f2eee5] pt-4 text-[12.5px] text-[#16243F] hover:text-[#0B4D3B]"
                  >
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B98B3C]" />
                    <span className="underline decoration-[#d8cfb8] underline-offset-2">
                      {t.common.officialSource}
                    </span>
                  </a>
                )}
              </div>

              <div className="rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5">
                <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  Other visas we handle
                </h2>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.id}>
                      <Link
                        href={p(`/visas/${o.id}`)}
                        className="group flex items-start gap-2.5 py-1 text-[13px] text-[#3a3a3a] hover:text-[#0B4D3B]"
                      >
                        <span aria-hidden="true">{o.flag}</span>
                        <span className="leading-snug">{o.title}</span>
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
