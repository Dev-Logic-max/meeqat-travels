'use client';
import { useLocale } from '@/i18n/LocaleProvider';

import React, { useState, use } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Send } from 'lucide-react';

interface DestinationPageProps {
  params: Promise<{ city: string }>;
}

// Image map per city
const cityData: Record<string, {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  images: { src: string; caption: string }[];
}> = {
  makkah: {
    title: 'Makkah al-Mukarramah',
    subtitle: 'The holiest city in Islam and home of the Sacred Kaaba',
    heroImage: '/images/hero/haram-night-1.jpg',
    overview: 'Makkah is the birthplace of the Prophet Muhammad ﷺ and the direction of prayer for over 1.8 billion Muslims worldwide. The city is home to Masjid al-Haram, the largest mosque in the world, which surrounds the Kaaba. Every year, millions of pilgrims arrive for Umrah and Hajj, making it one of the most spiritually significant places on Earth.',
    images: [
      { src: '/images/hero/haram-night-1.jpg', caption: 'The Holy Kaaba — Masjid al-Haram at night' },
      { src: '/images/ziyarat/jabal-noor.jpg', caption: 'Jabal al-Noor — Cave of Hira mountain' },
      { src: '/images/ziyarat/mina-tents.jpg', caption: 'Mina — The tent city' },
      { src: '/images/ziyarat/arafat.jpg', caption: 'Maidan-e-Arafat & Jabal-ar-Rahmah' },
      { src: '/images/hotels/makkah-exterior-1.jpg', caption: 'Luxury hotels near the Haram complex' },
      { src: '/images/hotels/makkah-room-1.jpg', caption: '5-star hotel suites near the sanctuary' },
    ],
  },
  madina: {
    title: 'Madina al-Munawwarah',
    subtitle: 'The radiant city of the Prophet ﷺ',
    heroImage: '/images/hero/madina-dusk.jpg',
    overview: 'Madina is the second holiest city in Islam, where the Prophet Muhammad ﷺ migrated to and where he is buried. The city is known for its serene atmosphere, the magnificent Masjid an-Nabawi (the Prophet\'s Mosque), and numerous historical Islamic landmarks including Masjid Quba, the first mosque ever built in Islam.',
    images: [
      { src: '/images/hero/madina-dusk.jpg', caption: 'Masjid an-Nabawi — The Prophet\'s Mosque at dusk' },
      { src: '/images/ziyarat/masjid-quba.jpg', caption: 'Masjid Quba — the first mosque in Islam' },
      { src: '/images/ziyarat/masjid-qiblatain.jpg', caption: 'Masjid al-Qiblatain — Mosque of Two Qiblas' },
      { src: '/images/ziyarat/mount-uhud.jpg', caption: 'Mount Uhud — site of the historic battle' },
      { src: '/images/ziyarat/jannat-al-baqi.jpg', caption: 'Jannat al-Baqi sacred resting place' },
      { src: '/images/hotels/madina-lobby-1.jpg', caption: 'Grand hotel lobbies in Madina' },
    ],
  },
  jeddah: {
    title: 'Jeddah',
    subtitle: 'Gateway to the Holy Land and Saudi Arabia\'s Red Sea port city',
    heroImage: '/images/ziyarat/jeddah-albalad.jpg',
    overview: 'Jeddah serves as the primary entry point for international pilgrims arriving by air. Known for its historic Al-Balad district, beautiful corniche along the Red Sea, and as the commercial hub of the Hejaz region. Most international flights for Umrah arrive at King Abdulaziz International Airport in Jeddah.',
    images: [
      { src: '/images/ziyarat/jeddah-albalad.jpg', caption: 'Historic Al-Balad district of Jeddah' },
      { src: '/images/airlines/boarding-gate.jpg', caption: 'King Abdulaziz International Airport' },
      { src: '/images/airlines/widebody-dawn.jpg', caption: 'Direct international flight arrival' },
    ],
  },
  riyadh: {
    title: 'Riyadh',
    subtitle: 'The capital of Saudi Arabia',
    heroImage: '/images/airport-terminal.jpg',
    overview: 'Riyadh, the capital and largest city of Saudi Arabia, is a modern metropolis blending tradition with contemporary architecture. With the new multiple-entry Umrah visa announced in July 2026, pilgrims can now visit Riyadh and other Saudi cities during their stay.',
    images: [
      { src: '/images/airport-terminal.jpg', caption: 'Saudi airport infrastructure' },
      { src: '/images/hotel-makkah-exterior.jpg', caption: 'Modern Saudi cityscape' },
    ],
  },
};

export default function DestinationDetailPage({ params }: DestinationPageProps) {
  const { city } = use(params);
  const lang = useLocale();
  const isUrdu = lang === 'ur';

  const data = cityData[city.toLowerCase()] || cityData.makkah;
  const sites = city.toLowerCase() === 'makkah' ? ratesData.ziyaratSites.makkah
    : city.toLowerCase() === 'madina' ? ratesData.ziyaratSites.madina : [];

  return (
    <div className={isUrdu ? 'font-urdu' : lang === 'ar' ? 'font-arabic' : ''}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image src={data.heroImage} alt={data.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-12">
          <p className="text-[#E3C77E] text-xs tracking-widest uppercase mb-2">Destination Guide</p>
          <h1 className="text-white text-4xl sm:text-5xl font-serif">{data.title}</h1>
          <p className="text-gray-300 text-sm mt-2 max-w-lg">{data.subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-[15px] text-[#1a1a1a] leading-[1.8]">{data.overview}</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-serif text-[#1a1a1a] mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.images.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[3/2]">
                <Image src={img.src} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ziyarat Sites */}
      {sites.length > 0 && (
        <section className="py-16 bg-[#FAFAF5]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2 className="text-2xl font-serif text-[#1a1a1a] mb-2">Historical ziyarat sites</h2>
            <p className="text-sm text-[#6b6b6b] mb-8">Included in our guided ziyarat tours with AC transport.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sites.map((site, idx) => (
                <div key={idx} className="bg-white border border-[#e8e4dc] rounded-xl p-5">
                  <h3 className="text-base font-serif text-[#1a1a1a] mb-1">{site.name}</h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{site.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-serif text-[#1a1a1a] mb-1">
              Include {data.title} in your Umrah journey
            </h2>
            <p className="text-sm text-[#6b6b6b]">All Meeqat Travel packages include guided ziyarat tours with AC transport.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/umrah-packages" className="bg-[#0B4D3B] text-white px-5 py-2.5 rounded-lg text-sm hover:bg-[#063528] transition-colors">
              View Packages
            </Link>
            <a
              href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(`Assalam-o-Alaikum! I want to book an Umrah package with ${data.title} ziyarat included.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-[#1EBE5D] transition-colors"
            >
              <Send className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat lang={lang} />
    </div>
  );
}
