'use client'
import { useLocale } from '@/i18n/LocaleProvider';

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Language, translations } from '@/content/translations'
import ratesData from '@/content/rates.json'

export default function LicencePage() {
  const lang = useLocale();
  const isUrdu = lang === 'ur'
  const t = translations[lang]

  return (
    <div className={`min-h-screen bg-[#FAFAF5] text-[#1a1a1a] ${isUrdu ? 'font-urdu text-right' : 'font-sans'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl mb-6 text-[#16243F]">Licences & Verification</h1>
        <p className="text-xl text-[#6b6b6b] mb-12">Your security and peace of mind are our priority. We are fully registered and compliant with all relevant authorities.</p>

        <div className="space-y-8">
          {/* Official Registration */}
          <div className="bg-white border border-[#e8e4dc] p-10 rounded-lg">
            <h2 className="font-serif text-3xl mb-6 text-[#16243F]">Official Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-sm text-[#6b6b6b] mb-1">Department of Tourist Services (DTS)</div>
                <div className="text-2xl font-serif text-[#1a1a1a]">Licence No: {ratesData.agency.licenceNumber}</div>
              </div>
              <div>
                <div className="text-sm text-[#6b6b6b] mb-1">Ministry of Religious Affairs (MoRA)</div>
                <div className="text-2xl font-serif text-[#1a1a1a]">Registration: {ratesData.agency.moraLicence}</div>
              </div>
            </div>
            <p className="text-[#6b6b6b]">
              You can verify our registration status directly with the Ministry of Religious Affairs (MoRA).
            </p>
            <a 
              href="https://mora.gov.pk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#0B4D3B] hover:underline"
            >
              Verify on mora.gov.pk →
            </a>
          </div>

          {/* Payment Security */}
          <div className="bg-white border border-[#B98B3C] p-10 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#B98B3C]"></div>
            <h2 className="font-serif text-3xl mb-6 text-[#16243F]">Payment Security & Fraud Warning</h2>
            <p className="text-lg text-[#1a1a1a] mb-6 font-medium">
              We ONLY accept payments into our official corporate bank account. We will NEVER ask you to deposit money into a personal account (JazzCash, EasyPaisa, or personal bank accounts).
            </p>
            
            <div className="bg-[#FAFAF5] border border-[#e8e4dc] p-6 rounded mb-6">
              <h3 className="font-serif text-xl mb-4 text-[#16243F]">Official Bank Details</h3>
              <div className="space-y-2 text-[#6b6b6b]">
                <p><strong className="text-[#1a1a1a]">Bank:</strong> {ratesData.agency.bankDetails.bankName}</p>
                <p><strong className="text-[#1a1a1a]">Account Title:</strong> {ratesData.agency.bankDetails.accountTitle}</p>
                <p><strong className="text-[#1a1a1a]">Account Number:</strong> {ratesData.agency.bankDetails.accountNumber}</p>
                <p><strong className="text-[#1a1a1a]">IBAN:</strong> {ratesData.agency.bankDetails.iban}</p>
              </div>
            </div>
            <p className="text-sm text-[#6b6b6b]">
              If anyone asks you to pay to a different account claiming to be from Meeqat Travel, please report it immediately to our official contact numbers.
            </p>
          </div>

          {/* Tasheer Biometrics */}
          <div className="bg-white border border-[#e8e4dc] p-10 rounded-lg">
            <h2 className="font-serif text-3xl mb-6 text-[#16243F]">Tasheer Biometrics</h2>
            <p className="text-[#6b6b6b] leading-relaxed mb-6">
              In compliance with the regulations of the Kingdom of Saudi Arabia, all Pakistani passport holders applying for a Saudi visa (including Umrah) must complete biometric registration through an authorized Tasheer center.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed">
              We assist all our clients in booking their Tasheer appointments and guide them through the process to ensure a smooth visa application experience.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppFloat lang={lang} />
      <Footer />
    </div>
  )
}
