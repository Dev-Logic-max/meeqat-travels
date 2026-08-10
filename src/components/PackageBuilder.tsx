'use client';

import React, { useState, useMemo } from 'react';
import { Calendar, Users, Hotel, Train, Plane, Calculator, CheckCircle2, Send, ChevronRight } from 'lucide-react';
import { Language, translations } from '@/content/translations';
import ratesData from '@/content/rates.json';

interface PackageBuilderProps {
  lang: Language;
}

export const PackageBuilder: React.FC<PackageBuilderProps> = ({ lang }) => {
  const t = translations[lang].builderSection;
  const isUrdu = lang === 'ur';

  // Calculator State
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [departureAirport, setDepartureAirport] = useState<string>('MUX');
  
  const [makkahNights, setMakkahNights] = useState<number>(8);
  const [makkahStar, setMakkahStar] = useState<number>(4);
  const [makkahSharing, setMakkahSharing] = useState<string>('quad'); // quad, triple, double

  const [madinaNights, setMadinaNights] = useState<number>(6);
  const [madinaStar, setMadinaStar] = useState<number>(4);
  const [madinaSharing, setMadinaSharing] = useState<string>('quad');

  const [transportType, setTransportType] = useState<string>('bus'); // bus, gmc, train
  const [includeZiyarat, setIncludeZiyarat] = useState<boolean>(true);

  // Dynamic Calculation Logic
  const calculation = useMemo(() => {
    // Base visa cost per person (PKR)
    const baseVisaCost = 45000;
    
    // Flight cost estimation based on airport
    const flightCost = departureAirport === 'MUX' ? 125000 : 120000;

    // Makkah per night per person cost based on star rating & sharing
    let makkahNightRate = 12000;
    if (makkahStar === 3) makkahNightRate = 8000;
    if (makkahStar === 4) makkahNightRate = 14000;
    if (makkahStar === 5) makkahNightRate = 26000;

    // Sharing factor (Quad is base 1.0, Triple 1.25, Double 1.6)
    const sharingMultiplierM = makkahSharing === 'quad' ? 1.0 : makkahSharing === 'triple' ? 1.25 : 1.6;
    const makkahHotelTotal = Math.round(makkahNights * makkahNightRate * sharingMultiplierM);

    // Madina per night per person cost
    let madinaNightRate = 10000;
    if (madinaStar === 3) madinaNightRate = 7000;
    if (madinaStar === 4) madinaNightRate = 12000;
    if (madinaStar === 5) madinaNightRate = 22000;

    const sharingMultiplierMad = madinaSharing === 'quad' ? 1.0 : madinaSharing === 'triple' ? 1.25 : 1.6;
    const madinaHotelTotal = Math.round(madinaNights * madinaNightRate * sharingMultiplierMad);

    // Transport cost per person
    let transportCost = 15000; // AC Bus
    if (transportType === 'gmc') transportCost = 45000;
    if (transportType === 'train') transportCost = 32000;

    // Ziyarat
    const ziyaratCost = includeZiyarat ? 8000 : 0;

    // Per Person Total
    const perAdultTotal = baseVisaCost + flightCost + makkahHotelTotal + madinaHotelTotal + transportCost + ziyaratCost;
    const perChildTotal = Math.round(perAdultTotal * 0.82); // Children discount

    const grandTotal = (perAdultTotal * adults) + (perChildTotal * children);

    return {
      baseVisaCost,
      flightCost,
      makkahHotelTotal,
      madinaHotelTotal,
      transportCost,
      ziyaratCost,
      perAdultTotal,
      grandTotal,
      totalDays: makkahNights + madinaNights + 1
    };
  }, [adults, children, departureAirport, makkahNights, makkahStar, makkahSharing, madinaNights, madinaStar, madinaSharing, transportType, includeZiyarat]);

  // Construct WhatsApp Payload
  const handleWhatsAppSend = () => {
    const selectedAirport = ratesData.airports.find(a => a.code === departureAirport)?.name || departureAirport;
    const text = isUrdu ? 
`*السلام علیکم میقات ٹریول اینڈ ٹورز!*
میں نے ویب سائٹ کسٹم بلڈر سے عمرہ پیکج اسپیسی فکیشن تیار کی ہے:

👤 *مسافر:* ${adults} بالغ ${children > 0 ? `, ${children} بچے` : ''}
🛫 *ائیرپورٹ:* ${selectedAirport}
📅 *سفر کا دورانیہ:* ${calculation.totalDays} دن (${makkahNights} راتیں مکہ + ${madinaNights} راتیں مدینہ)

🏨 *مکہ ہوٹل:* ${makkahStar} سٹار (${makkahSharing.toUpperCase()} روم شیئرنگ)
🕌 *مدینہ ہوٹل:* ${madinaStar} سٹار (${madinaSharing.toUpperCase()} روم شیئرنگ)
🚌 *ٹرانسپورٹ:* ${transportType === 'bus' ? 'ایئر کنڈیشنڈ بس' : transportType === 'gmc' ? 'وی آئی پی جی ایم سی گاڑی' : 'حرمین ہائی سپیڈ ٹرین'}
🕌 *زیارات:* ${includeZiyarat ? 'شامل ہیں' : 'شامل نہیں'}

💰 *تخمینی پیکج بجٹ:* تقریبا Rs. ${calculation.perAdultTotal.toLocaleString()} فی کس (کل بجٹ: Rs. ${calculation.grandTotal.toLocaleString()})

برائے مہربانی اس کوٹیشن کی حتمی تصدیق فرمائیں۔` :

`*Assalam-o-Alaikum Meeqat Travel!*
I generated a custom Umrah package specification on your website:

👤 *Travelers:* ${adults} Adults ${children > 0 ? `, ${children} Children` : ''}
🛫 *Airport:* ${selectedAirport}
📅 *Duration:* ${calculation.totalDays} Days (${makkahNights} Nights Makkah + ${madinaNights} Nights Madina)

🏨 *Makkah Hotel:* ${makkahStar} Star (${makkahSharing.toUpperCase()} Sharing)
🕌 *Madina Hotel:* ${madinaStar} Star (${madinaSharing.toUpperCase()} Sharing)
🚌 *Transport:* ${transportType.toUpperCase()}
🕌 *Ziyarat Included:* ${includeZiyarat ? 'Yes' : 'No'}

💰 *Estimated Quote:* Approx PKR ${calculation.perAdultTotal.toLocaleString()} per person (Total PKR ${calculation.grandTotal.toLocaleString()})

Please confirm available dates and firm pricing.`;

    const waUrl = `https://wa.me/${ratesData.agency.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-[#FAFAF5] py-12 px-4 sm:px-6 lg:px-8 border-y border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B4D3B]/10 text-[#0B4D3B] border border-[#0B4D3B]/20 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            {t.tag}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B4D3B] ${isUrdu ? 'font-urdu' : ''}`}>
            {t.title}
          </h2>
          <p className={`mt-2 text-sm text-[#5A6578] ${isUrdu ? 'font-urdu' : ''}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Builder Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Travelers & Departure */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-[#063528] flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <Users className="w-5 h-5 text-[#B98B3C]" />
                <span>{t.step1}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Adults Count */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'بالغ مسافر (12 سال سے زائد)' : 'Adult Travelers (12+ yrs)'}
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button 
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm">{adults}</span>
                    <button 
                      onClick={() => setAdults(adults + 1)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Count */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'بچے (2 سے 11 سال)' : 'Children (2-11 yrs)'}
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button 
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm">{children}</span>
                    <button 
                      onClick={() => setChildren(children + 1)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Departure Airport */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'روانگی کا ائیرپورٹ' : 'Departure Airport'}
                  </label>
                  <select
                    value={departureAirport}
                    onChange={(e) => setDepartureAirport(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white font-medium focus:ring-2 focus:ring-[#0B4D3B]"
                  >
                    {ratesData.airports.map(ap => (
                      <option key={ap.code} value={ap.code}>
                        {ap.city} ({ap.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Makkah Stay */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-[#063528] flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <Hotel className="w-5 h-5 text-[#B98B3C]" />
                <span>{t.step2}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Nights Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-gray-700">
                      {isUrdu ? 'مکہ منورہ قیام (راتیں)' : 'Makkah Nights'}
                    </label>
                    <span className="text-xs font-bold text-[#0B4D3B] bg-[#0B4D3B]/10 px-2 py-0.5 rounded">
                      {makkahNights} {t.nights}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={15}
                    value={makkahNights}
                    onChange={(e) => setMakkahNights(parseInt(e.target.value))}
                    className="w-full accent-[#0B4D3B]"
                  />
                </div>

                {/* Hotel Star Category */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'ہوٹل کیٹیگری' : 'Hotel Category'}
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-lg">
                    {[3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setMakkahStar(star)}
                        className={`py-1.5 text-xs font-bold rounded-md transition-all ${
                          makkahStar === star 
                            ? 'bg-[#0B4D3B] text-white shadow' 
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        {star} ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Room Sharing */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'کمرے کی قسم' : 'Room Sharing'}
                  </label>
                  <select
                    value={makkahSharing}
                    onChange={(e) => setMakkahSharing(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white font-medium"
                  >
                    <option value="quad">Quad (4 Persons per room)</option>
                    <option value="triple">Triple (3 Persons per room)</option>
                    <option value="double">Double / Twin (2 Persons)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Madina Stay */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-[#063528] flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <Hotel className="w-5 h-5 text-[#B98B3C]" />
                <span>{t.step3}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Nights Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-gray-700">
                      {isUrdu ? 'مدینہ منورہ قیام (راتیں)' : 'Madina Nights'}
                    </label>
                    <span className="text-xs font-bold text-[#0B4D3B] bg-[#0B4D3B]/10 px-2 py-0.5 rounded">
                      {madinaNights} {t.nights}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={15}
                    value={madinaNights}
                    onChange={(e) => setMadinaNights(parseInt(e.target.value))}
                    className="w-full accent-[#0B4D3B]"
                  />
                </div>

                {/* Hotel Star Category */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'ہوٹل کیٹیگری' : 'Hotel Category'}
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-lg">
                    {[3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setMadinaStar(star)}
                        className={`py-1.5 text-xs font-bold rounded-md transition-all ${
                          madinaStar === star 
                            ? 'bg-[#0B4D3B] text-white shadow' 
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        {star} ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Room Sharing */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isUrdu ? 'کمرے کی قسم' : 'Room Sharing'}
                  </label>
                  <select
                    value={madinaSharing}
                    onChange={(e) => setMadinaSharing(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white font-medium"
                  >
                    <option value="quad">Quad (4 Persons per room)</option>
                    <option value="triple">Triple (3 Persons per room)</option>
                    <option value="double">Double / Twin (2 Persons)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Transport & Ziyarat */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-[#063528] flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <Train className="w-5 h-5 text-[#B98B3C]" />
                <span>{t.step4}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    {isUrdu ? 'ٹرانسپورٹ کی سہولت' : 'Ground Transportation'}
                  </label>
                  <div className="space-y-2">
                    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      transportType === 'bus' ? 'border-[#0B4D3B] bg-[#0B4D3B]/5' : 'border-gray-200'
                    }`}>
                      <input 
                        type="radio" 
                        name="trans" 
                        value="bus" 
                        checked={transportType === 'bus'} 
                        onChange={() => setTransportType('bus')}
                        className="accent-[#0B4D3B]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-gray-800">Shared AC Bus Transfer</span>
                        <span className="text-[11px] text-gray-500">Economy complete circuit transport</span>
                      </div>
                    </label>

                    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      transportType === 'train' ? 'border-[#0B4D3B] bg-[#0B4D3B]/5' : 'border-gray-200'
                    }`}>
                      <input 
                        type="radio" 
                        name="trans" 
                        value="train" 
                        checked={transportType === 'train'} 
                        onChange={() => setTransportType('train')}
                        className="accent-[#0B4D3B]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-gray-800">Haramain High-Speed Train</span>
                        <span className="text-[11px] text-gray-500">Makkah ↔ Madina Bullet Train in 2 Hours</span>
                      </div>
                    </label>

                    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      transportType === 'gmc' ? 'border-[#0B4D3B] bg-[#0B4D3B]/5' : 'border-gray-200'
                    }`}>
                      <input 
                        type="radio" 
                        name="trans" 
                        value="gmc" 
                        checked={transportType === 'gmc'} 
                        onChange={() => setTransportType('gmc')}
                        className="accent-[#0B4D3B]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-gray-800">Private VIP GMC Yukon Car</span>
                        <span className="text-[11px] text-gray-500">Dedicated private luxury vehicle throughout</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      {isUrdu ? 'تاریخی زیارات' : 'Historical Ziyarat Included?'}
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={includeZiyarat}
                        onChange={(e) => setIncludeZiyarat(e.target.checked)}
                        className="w-4 h-4 accent-[#0B4D3B] rounded"
                      />
                      <span className="text-xs font-medium text-gray-800">
                        {isUrdu ? 'مکہ و مدینہ کے تمام مقدس مقامات کی زیارت گائیڈ کے ساتھ' : 'Include Guided Ziyarat Tours in Makkah & Madina'}
                      </span>
                    </label>
                  </div>

                  <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B98B3C] shrink-0 mt-0.5" />
                    <span>
                      {isUrdu ? 'تمام پیکجز میں نسک سسٹم کے ذریعے ویزا کی تصدیق اور ۲۴ گھنٹے رہنمائی شامل ہے۔' : 'All packages include verified Umrah Visa processing and 24/7 ground assistance.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Live Budget Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 glass-card-dark text-white rounded-2xl p-6 shadow-2xl border border-[#B98B3C]/40">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                <h3 className="font-serif text-lg font-bold text-[#E3C77E]">
                  {t.estimateTitle}
                </h3>
                <span className="text-xs font-mono bg-[#0B4D3B] px-2.5 py-1 rounded-full text-white">
                  {calculation.totalDays} Days Trip
                </span>
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Travelers:</span>
                  <span className="font-bold text-white">{adults} Adults {children > 0 && `, ${children} Children`}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Visa & Nusuk Verification:</span>
                  <span className="font-mono text-white">PKR {(calculation.baseVisaCost * adults).toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Flights ({departureAirport}):</span>
                  <span className="font-mono text-white">PKR {(calculation.flightCost * adults).toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Makkah Hotel ({makkahNights}N, {makkahStar}★):</span>
                  <span className="font-mono text-white">PKR {(calculation.makkahHotelTotal * adults).toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Madina Hotel ({madinaNights}N, {madinaStar}★):</span>
                  <span className="font-mono text-white">PKR {(calculation.madinaHotelTotal * adults).toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-gray-700/50 text-gray-300">
                  <span>Transport ({transportType.toUpperCase()}):</span>
                  <span className="font-mono text-white">PKR {(calculation.transportCost * adults).toLocaleString()}</span>
                </div>
              </div>

              {/* Pricing Totals */}
              <div className="bg-[#063528]/80 p-4 rounded-xl border border-[#B98B3C]/50 mb-6">
                <div className="text-xs text-gray-300 mb-1">Estimated Rate Per Person:</div>
                <div className="text-2xl font-bold font-mono text-[#E3C77E]">
                  PKR {calculation.perAdultTotal.toLocaleString()}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 flex justify-between">
                  <span>Total Est. Budget:</span>
                  <span className="font-mono font-bold text-white">PKR {calculation.grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Send to WhatsApp CTA */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span className={isUrdu ? 'font-urdu' : ''}>{t.btnSendWhatsApp}</span>
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-3 leading-tight">
                *Note: Final quotes depend on exact dates, hotel room availability, and flight ticket tariffs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
