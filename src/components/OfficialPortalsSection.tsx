'use client';

import React, { useState } from 'react';
import ratesData from '@/content/rates.json';
import { ExternalLink, ShieldCheck, Plane, Building, Info, X } from 'lucide-react';
import Image from 'next/image';
import { ImageSlider } from '@/components/ui/ImageSlider';

// Hotel image sliders map
const hotelPhotos: Record<string, string[]> = {
  'swissotel-makkah': [
    '/images/hotels/makkah-swissotel-1.jpg',
    '/images/hotels/makkah-swissotel-2.jpg',
    '/images/hotels/makkah-swissotel-3.jpg',
    '/images/hotels/makkah-swissotel-4.jpg'
  ],
  'pullman-zamzam-makkah': [
    '/images/hotels/makkah-pullman-1.jpg',
    '/images/hotels/makkah-pullman-2.jpg',
    '/images/hotels/makkah-pullman-3.jpg',
    '/images/hotels/makkah-pullman-4.jpg'
  ],
  'dar-al-eiman-royal': [
    '/images/hotels/makkah-dareiman-1.jpg',
    '/images/hotels/makkah-dareiman-2.jpg',
    '/images/hotels/makkah-dareiman-3.jpg',
    '/images/hotels/makkah-dareiman-4.jpg'
  ],
  'le-meridien-makkah': [
    '/images/hotels/makkah-lemeridien-1.jpg',
    '/images/hotels/makkah-lemeridien-2.jpg',
    '/images/hotels/makkah-lemeridien-3.jpg',
    '/images/hotels/makkah-lemeridien-4.jpg'
  ],
  'oberoi-madina': [
    '/images/hotels/madina-oberoi-1.jpg',
    '/images/hotels/madina-oberoi-2.jpg',
    '/images/hotels/madina-oberoi-3.jpg',
    '/images/hotels/madina-oberoi-4.jpg'
  ],
  'pullman-zamzam-madina': [
    '/images/hotels/madina-pullman-1.jpg',
    '/images/hotels/madina-pullman-2.jpg',
    '/images/hotels/madina-pullman-3.jpg',
    '/images/hotels/madina-pullman-4.jpg'
  ],
  'anwar-al-madinah': [
    '/images/hotels/madina-movenpick-1.jpg',
    '/images/hotels/madina-movenpick-2.jpg',
    '/images/hotels/madina-movenpick-3.jpg',
    '/images/hotels/madina-movenpick-4.jpg'
  ],
  'frontel-al-harithia': [
    '/images/hotels/madina-frontel-1.jpg',
    '/images/hotels/madina-frontel-2.jpg',
    '/images/hotels/madina-frontel-3.jpg',
    '/images/hotels/madina-frontel-4.jpg'
  ]
};

// Portal images map
const portalImages = [
  '/images/portals/nusuk.jpg',
  '/images/portals/tasheer.jpg',
  '/images/portals/mora.jpg',
  '/images/portals/absher.jpg'
];

// Airline images map
const airlineImages: Record<string, string> = {
  saudia: '/images/airlines/widebody-dawn.jpg',
  pia: '/images/airlines/cabin-interior.jpg',
  flynas: '/images/airlines/boarding-gate.jpg',
  airblue: '/images/airlines/baggage-check.jpg'
};

export const OfficialPortalsSection: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'portals' | 'hotels' | 'airlines'>('hotels');

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAF5] via-white to-[#FAFAF5] border-y border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B4D3B]/10 border border-[#0B4D3B]/20 text-[#0B4D3B] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0B4D3B]" />
            Official Government & Travel Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] mb-4">
            Transparent, Verified & Authentic Information
          </h2>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            Verify official KSA Nusuk portals, Tasheer Pakistan biometrics, government regulatory licenses, real distance metrics for Makkah and Madina hotels, and official airline baggage allowances.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:flex sm:justify-center sm:px-0">
          <div
            role="tablist"
            aria-label="Verified information"
            className="inline-flex min-w-max gap-1 rounded-2xl border border-gray-200 bg-gray-100/80 p-1.5 shadow-inner"
          >
            {(
              [
                ['hotels', 'Verified Hotels & Distances', Building],
                ['airlines', 'Approved Airlines', Plane],
                ['portals', 'Government Portals', ShieldCheck],
              ] as const
            ).map(([key, label, Icon]) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 ${
                  activeTab === key
                    ? 'border border-[#e8e4dc] bg-white text-[#0B4D3B] shadow-md'
                    : 'text-gray-600 hover:text-[#0B4D3B]'
                }`}
              >
                <Icon className="h-4 w-4 text-[#0B4D3B]" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: Official Government Portals */}
        {activeTab === 'portals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratesData.officialPortals.map((portal, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={portalImages[index % portalImages.length]}
                      alt={portal.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B4D3B] px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-md border border-[#0B4D3B]/20 shadow-sm">
                        {portal.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <span className="text-[11px] text-gray-400 font-medium block mb-1">{portal.category}</span>
                    <h3 className="text-base font-serif font-bold text-[#1a1a1a] mb-2 group-hover:text-[#0B4D3B] transition-colors">
                      {portal.name}
                    </h3>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed mb-4">
                      {portal.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-50 hover:bg-[#0B4D3B] text-gray-700 hover:text-white border border-gray-200 hover:border-[#0B4D3B] py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    Visit Official Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Verified Hotels & Distances */}
        {activeTab === 'hotels' && (
          <div className="space-y-12">
            
            {/* Makkah Hotels */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-[#0B4D3B] rounded-full" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a1a]">Makkah al-Mukarramah Hotels</h3>
                  <p className="text-xs text-gray-500">Verified walking distance metrics to Masjid al-Haram</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ratesData.verifiedHotels.makkah.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <ImageSlider
                        images={hotelPhotos[hotel.id] || [hotel.image]}
                        alt={hotel.name}
                        className="h-44 w-full"
                        arrows={false}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#E3C77E] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E3C77E]/30 pointer-events-none z-10">
                        {hotel.category}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-1">{hotel.name}</h4>
                        <p className="text-xs text-[#0B4D3B] font-semibold mb-2 flex items-center gap-1">
                          📍 {hotel.distance}
                        </p>
                        <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                          {hotel.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedHotel(hotel)}
                          className="text-xs text-[#0B4D3B] font-medium flex items-center gap-1 hover:underline"
                        >
                          <Info className="w-3.5 h-3.5" /> Full Specs
                        </button>
                        <a
                          href={hotel.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:text-[#0B4D3B] flex items-center gap-1 font-medium"
                        >
                          Official Site <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Madina Hotels */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-[#B98B3C] rounded-full" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a1a]">Madina al-Munawwarah Hotels</h3>
                  <p className="text-xs text-gray-500">Verified walking distance metrics to Al-Masjid an-Nabawi</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ratesData.verifiedHotels.madina.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <ImageSlider
                        images={hotelPhotos[hotel.id] || [hotel.image]}
                        alt={hotel.name}
                        className="h-44 w-full"
                        arrows={false}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#E3C77E] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E3C77E]/30 pointer-events-none z-10">
                        {hotel.category}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-1">{hotel.name}</h4>
                        <p className="text-xs text-[#0B4D3B] font-semibold mb-2 flex items-center gap-1">
                          📍 {hotel.distance}
                        </p>
                        <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                          {hotel.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedHotel(hotel)}
                          className="text-xs text-[#0B4D3B] font-medium flex items-center gap-1 hover:underline"
                        >
                          <Info className="w-3.5 h-3.5" /> Full Specs
                        </button>
                        <a
                          href={hotel.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:text-[#0B4D3B] flex items-center gap-1 font-medium"
                        >
                          Official Site <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Approved Airlines */}
        {activeTab === 'airlines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratesData.airlines.map((airline) => (
              <div
                key={airline.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={airlineImages[airline.id] || '/images/airlines/widebody-dawn.jpg'}
                      alt={airline.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 flex items-center justify-center font-bold text-[#0B4D3B] text-sm shadow-sm">
                        {airline.code}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-200">
                        Direct Flight
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-serif font-bold text-[#1a1a1a] mb-1">{airline.name}</h3>
                    <p className="text-xs text-gray-500 mb-4">{airline.type}</p>

                    <div className="space-y-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200 mb-4">
                      <p className="flex items-center gap-1.5">
                        <span className="text-[#0B4D3B]">🧳</span> <strong>Baggage:</strong> {airline.baggage}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="text-[#0B4D3B]">💧</span> <strong>Zamzam:</strong> {airline.zamzamAllowance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={airline.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0B4D3B] hover:bg-[#063528] text-white py-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    Airline Direct Portal <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Interactive Modal for Full Hotel Information */}
      {selectedHotel && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#e8e4dc] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedHotel(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 w-full">
              <Image src={selectedHotel.image} alt={selectedHotel.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] text-[#E3C77E] uppercase font-bold tracking-wider">{selectedHotel.category}</span>
                <h3 className="text-2xl font-serif font-bold">{selectedHotel.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div>
                  <span className="text-gray-500 block">Distance to Haram</span>
                  <strong className="text-[#0B4D3B] text-sm">{selectedHotel.distance}</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">Walk Time</span>
                  <strong className="text-[#1a1a1a] text-sm">{selectedHotel.walkTime}</strong>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {selectedHotel.desc}
              </p>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(`Assalam-o-Alaikum! Please check room availability for ${selectedHotel.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1EBE5D] transition-colors"
                >
                  Inquire on WhatsApp
                </a>
                <a
                  href={selectedHotel.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-[#0B4D3B] font-semibold flex items-center gap-1"
                >
                  View Official Webpage <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
