'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <footer className="bg-[#063528] text-white">
      {/* Fraud Warning — compact strip */}
      <div className="border-b border-white/10 py-3 px-5">
        <div className="max-w-7xl mx-auto text-[11px] text-amber-200/90 text-center">
          ⚠ All payments must be deposited to <strong className="text-white">Meeqat Travel and Tours (Pvt) Ltd — {ratesData.agency.bankDetails.bankName}</strong> only. Never pay into personal accounts.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-[#0B4D3B] flex items-center justify-center text-[#E3C77E] font-serif text-sm font-bold border border-[#B98B3C]/40">م</span>
              <span className="font-serif text-sm font-bold">Meeqat Travel & Tours</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Licensed Hajj & Umrah tour operator serving pilgrims from Rahim Yar Khan and across Pakistan since 2011.
            </p>
            <div className="text-[11px] text-[#E3C77E]/70">
              DTS # PK-7842 · MoRA Registered
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Services</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li><Link href="/umrah-packages" className="hover:text-white transition-colors">Umrah Packages 2026</Link></li>
              <li><Link href="/package-builder" className="hover:text-white transition-colors">Custom Package Builder</Link></li>
              <li><Link href="/visas" className="hover:text-white transition-colors">Saudi Visit Visa</Link></li>
              <li><Link href="/visas" className="hover:text-white transition-colors">International Visas</Link></li>
              <li><Link href="/licence" className="hover:text-white transition-colors">Licence Verification</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Destinations</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li><Link href="/destinations/makkah" className="hover:text-white transition-colors">Makkah al-Mukarramah</Link></li>
              <li><Link href="/destinations/madina" className="hover:text-white transition-colors">Madina al-Munawwarah</Link></li>
              <li><Link href="/destinations/jeddah" className="hover:text-white transition-colors">Jeddah</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Meeqat Travel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contact</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
                <span>{ratesData.agency.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span className="font-mono">{ratesData.agency.phonePrimary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span>{ratesData.agency.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-5">
        <div className="max-w-7xl mx-auto text-center text-[11px] text-gray-500">
          © 2026 Meeqat Travel and Tours (Pvt) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
