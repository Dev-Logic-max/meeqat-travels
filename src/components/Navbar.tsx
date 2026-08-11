'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react';
import ratesData from '@/content/rates.json';
import { offices } from '@/content/offices';
import { visaGuides } from '@/content/visaGuides';
import { useI18n } from '@/i18n/LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MenuItem {
  href: string;
  label: string;
  note?: string;
}

interface MegaPanel {
  blurb: string;
  columns: { heading: string; items: MenuItem[] }[];
  feature?: { image: string; title: string; text: string; href: string };
}

export const Navbar: React.FC = () => {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const p = (path: string) => `/${locale}${path}`;

  // Close everything on navigation, otherwise the drawer stays open over the
  // page the visitor just asked for.
  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const megaMenus: Record<string, MegaPanel> = {
    umrah: {
      blurb: t.menu.umrahBlurb,
      columns: [
        {
          heading: 'Packages',
          items: [
            { href: p('/umrah-packages'), label: t.nav.umrah, note: 'Economy to VIP, priced per person' },
            { href: p('/package-builder'), label: t.nav.builder, note: 'Choose nights, hotels and transport' },
          ],
        },
        {
          heading: 'Holy cities',
          items: [
            { href: p('/destinations/makkah'), label: 'Makkah', note: 'Hotel zones and ziyarat' },
            { href: p('/destinations/madina'), label: 'Madina', note: 'Rawdah, Quba, Uhud' },
            { href: p('/destinations/jeddah'), label: 'Jeddah', note: 'Arrival city and old town' },
          ],
        },
      ],
      feature: {
        image: '/images/hero-kaaba-night.jpg',
        title: 'Ramadan departures',
        text: 'The last ten nights sell out months ahead. Ask early.',
        href: p('/umrah-packages'),
      },
    },
    visas: {
      blurb: t.menu.visaBlurb,
      columns: [
        {
          heading: 'Apply',
          items: [{ href: p('/visas'), label: t.nav.visas, note: 'Countries, fees and processing times' }],
        },
        {
          heading: 'Understand first',
          items: visaGuides.slice(0, 4).map((g) => ({
            href: p(`/visa-guide/${g.slug}`),
            label: g.title,
            note: g.summary.split('.')[0],
          })),
        },
      ],
      feature: {
        image: '/images/visa.jpg',
        title: 'Visa Guide',
        text: 'Every Saudi visa explained plainly, with the official source and the date we checked it.',
        href: p('/visa-guide'),
      },
    },
    offices: {
      blurb: t.menu.officesBlurb,
      columns: [
        {
          heading: 'Punjab',
          items: offices
            .filter((o) => o.province === 'Punjab')
            .map((o) => ({
              href: p(`/offices/${o.slug}`),
              label: o.city,
              note: o.isHeadOffice ? t.offices.headOffice : undefined,
            })),
        },
        {
          heading: 'Sindh',
          items: offices
            .filter((o) => o.province === 'Sindh')
            .map((o) => ({ href: p(`/offices/${o.slug}`), label: o.city })),
        },
      ],
      feature: {
        image: '/images/offices/rahim-yar-khan-1.jpg',
        title: t.offices.headOffice,
        text: 'Rahim Yar Khan — near Abbasia Canal petrol pump. Walk in any working day.',
        href: p('/offices/rahim-yar-khan'),
      },
    },
  };

  const simpleLinks: MenuItem[] = [
    { href: p('/licence'), label: t.nav.licence },
    { href: p('/about'), label: t.nav.about },
    { href: p('/contact'), label: t.nav.contact },
  ];

  const phone = ratesData.agency.phonePrimary;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e4dc] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      {/* Utility strip — hidden on the smallest screens where it only steals height */}
      <div className="hidden border-b border-[#efeae0] bg-[#FBF9F4] sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5 text-[11px] text-[#6b6b6b] sm:px-8">
          <span className="truncate">
            Licensed operator · DTS {ratesData.agency.licenceNumber} · MoRA registered
          </span>
          <span className="hidden shrink-0 items-center gap-4 md:flex">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#0B4D3B]">
              {phone}
            </a>
            <a
              href={`https://wa.me/${ratesData.agency.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B4D3B]"
            >
              {t.common.whatsapp}
            </a>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href={p('')} className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded border border-[#B98B3C]/40 bg-[#0B4D3B] font-serif text-lg font-bold text-[#E3C77E]">
              م
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-[15px] font-bold tracking-tight text-[#0B4D3B]">
                Meeqat Travel
              </span>
              <span className="-mt-0.5 block text-[10px] text-[#8a8378]">
                میقات ٹریول اینڈ ٹورز
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 text-[13px] text-[#2a2a2a] lg:flex"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href={p('')} className="rounded px-3 py-2 hover:text-[#0B4D3B]">
              {t.nav.home}
            </Link>

            {(
              [
                ['umrah', t.nav.umrah],
                ['visas', t.nav.visas],
                ['offices', t.nav.offices],
              ] as const
            ).map(([key, label]) => (
              <div key={key} onMouseEnter={() => setOpenMenu(key)} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === key ? null : key)}
                  aria-expanded={openMenu === key}
                  className={`flex items-center gap-1 rounded px-3 py-2 transition-colors ${
                    openMenu === key ? 'text-[#0B4D3B]' : 'hover:text-[#0B4D3B]'
                  }`}
                >
                  {label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${openMenu === key ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            ))}

            {simpleLinks.map((l) => (
              <Link key={l.href} href={l.href} className="rounded px-3 py-2 hover:text-[#0B4D3B]">
                {l.label}
              </Link>
            ))}

            {/* Mega panel — one shared container so panels cannot overlap */}
            {openMenu && (
              <div className="absolute inset-x-0 top-full z-40 hidden lg:block">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="overflow-hidden rounded-b-xl border border-t-0 border-[#e8e4dc] bg-white shadow-xl shadow-black/5">
                    <div className="grid grid-cols-12 gap-0">
                      <div className="col-span-8 p-6">
                        <p className="mb-5 max-w-lg text-[12.5px] leading-relaxed text-[#6b6b6b]">
                          {megaMenus[openMenu].blurb}
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                          {megaMenus[openMenu].columns.map((col) => (
                            <div key={col.heading}>
                              <h4 className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#B98B3C]">
                                {col.heading}
                              </h4>
                              <ul className="space-y-1.5">
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="group block rounded px-2 py-1.5 -mx-2 transition-colors hover:bg-[#F7F4EC]"
                                    >
                                      <span className="block text-[13px] font-medium text-[#1a1a1a] group-hover:text-[#0B4D3B]">
                                        {item.label}
                                      </span>
                                      {item.note && (
                                        <span className="block text-[11px] leading-snug text-[#8a8378]">
                                          {item.note}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {megaMenus[openMenu].feature && (
                        <Link
                          href={megaMenus[openMenu].feature!.href}
                          className="group relative col-span-4 min-h-[220px] overflow-hidden"
                        >
                          <Image
                            src={megaMenus[openMenu].feature!.image}
                            alt=""
                            fill
                            sizes="380px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 bg-gradient-to-t from-[#063528]/95 via-[#063528]/55 to-transparent" />
                          <span className="absolute inset-x-0 bottom-0 p-5">
                            <span className="mb-1.5 block h-px w-8 bg-[#B98B3C]" />
                            <span className="block font-serif text-[15px] text-white">
                              {megaMenus[openMenu].feature!.title}
                            </span>
                            <span className="mt-1 block text-[11.5px] leading-snug text-white/80">
                              {megaMenus[openMenu].feature!.text}
                            </span>
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <a
              href={`https://wa.me/${ratesData.agency.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-md bg-[#0B4D3B] px-3.5 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#063528] xl:flex"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t.common.getQuote}
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              aria-label={t.common.callUs}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e8e4dc] text-[#0B4D3B] lg:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={t.common.menu}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e8e4dc] text-[#1a1a1a] lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e8e4dc] px-5 py-3.5">
              <span className="font-serif text-sm font-bold text-[#0B4D3B]">Meeqat Travel</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={t.common.close}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e8e4dc]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">
              <Link
                href={p('')}
                className="block rounded-md px-3 py-2.5 text-[14px] text-[#1a1a1a] hover:bg-[#F7F4EC]"
              >
                {t.nav.home}
              </Link>

              {(
                [
                  ['umrah', t.nav.umrah],
                  ['visas', t.nav.visas],
                  ['offices', t.nav.offices],
                ] as const
              ).map(([key, label]) => {
                const expanded = mobileSection === key;
                return (
                  <div key={key} className="border-b border-[#f2eee5] last:border-0">
                    <button
                      type="button"
                      onClick={() => setMobileSection(expanded ? null : key)}
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-start text-[14px] text-[#1a1a1a]"
                    >
                      {label}
                      <ChevronDown
                        className={`h-4 w-4 text-[#9a9384] transition-transform ${
                          expanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expanded && (
                      <div className="pb-2 ps-3">
                        {megaMenus[key].columns.flatMap((col) => col.items).map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-[13px] text-[#4a4a4a] hover:bg-[#F7F4EC] hover:text-[#0B4D3B]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {simpleLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-md px-3 py-2.5 text-[14px] text-[#1a1a1a] hover:bg-[#F7F4EC]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 border-t border-[#e8e4dc] px-5 py-4">
              <LanguageSwitcher />
              <a
                href={`https://wa.me/${ratesData.agency.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[#0B4D3B] px-4 py-2.5 text-[13px] font-medium text-white"
              >
                <MessageCircle className="h-4 w-4" />
                {t.common.getQuote}
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-md border border-[#e8e4dc] px-4 py-2.5 text-[13px] text-[#0B4D3B]"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
