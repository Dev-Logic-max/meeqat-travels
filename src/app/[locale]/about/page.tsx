'use client';
import { useLocale } from '@/i18n/LocaleProvider';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';

export default function AboutPage() {
  const lang = useLocale();
  const isUrdu = lang === 'ur';

  return (
    <div className={isUrdu ? 'font-urdu' : ''} lang={lang} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end">
        <Image src="/images/family-travel.jpg" alt="About Meeqat Travel" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-12">
          <span className="text-[#E3C77E] text-xs uppercase tracking-widest block mb-2 font-medium">Licensed Direct Operator</span>
          <h1 className="text-white text-4xl sm:text-5xl font-serif">About Meeqat Travel & Tours</h1>
          <p className="text-gray-300 text-sm mt-2 max-w-xl">
            Serving pilgrims from Rahim Yar Khan, Multan, and across Pakistan with dignity, luxury, and absolute transparency.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Story */}
            <div className="lg:col-span-2 space-y-6 text-[#1a1a1a] text-sm leading-relaxed">
              <h2 className="font-serif text-3xl text-[#16243F]">Serving the Guests of Allah with Honor</h2>
              <p>
                Established with a commitment to trust and spiritual excellence, Meeqat Travel & Tours (Pvt) Ltd has earned a reputation as one of Pakistan&apos;s most reliable direct licensed Hajj & Umrah operators.
              </p>
              <p>
                Unlike sub-agents or unverified middle-men, Meeqat Travel holds an independent DTS License ({ratesData.agency.licenceNumber}) registered with the Ministry of Religious Affairs (MoRA). We issue Nusuk BRN hotel reservations directly and process visas directly through official Saudi MOFA and Tasheer biometric channels.
              </p>
              <p>
                Our head office in Rahim Yar Khan acts as a full-service travel hub, supporting families across South Punjab and all major cities of Pakistan with direct flights from Multan, Lahore, Islamabad, and Karachi.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e8e4dc]">
                <div>
                  <h3 className="font-serif text-3xl text-[#0B4D3B]">10,000+</h3>
                  <p className="text-xs text-gray-500 mt-1">Pilgrims Served</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-[#0B4D3B]">15+ Years</h3>
                  <p className="text-xs text-gray-500 mt-1">Industry Experience</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-[#0B4D3B]">100% Direct</h3>
                  <p className="text-xs text-gray-500 mt-1">MoRA & Nusuk Licensed</p>
                </div>
              </div>
            </div>

            {/* Office Details Card */}
            <div>
              <div className="bg-[#FAFAF5] border border-[#e8e4dc] p-8 rounded-2xl sticky top-24 space-y-6">
                <h3 className="font-serif text-2xl text-[#16243F]">Head Office</h3>
                
                <div className="space-y-4 text-xs text-[#1a1a1a]">
                  <div>
                    <span className="text-gray-500 font-medium block mb-1 uppercase tracking-wider text-[10px]">Address</span>
                    <p className="leading-relaxed">{ratesData.agency.address}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-500 font-medium block mb-1 uppercase tracking-wider text-[10px]">Contact Phones</span>
                    <p className="font-mono">{ratesData.agency.phonePrimary}</p>
                    <p className="font-mono text-gray-600">{ratesData.agency.phoneSecondary}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 font-medium block mb-1 uppercase tracking-wider text-[10px]">Email & Support</span>
                    <p>{ratesData.agency.email}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 font-medium block mb-1 uppercase tracking-wider text-[10px]">Govt Licensing</span>
                    <p className="font-semibold text-[#0B4D3B]">{ratesData.agency.licenceNumber}</p>
                    <p className="text-gray-500">{ratesData.agency.moraLicence}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat lang={lang} />
    </div>
  );
}
