'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  CalendarCheck,
  Check,
  Clock,
  ExternalLink,
  FileText,
  MessageCircle,
  Users,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { getVisaGuide, visaCategoryLabels, visaGuides } from '@/content/visaGuides';
import ratesData from '@/content/rates.json';
import { useI18n } from '@/i18n/LocaleProvider';

const actorStyle: Record<string, string> = {
  You: 'bg-[#0B4D3B] text-white',
  Meeqat: 'bg-[#B98B3C] text-white',
  'Saudi authorities': 'bg-[#16243F] text-white',
  Employer: 'bg-[#27385C] text-white',
};

export default function VisaGuidePage({
  params,
}: PageProps<'/[locale]/visa-guide/[slug]'>) {
  const { slug } = use(params);
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const guide = getVisaGuide(slug);
  if (!guide) notFound();

  const related = visaGuides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const localTitle =
    locale === 'ur' ? guide.titleUrdu : locale === 'ar' ? guide.titleArabic : guide.title;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-[#e8e4dc] bg-[#16243F]">
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
              <Link href={p('/visa-guide')} className="hover:text-[#E3C77E]">
                {t.visaGuide.title}
              </Link>
              <span>/</span>
              <span className="text-white/75">{visaCategoryLabels[guide.category]}</span>
            </nav>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h1 className="font-serif text-3xl text-white sm:text-4xl">{guide.title}</h1>
              {localTitle !== guide.title && (
                <span className="font-serif text-xl text-[#E3C77E]">{localTitle}</span>
              )}
            </div>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
              {guide.summary}
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11.5px] text-white/70">
              <CalendarCheck className="h-3.5 w-3.5 text-[#E3C77E]" />
              {t.common.lastVerified}: {guide.lastVerified}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              {guide.images.length > 1 && (
                <ImageSlider
                  images={guide.images}
                  alt={guide.title}
                  className="aspect-[16/9] rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              )}

              {/* Who it's for */}
              <div>
                <h2 className="mb-4 flex items-center gap-2 font-serif text-xl text-[#16243F]">
                  <Users className="h-4.5 w-4.5 text-[#B98B3C]" />
                  {t.visaGuide.whoFor}
                </h2>
                <ul className="space-y-2">
                  {guide.whoFor.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-[14px] text-[#3a3a3a]">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0B4D3B]" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps — the actual story of how a file moves */}
              <div>
                <h2 className="mb-5 font-serif text-xl text-[#16243F]">{t.visaGuide.steps}</h2>
                <ol className="space-y-0">
                  {guide.steps.map((step, i) => (
                    <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                      {i < guide.steps.length - 1 && (
                        <span
                          className="absolute start-[15px] top-8 bottom-0 w-px bg-[#e8e4dc]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8e4dc] bg-white font-serif text-[13px] text-[#0B4D3B]">
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-[15px] font-semibold text-[#1a1a1a]">
                            {step.title}
                          </h3>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                              actorStyle[step.actor] ?? 'bg-[#e8e4dc] text-[#3a3a3a]'
                            }`}
                          >
                            {step.actor}
                          </span>
                        </div>
                        <p className="text-[13.5px] leading-relaxed text-[#5c5c5c]">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Documents */}
              <div>
                <h2 className="mb-4 flex items-center gap-2 font-serif text-xl text-[#16243F]">
                  <FileText className="h-4.5 w-4.5 text-[#B98B3C]" />
                  {t.visaGuide.documents}
                </h2>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {guide.documents.map((d) => (
                    <li
                      key={d}
                      className="rounded-md border border-[#f2eee5] bg-white px-3.5 py-2.5 text-[13px] text-[#3a3a3a]"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div className="rounded-lg border border-[#e6d9b8] bg-[#FBF3DF] p-5">
                <h2 className="mb-3 flex items-center gap-2 font-serif text-lg text-[#7a5c1d]">
                  <AlertTriangle className="h-4.5 w-4.5" />
                  {t.visaGuide.notes}
                </h2>
                <ul className="space-y-2">
                  {guide.notes.map((n) => (
                    <li key={n} className="text-[13.5px] leading-relaxed text-[#5f4a1a]">
                      — {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rail */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5">
                <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  {t.visaGuide.fees}
                </h2>
                <dl className="space-y-3">
                  {guide.fees.map((f) => (
                    <div key={f.label} className="border-b border-[#f2eee5] pb-3 last:border-0 last:pb-0">
                      <dt className="text-[12.5px] text-[#6b6b6b]">{f.label}</dt>
                      <dd className="text-[14px] font-semibold text-[#0B4D3B]">{f.amount}</dd>
                      {f.note && (
                        <dd className="mt-0.5 text-[11.5px] leading-snug text-[#8a8378]">
                          {f.note}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5">
                <h2 className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  <Clock className="h-3.5 w-3.5" />
                  {t.visaGuide.timeline}
                </h2>
                <p className="text-[13px] leading-relaxed text-[#3a3a3a]">{guide.timeline}</p>
                <h3 className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  Validity
                </h3>
                <p className="text-[13px] leading-relaxed text-[#3a3a3a]">{guide.validity}</p>
              </div>

              <div className="rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5">
                <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  {t.common.officialSource}
                </h2>
                <ul className="space-y-2">
                  {guide.officialLinks.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-2 text-[13px] text-[#16243F] hover:text-[#0B4D3B]"
                      >
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B98B3C]" />
                        <span className="underline decoration-[#d8cfb8] underline-offset-2 group-hover:decoration-[#0B4D3B]">
                          {l.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(
                  `Assalam o Alaikum, I have a question about the ${guide.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#063528]"
              >
                <MessageCircle className="h-4 w-4" />
                Ask us about this visa
              </a>

              <div className="rounded-lg border border-[#e8e4dc] bg-white p-5">
                <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                  Related guides
                </h2>
                <ul className="space-y-1.5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={p(`/visa-guide/${r.slug}`)}
                        className="block py-1 text-[13px] text-[#3a3a3a] hover:text-[#0B4D3B]"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <p className="mt-10 rounded-lg border border-[#e8e4dc] bg-[#FBF9F4] p-5 text-[12.5px] leading-relaxed text-[#6b6b6b]">
            {t.visaGuide.disclaimer}
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
