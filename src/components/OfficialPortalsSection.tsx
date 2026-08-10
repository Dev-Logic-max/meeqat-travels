'use client';

import React, { useState } from 'react';
import ratesData from '@/content/rates.json';
import { ExternalLink, ShieldCheck, Plane, Building, Info, X } from 'lucide-react';
import Image from 'next/image';

export const OfficialPortalsSection: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'portals' | 'hotels' | 'airlines'>('portals');

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

        {/* Tab Selection Switcher with 3D feel */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-gray-100/80 rounded-2xl border border-gray-200 shadow-inner">
            <button
              onClick={() => setActiveTab('portals')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'portals'
                  ? 'bg-white text-[#0B4D3B] shadow-md border border-[#e8e4dc]'
                  : 'text-gray-600 hover:text-[#0B4D3B]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#0B4D3B]" /> Government Portals
            </button>
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'hotels'
                  ? 'bg-white text-[#0B4D3B] shadow-md border border-[#e8e4dc]'
                  : 'text-gray-600 hover:text-[#0B4D3B]'
              }`}
            >
              <Building className="w-4 h-4 text-[#0B4D3B]" /> Verified Hotels & Distances
            </button>
            <button
              onClick={() => setActiveTab('airlines')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'airlines'
                  ? 'bg-white text-[#0B4D3B] shadow-md border border-[#e8e4dc]'
                  : 'text-gray-600 hover:text-[#0B4D3B]'
              }`}
            >
              <Plane className="w-4 h-4 text-[#0B4D3B]" /> Approved Airlines
            </button>
          </div>
        </div>

        {/* TAB 1: Official Government Portals */}
        {activeTab === 'portals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratesData.officialPortals.map((portal, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#e8e4dc] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E3C77E]/20 to-transparent rounded-bl-full pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B4D3B] px-2.5 py-1 bg-[#0B4D3B]/10 rounded-md border border-[#0B4D3B]/20 shadow-inner">
                      {portal.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">{portal.category}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#1a1a1a] mb-2 group-hover:text-[#0B4D3B] transition-colors">
                    {portal.name}
                  </h3>

                  <p className="text-xs text-[#6b6b6b] leading-relaxed mb-6">
                    {portal.description}
                  </p>
                </div>

                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-50 hover:bg-[#0B4D3B] text-gray-700 hover:text-white border border-gray-200 hover:border-[#0B4D3B] py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Visit Official Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
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
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#E3C77E] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E3C77E]/30">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ratesData.verifiedHotels.madina.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#E3C77E] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E3C77E]/30">
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
                className="bg-white rounded-2xl p-6 border border-[#e8e4dc] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#0B4D3B]/10 border border-[#0B4D3B]/20 flex items-center justify-center font-bold text-[#0B4D3B] text-sm shadow-inner">
                      {airline.code}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Direct Flight
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#1a1a1a] mb-1">{airline.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">{airline.type}</p>

                  <div className="space-y-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200 mb-6">
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#0B4D3B]">🧳</span> <strong>Baggage:</strong> {airline.baggage}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#0B4D3B]">💧</span> <strong>Zamzam:</strong> {airline.zamzamAllowance}
                    </p>
                  </div>
                </div>

                <a
                  href={airline.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0B4D3B] hover:bg-[#063528] text-white py-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  Airline Direct Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
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
