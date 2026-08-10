'use client';

import React from 'react';
import ratesData from '@/content/rates.json';
import { Language } from '@/content/translations';

interface WhatsAppFloatProps {
  lang: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';
  const waNumber = ratesData.agency.whatsappNumber;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    isUrdu 
      ? "السلام علیکم! میں میقات ٹریول سے عمرہ پیکج / ویزہ کی معلومات چاہتا ہوں۔" 
      : "Assalam-o-Alaikum! I want to inquire about Umrah package rates and visa details from Meeqat Travel."
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-all hover:scale-105 group border-2 border-white"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      <span className={`text-xs font-bold tracking-wide pr-1 hidden sm:inline-block ${isUrdu ? 'font-urdu' : ''}`}>
        {isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Chat on WhatsApp'}
      </span>
    </a>
  );
};
