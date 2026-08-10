'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [open, setOpen] = useState(false);
  const isUrdu = lang === 'ur';

  const links = [
    { href: '/', label: isUrdu ? 'ہوم' : 'Home' },
    { href: '/umrah-packages', label: isUrdu ? 'عمرہ پیکجز' : 'Umrah Packages' },
    { href: '/package-builder', label: isUrdu ? 'کسٹم بلڈر' : 'Custom Builder' },
    { href: '/visas', label: isUrdu ? 'ویزہ سروسز' : 'Visa Services' },
    { href: '/destinations/makkah', label: isUrdu ? 'مکہ' : 'Makkah' },
    { href: '/destinations/madina', label: isUrdu ? 'مدینہ' : 'Madina' },
    { href: '/about', label: isUrdu ? 'ہمارے بارے میں' : 'About' },
    { href: '/contact', label: isUrdu ? 'رابطہ' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded bg-[#0B4D3B] flex items-center justify-center text-[#E3C77E] font-serif text-lg font-bold">م</span>
            <div className="leading-tight">
              <span className="text-base font-serif font-bold text-[#0B4D3B] tracking-tight">Meeqat Travel</span>
              <span className="text-[10px] text-[#6b6b6b] block -mt-0.5">میقات ٹریول اینڈ ٹورز</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] text-[#1a1a1a]">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-[#0B4D3B] transition-colors py-1">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'ur' : 'en')}
              className="text-[11px] px-2.5 py-1 rounded border border-[#e8e4dc] text-[#6b6b6b] hover:border-[#0B4D3B] hover:text-[#0B4D3B] transition-colors"
            >
              {lang === 'en' ? 'اردو' : 'English'}
            </button>
            <a
              href={`tel:${ratesData.agency.phonePrimary.replace(/\s/g, '')}`}
              className="text-[12px] text-[#0B4D3B] font-medium flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              {ratesData.agency.phonePrimary}
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-1.5 text-[#1a1a1a]">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-[#e8e4dc] px-5 py-4 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[#1a1a1a] hover:text-[#0B4D3B]"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => { onLanguageChange(lang === 'en' ? 'ur' : 'en'); setOpen(false); }}
              className="text-xs px-3 py-1.5 border border-[#e8e4dc] rounded text-[#6b6b6b]"
            >
              {lang === 'en' ? 'اردو' : 'English'}
            </button>
            <a href={`tel:${ratesData.agency.phonePrimary.replace(/\s/g, '')}`} className="text-xs text-[#0B4D3B] font-medium">
              {ratesData.agency.phonePrimary}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
