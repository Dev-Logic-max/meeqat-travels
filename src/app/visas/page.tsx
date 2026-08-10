'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';
import { ExternalLink } from 'lucide-react';

export default function VisasPage() {
  const [lang, setLang] = useState<Language>('en');
  const isUrdu = lang === 'ur';

  return (
    <div className={`min-h-screen bg-[#FAFAF5] text-[#1a1a1a] ${isUrdu ? 'font-urdu text-right' : 'font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} onLanguageChange={setLang} />
      
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center pt-16 bg-[#16243F]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/visa.jpg" 
            alt="Saudi Visa Consultancy" 
            fill 
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white">
          <span className="text-[#E3C77E] text-xs uppercase tracking-widest block mb-2 font-semibold">Verified Embassy Submission</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Visa Consultancy & Processing</h1>
          <p className="text-sm md:text-base font-light text-white/90">Official Saudi Nusuk Umrah Visas, 1-Year Tourist Visas, Tasheer Biometrics & Global Visas.</p>
        </div>
      </section>

      {/* Tasheer Notice */}
      <section className="py-10 bg-white border-b border-[#e8e4dc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-grow">
              <h3 className="font-serif text-lg font-bold text-amber-900 mb-1">Notice for Pakistani Passport Holders</h3>
              <p className="text-xs text-amber-800 leading-relaxed">
                Pakistani citizens require mandatory Tasheer biometric enrollment prior to Saudi Umrah visa issuance. Meeqat Travel schedules Tasheer appointments and handles full file compilation.
              </p>
            </div>
            <a 
              href="https://vcsa.tasheer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-4 py-2.5 bg-[#0B4D3B] text-white text-xs font-semibold rounded-xl hover:bg-[#063528] transition-colors flex items-center gap-1.5"
            >
              Tasheer Official Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratesData.visaCategories.map((visa: any) => (
              <div key={visa.id} className="bg-white border border-[#e8e4dc] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl">{visa.flag}</span>
                    <div className="text-base font-serif font-bold text-[#0B4D3B]">From PKR {visa.startingPricePKR.toLocaleString()}</div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#16243F] mb-1">{visa.title}</h3>
                  <div className="text-xs text-[#6b6b6b] mb-4 pb-3 border-b border-[#e8e4dc]">
                    <span>Validity: {visa.validity}</span> · <span>Processing: {visa.processingDays}</span>
                  </div>
                  
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-xs text-[#6b6b6b] mb-6">
                    {visa.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0B4D3B] font-bold">✓</span>
                        <span className="leading-normal">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-[#e8e4dc]">
                  <a 
                    href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(`Assalam-o-Alaikum! I want to apply for the ${visa.title}. Please guide me on file preparation.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#0B4D3B] text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-[#063528] transition-colors"
                  >
                    Start Application
                  </a>
                  {visa.officialPortalUrl && (
                    <a
                      href={visa.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-[11px] text-gray-500 hover:text-[#0B4D3B] font-medium py-1"
                    >
                      Official Govt Portal →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloat lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
