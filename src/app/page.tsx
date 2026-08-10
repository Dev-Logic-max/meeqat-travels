'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { OfficialPortalsSection } from '@/components/OfficialPortalsSection';
import { Language, translations } from '@/content/translations';
import ratesData from '@/content/rates.json';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Send, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
  const isUrdu = lang === 'ur';

  return (
    <div className={isUrdu ? 'font-urdu' : ''} lang={lang} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} onLanguageChange={setLang} />

      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] min-h-[560px] flex items-end">
        <Image
          src="/images/hero-kaaba-night.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-16 sm:pb-20">
          <p className="text-[#E3C77E] text-xs tracking-widest uppercase mb-3">
            Licensed Umrah & Hajj Operator · Rahim Yar Khan
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] max-w-3xl">
            Your blessed journey to the Holy Haramain
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Complete Umrah packages with verified Nusuk hotel bookings, direct flights,
            and guided Ziyarat tours — managed by a direct licensed operator.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/umrah-packages"
              className="bg-[#0B4D3B] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#083c2e] transition-colors"
            >
              View Packages
            </Link>
            <Link
              href="/package-builder"
              className="bg-white/10 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-lg text-sm hover:bg-white/20 transition-colors"
            >
              Build Custom Package
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUIET STATS ─── */}
      <section className="bg-[#0B4D3B] text-white py-5 border-b border-[#B98B3C]/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-wrap justify-between gap-4 text-center text-xs">
          <span><strong className="text-base font-serif text-[#E3C77E]">10,000+</strong> Pilgrims Served</span>
          <span><strong className="text-base font-serif text-[#E3C77E]">15+</strong> Years Experience</span>
          <span><strong className="text-base font-serif text-[#E3C77E]">DTS&nbsp;#&nbsp;7842</strong> Licensed Operator</span>
          <span><strong className="text-base font-serif text-[#E3C77E]">All-Pakistan</strong> Agent Network</span>
        </div>
      </section>

      {/* ─── DESTINATIONS — IMAGE-FIRST ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] mb-2">Sacred destinations</h2>
          <p className="text-sm text-[#6b6b6b] mb-10 max-w-lg">
            Explore the holy cities of Makkah and Madina, with guided tours to every historic landmark.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Large Makkah card */}
            <Link href="/destinations/makkah" className="group relative rounded-2xl overflow-hidden h-[400px]">
              <Image src="/images/kaaba.jpg" alt="Makkah" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] tracking-wider text-[#E3C77E] uppercase">Holy Sanctuary</span>
                <h3 className="text-2xl font-serif mt-1">Makkah al-Mukarramah</h3>
                <p className="text-xs text-gray-300 mt-1">Kaaba · Jabal al-Noor · Mina · Arafat · Haram Hotels</p>
              </div>
            </Link>

            {/* Two stacked cards */}
            <div className="flex flex-col gap-4">
              <Link href="/destinations/madina" className="group relative rounded-2xl overflow-hidden h-[192px]">
                <Image src="/images/madina.jpg" alt="Madina" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-[11px] tracking-wider text-[#E3C77E] uppercase">City of the Prophet</span>
                  <h3 className="text-xl font-serif mt-1">Madina al-Munawwarah</h3>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-4">
                <Link href="/destinations/jeddah" className="group relative rounded-2xl overflow-hidden h-[192px]">
                  <Image src="/images/hotel-makkah-exterior.jpg" alt="Jeddah" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-serif">Jeddah</h3>
                  </div>
                </Link>
                <Link href="/destinations/riyadh" className="group relative rounded-2xl overflow-hidden h-[192px]">
                  <Image src="/images/airport-terminal.jpg" alt="Riyadh" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-serif">Riyadh</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFICIAL GOVT PORTALS & VERIFIED HOTELS / AIRLINES ─── */}
      <OfficialPortalsSection />

      {/* ─── FEATURED PACKAGES — CLEAN CARDS ─── */}
      <section className="py-20 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a]">Umrah packages</h2>
              <p className="text-sm text-[#6b6b6b] mt-1">Starting estimates with full Nusuk BRN verification and flights.</p>
            </div>
            <Link href="/umrah-packages" className="text-sm text-[#0B4D3B] font-medium flex items-center gap-1 hover:underline">
              All packages <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ratesData.umrahPackages.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl border border-[#e8e4dc] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-[#0B4D3B] font-medium tracking-wide uppercase">{pkg.tier}</span>
                    <span className="text-[11px] text-[#6b6b6b]">{pkg.durationDays} days</span>
                  </div>

                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-4">{pkg.name}</h3>

                  <div className="space-y-2 text-xs text-[#6b6b6b] mb-5">
                    <p><span className="text-[#1a1a1a] font-medium">Makkah</span> · {pkg.makkahNights} nights · {pkg.makkahHotel}</p>
                    <p><span className="text-[#1a1a1a] font-medium">Madina</span> · {pkg.madinaNights} nights · {pkg.madinaHotel}</p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#6b6b6b]">
                    {pkg.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0B4D3B] mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[#e8e4dc]">
                  <p className="text-[11px] text-[#6b6b6b]">From</p>
                  <p className="text-xl font-serif text-[#1a1a1a]">
                    PKR {pkg.startingPricePKR.toLocaleString()} <span className="text-xs text-[#6b6b6b] font-sans">/ person</span>
                  </p>
                  <a
                    href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(`Assalam-o-Alaikum! I'm interested in the "${pkg.name}" package. Please share available dates and firm pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full bg-[#0B4D3B] text-white py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-[#063528] transition-colors"
                  >
                    Get a firm quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOM BUILDER CTA — FULL-WIDTH IMAGE ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center">
        <Image src="/images/hotel.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#063528]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-serif mb-3">Build your own Umrah package</h2>
          <p className="text-sm text-gray-300 max-w-lg mx-auto mb-6">
            Choose your hotel stars, duration in Makkah & Madina, transport type,
            and get an instant budget estimate — then send it straight to us on WhatsApp.
          </p>
          <Link
            href="/package-builder"
            className="inline-flex items-center gap-2 bg-white text-[#0B4D3B] px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Open Package Builder <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── VISA SERVICES — CLEAN LIST ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] mb-2">Visa consultancy</h2>
          <p className="text-sm text-[#6b6b6b] mb-10 max-w-lg">
            Expert file preparation, biometrics scheduling, and embassy submission support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ratesData.visaCategories.slice(0, 5).map(v => (
              <Link
                href="/visas"
                key={v.id}
                className="border border-[#e8e4dc] rounded-xl p-5 flex items-start gap-4 hover:border-[#0B4D3B]/30 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">{v.flag}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#0B4D3B] transition-colors">{v.title}</h3>
                  <p className="text-[11px] text-[#6b6b6b] mt-0.5">{v.processingDays} · {v.validity}</p>
                  <p className="text-xs text-[#0B4D3B] font-medium mt-2">From PKR {v.startingPricePKR.toLocaleString()}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0B4D3B] shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE IMAGES ─── */}
      <section className="py-20 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-serif text-[#1a1a1a] mb-8">The Meeqat experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/family-travel.jpg', label: 'Family Journeys' },
              { src: '/images/hotel-makkah-room.jpg', label: 'Premium Hotels' },
              { src: '/images/airline-saudia.jpg', label: 'Direct Flights' },
              { src: '/images/hotel-buffet.jpg', label: 'Fine Dining' },
              { src: '/images/airport-terminal.jpg', label: 'Airport Transfers' },
              { src: '/images/hotel-madina-lobby.jpg', label: 'Grand Lobbies' },
              { src: '/images/masjid-quba.jpg', label: 'Ziyarat Tours' },
              { src: '/images/jabal-noor.jpg', label: 'Mountain of Light' },
            ].map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST & LICENCE — COMPACT ─── */}
      <section className="py-16 bg-[#16243F] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] text-[#E3C77E] tracking-wider uppercase mb-2">Government verified operator</p>
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">Direct licensed — not a sub-agent</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Meeqat Travel holds an independent operator licence (DTS # PK-7842)
              registered with the Ministry of Religious Affairs. We process Umrah visas
              directly through the Nusuk BRN system and submit via official Tasheer channels.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-gray-400">
              <span>✓ MoRA Registered Operator</span>
              <span>✓ DTS Licence # PK-7842</span>
              <span>✓ Official Tasheer Channel</span>
              <span>✓ Nusuk BRN Verified Hotels</span>
            </div>
            <Link href="/licence" className="inline-block mt-6 text-sm text-[#E3C77E] hover:underline">
              Verify our licence →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-serif text-[#1a1a1a] mb-1">Ready to begin?</h2>
            <p className="text-sm text-[#6b6b6b]">
              Visit our office in Rahim Yar Khan or chat with us on WhatsApp for instant guidance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent('Assalam-o-Alaikum! I want to inquire about Umrah packages.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#1EBE5D] transition-colors"
            >
              <Send className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${ratesData.agency.phonePrimary.replace(/\s/g, '')}`}
              className="border border-[#e8e4dc] text-[#1a1a1a] px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:border-[#0B4D3B] transition-colors"
            >
              <Phone className="w-4 h-4" /> {ratesData.agency.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <WhatsAppFloat lang={lang} />
    </div>
  );
}
