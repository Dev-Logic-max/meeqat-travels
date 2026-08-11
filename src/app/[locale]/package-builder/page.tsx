'use client';
import { useLocale } from '@/i18n/LocaleProvider';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function PackageBuilderPage() {
  const lang = useLocale();
  const isUrdu = lang === 'ur';

  // State for selections
  const [hotelStars, setHotelStars] = useState(5);
  const [makkahNights, setMakkahNights] = useState(7);
  const [madinaNights, setMadinaNights] = useState(5);
  const [transport, setTransport] = useState('GMC');
  const [groupSize, setGroupSize] = useState(1);
  const [meal, setMeal] = useState('Breakfast Only');
  const [ziyaratMakkah, setZiyaratMakkah] = useState(true);
  const [ziyaratMadina, setZiyaratMadina] = useState(true);

  // Calculate estimate
  const estimate = useMemo(() => {
    const hotelBase = hotelStars === 3 ? 12000 : hotelStars === 4 ? 22000 : 35000;
    const nightsCost = (makkahNights + madinaNights) * hotelBase;
    const transportCost = transport === 'Hiace' ? 30000 : transport === 'Coaster' ? 45000 : 65000;
    const mealCost = meal === 'No Meals' ? 0 : meal === 'Breakfast Only' ? 3000 * (makkahNights + madinaNights) : 7000 * (makkahNights + madinaNights);
    const ziyaratCost = (ziyaratMakkah ? 8000 : 0) + (ziyaratMadina ? 8000 : 0);
    const total = nightsCost + transportCost + mealCost + ziyaratCost;
    return total;
  }, [hotelStars, makkahNights, madinaNights, transport, meal, ziyaratMakkah, ziyaratMadina]);

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum! I want a custom Umrah package:\n\n` +
    `🏨 Hotel: ${hotelStars}-star\n` +
    `📍 Makkah: ${makkahNights} nights\n` +
    `📍 Madina: ${madinaNights} nights\n` +
    `🚗 Transport: ${transport}\n` +
    `🍽 Meals: ${meal}\n` +
    `👥 Group: ${groupSize} people\n` +
    `🕌 Ziyarat Makkah: ${ziyaratMakkah ? 'Yes' : 'No'}\n` +
    `🕌 Ziyarat Madina: ${ziyaratMadina ? 'Yes' : 'No'}\n\n` +
    `Est. PKR ${estimate.toLocaleString()}/person\n\n` +
    `Please confirm availability and firm pricing.`
  );

  return (
    <div className={isUrdu ? 'font-urdu' : ''} lang={lang} dir={isUrdu ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end">
        <Image src="/images/hotel-makkah-room.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-10">
          <p className="text-[#E3C77E] text-xs tracking-widest uppercase mb-2">Custom Package</p>
          <h1 className="text-white text-3xl sm:text-4xl font-serif">Build your Umrah package</h1>
          <p className="text-gray-300 text-sm mt-2 max-w-lg">
            Select your preferences below and get an instant budget estimate, then send to us on WhatsApp for firm pricing.
          </p>
        </div>
      </section>

      {/* Builder Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Options — left side */}
            <div className="lg:col-span-3 space-y-8">

              {/* Hotel Stars */}
              <div>
                <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Hotel Category</label>
                <div className="flex gap-3">
                  {[3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => setHotelStars(star)}
                      className={`flex-1 py-3 rounded-lg border text-sm transition-colors ${
                        hotelStars === star
                          ? 'border-[#0B4D3B] bg-[#0B4D3B] text-white'
                          : 'border-[#e8e4dc] text-[#6b6b6b] hover:border-[#0B4D3B]/30'
                      }`}
                    >
                      {star}-Star
                    </button>
                  ))}
                </div>
              </div>

              {/* Nights */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Nights in Makkah</label>
                  <select
                    value={makkahNights}
                    onChange={e => setMakkahNights(Number(e.target.value))}
                    className="w-full border border-[#e8e4dc] rounded-lg px-4 py-2.5 text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#0B4D3B]"
                  >
                    {[3, 5, 7, 10, 14].map(n => (
                      <option key={n} value={n}>{n} nights</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Nights in Madina</label>
                  <select
                    value={madinaNights}
                    onChange={e => setMadinaNights(Number(e.target.value))}
                    className="w-full border border-[#e8e4dc] rounded-lg px-4 py-2.5 text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#0B4D3B]"
                  >
                    {[3, 5, 7, 10].map(n => (
                      <option key={n} value={n}>{n} nights</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Transport */}
              <div>
                <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Transport Type</label>
                <div className="flex gap-3">
                  {['Hiace', 'Coaster', 'GMC'].map(t => (
                    <button
                      key={t}
                      onClick={() => setTransport(t)}
                      className={`flex-1 py-3 rounded-lg border text-sm transition-colors ${
                        transport === t
                          ? 'border-[#0B4D3B] bg-[#0B4D3B] text-white'
                          : 'border-[#e8e4dc] text-[#6b6b6b] hover:border-[#0B4D3B]/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meals */}
              <div>
                <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Meal Plan</label>
                <div className="flex gap-3">
                  {['No Meals', 'Breakfast Only', 'Full Board'].map(m => (
                    <button
                      key={m}
                      onClick={() => setMeal(m)}
                      className={`flex-1 py-3 rounded-lg border text-sm transition-colors ${
                        meal === m
                          ? 'border-[#0B4D3B] bg-[#0B4D3B] text-white'
                          : 'border-[#e8e4dc] text-[#6b6b6b] hover:border-[#0B4D3B]/30'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group Size */}
              <div>
                <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Group Size</label>
                <select
                  value={groupSize}
                  onChange={e => setGroupSize(Number(e.target.value))}
                  className="w-full border border-[#e8e4dc] rounded-lg px-4 py-2.5 text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#0B4D3B]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>

              {/* Ziyarat */}
              <div>
                <label className="text-sm font-medium text-[#1a1a1a] block mb-3">Guided Ziyarat Tours</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm text-[#1a1a1a] cursor-pointer">
                    <input type="checkbox" checked={ziyaratMakkah} onChange={e => setZiyaratMakkah(e.target.checked)}
                      className="w-4 h-4 accent-[#0B4D3B]" />
                    Makkah Ziyarat (Jabal al-Noor, Mina, Arafat, Muzdalifah)
                  </label>
                  <label className="flex items-center gap-3 text-sm text-[#1a1a1a] cursor-pointer">
                    <input type="checkbox" checked={ziyaratMadina} onChange={e => setZiyaratMadina(e.target.checked)}
                      className="w-4 h-4 accent-[#0B4D3B]" />
                    Madina Ziyarat (Masjid Quba, Uhud, Qiblatain, Jannat al-Baqi)
                  </label>
                </div>
              </div>
            </div>

            {/* Summary — right side */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 bg-white border border-[#e8e4dc] rounded-xl p-6">
                <h3 className="text-lg font-serif text-[#1a1a1a] mb-5">Your estimate</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Hotel</span>
                    <span className="text-[#1a1a1a]">{hotelStars}-star</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Makkah</span>
                    <span className="text-[#1a1a1a]">{makkahNights} nights</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Madina</span>
                    <span className="text-[#1a1a1a]">{madinaNights} nights</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Transport</span>
                    <span className="text-[#1a1a1a]">{transport}</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Meals</span>
                    <span className="text-[#1a1a1a]">{meal}</span>
                  </div>
                  <div className="flex justify-between text-[#6b6b6b]">
                    <span>Group size</span>
                    <span className="text-[#1a1a1a]">{groupSize}</span>
                  </div>
                </div>

                <hr className="my-5 border-[#e8e4dc]" />

                <div>
                  <p className="text-xs text-[#6b6b6b]">Estimated total per person</p>
                  <p className="text-2xl font-serif text-[#1a1a1a] mt-1">
                    PKR {estimate.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-[#6b6b6b] mt-1">
                    * Airline ticket not included. Final pricing confirmed after availability check.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-[#25D366] text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                >
                  <Send className="w-4 h-4" /> Send to WhatsApp
                </a>

                <p className="text-[11px] text-[#6b6b6b] text-center mt-3">
                  Our team will reply within 1 hour with firm pricing
                </p>
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
