'use client';
import { useLocale } from '@/i18n/LocaleProvider';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Language } from '@/content/translations';
import ratesData from '@/content/rates.json';
import { MapPin, Phone, Mail, Send, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const lang = useLocale();
  const isUrdu = lang === 'ur';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: 'Umrah Package Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Assalam-o-Alaikum! New website inquiry:\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏙 City: ${formData.city}\n` +
      `📋 Service: ${formData.service}\n` +
      `💬 Message: ${formData.message}`
    );
    window.open(`https://wa.me/${ratesData.agency.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className={isUrdu ? 'font-urdu' : lang === 'ar' ? 'font-arabic' : ''}>
      <Navbar />

      <section className="py-16 bg-[#FAFAF5] border-b border-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[#0B4D3B] text-xs font-semibold uppercase tracking-wider block mb-2">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a]">Contact Meeqat Travel</h1>
          <p className="text-sm text-[#6b6b6b] mt-2 max-w-xl">
            Have questions about Umrah packages, Saudi visit visas, or customized itineraries? Visit our Rahim Yar Khan office or message us directly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white border border-[#e8e4dc] p-8 rounded-2xl shadow-sm">
              <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-[#1a1a1a] mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ahmad"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#0B4D3B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1a1a1a] mb-2">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#0B4D3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1a1a1a] mb-2">Your City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahim Yar Khan"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#0B4D3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1a1a1a] mb-2">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#0B4D3B] bg-white"
                  >
                    <option value="Umrah Package Inquiry">Umrah Package Inquiry</option>
                    <option value="Custom Umrah Builder">Custom Umrah Builder</option>
                    <option value="Saudi Visit Visa">Saudi Visit Visa</option>
                    <option value="International Visa Service">International Visa Service</option>
                    <option value="Flight Booking Inquiry">Flight Booking Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1a1a1a] mb-2">Message / Travel Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us your tentative travel dates, number of people, or specific requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#e8e4dc] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#0B4D3B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B4D3B] hover:bg-[#063528] text-white py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              <div className="bg-[#FAFAF5] border border-[#e8e4dc] p-8 rounded-2xl space-y-6">
                <h3 className="font-serif text-2xl text-[#16243F]">Head Office Details</h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0B4D3B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1a1a1a] block mb-1">Office Address</strong>
                      <p className="text-[#6b6b6b] leading-relaxed">{ratesData.agency.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0B4D3B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1a1a1a] block mb-1">Phone Numbers</strong>
                      <p className="font-mono text-[#6b6b6b]">{ratesData.agency.phonePrimary}</p>
                      <p className="font-mono text-[#6b6b6b]">{ratesData.agency.phoneSecondary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0B4D3B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1a1a1a] block mb-1">Email Address</strong>
                      <p className="text-[#6b6b6b]">{ratesData.agency.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0B4D3B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1a1a1a] block mb-1">Working Hours</strong>
                      <p className="text-[#6b6b6b]">Monday – Saturday: 9:00 AM – 9:00 PM</p>
                      <p className="text-[#6b6b6b]">Friday: Closed during Jummah Prayer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#e8e4dc]">
                    <ShieldCheck className="w-4 h-4 text-[#0B4D3B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1a1a1a] block mb-1">Govt License Verification</strong>
                      <p className="text-[#6b6b6b]">DTS Licence: {ratesData.agency.licenceNumber}</p>
                      <p className="text-[#6b6b6b]">{ratesData.agency.moraLicence}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Warning Note */}
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-xs text-amber-900 leading-relaxed">
                <strong>⚠ Official Security Reminder:</strong><br/>
                All official payments for Umrah packages and visa services must be made exclusively to the official corporate bank account of <strong>Meeqat Travel and Tours (Pvt) Ltd</strong> at Meezan Bank. Never hand cash to unauthorized individuals or personal accounts.
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
