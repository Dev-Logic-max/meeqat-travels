'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';

export default function UmrahPackagesPage() {
  const [lang, setLang] = useState<Language>('en');
  const isUrdu = lang === 'ur';

  const [activeFilter, setActiveFilter] = useState('All');
  const packages = ratesData.umrahPackages;

  const filteredPackages = activeFilter === 'All' 
    ? packages 
    : packages.filter((p: any) => p.tier.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className={`min-h-screen bg-[#FAFAF5] text-[#1a1a1a] ${isUrdu ? 'font-urdu text-right' : 'font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} onLanguageChange={setLang} />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kaaba.jpg" 
            alt="Kaaba" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <span className="text-[#E3C77E] text-xs uppercase tracking-widest block mb-2 font-semibold">Direct Licensed Operator</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Umrah Packages 2026</h1>
          <p className="text-sm md:text-base font-light text-white/90 max-w-2xl mx-auto">
            Nusuk BRN verified hotel bookings, direct flights from Multan/Lahore/Karachi, and guided Ziyarat.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-[#e8e4dc]">
        <div className="max-w-6xl mx-auto px-6 flex justify-center space-x-3">
          {['All', 'VIP', 'Standard', 'Economy'].map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-semibold rounded-full border border-[#e8e4dc] transition-colors ${activeFilter === filter ? 'bg-[#0B4D3B] text-white border-[#0B4D3B]' : 'bg-white text-[#6b6b6b] hover:bg-[#FAFAF5]'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg: any) => (
              <div key={pkg.id} className="bg-white border border-[#e8e4dc] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={pkg.tier.includes('VIP') ? "/images/hotel-makkah-room.jpg" : "/images/madina.jpg"} 
                    alt={pkg.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[#E3C77E] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E3C77E]/30">
                    {pkg.tier}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-[#16243F]">{pkg.name}</h3>
                    <div className="text-2xl font-serif text-[#0B4D3B] mb-4">
                      PKR {pkg.startingPricePKR.toLocaleString()} <span className="text-xs text-gray-500 font-sans">/ person</span>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-600 mb-5 bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <p><strong className="text-gray-900">Makkah ({pkg.makkahNights}N):</strong> {pkg.makkahHotel}</p>
                      <p className="text-[11px] text-emerald-700 font-medium">📍 {pkg.distanceMakkah}</p>
                      <p className="pt-1"><strong className="text-gray-900">Madina ({pkg.madinaNights}N):</strong> {pkg.madinaHotel}</p>
                      <p className="text-[11px] text-emerald-700 font-medium">📍 {pkg.distanceMadina}</p>
                    </div>

                    <ul className="space-y-2 mb-6 text-xs text-[#6b6b6b]">
                      {pkg.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#0B4D3B]">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(`Assalam-o-Alaikum! I'm interested in the "${pkg.name}". Please share availability and firm details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#0B4D3B] hover:bg-[#063528] text-white py-3 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Get a firm quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-white border border-[#e8e4dc] rounded-2xl text-center">
            <h2 className="font-serif text-2xl mb-2 text-[#16243F]">Need a customized itinerary?</h2>
            <p className="text-[#6b6b6b] mb-6 max-w-xl mx-auto text-xs">Build your custom package with your choice of hotel stars, dates, and transport.</p>
            <Link 
              href="/package-builder"
              className="inline-block px-6 py-3 bg-[#16243F] text-white hover:bg-[#0B4D3B] transition-colors rounded-xl text-xs font-semibold"
            >
              Open Package Builder
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFloat lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
