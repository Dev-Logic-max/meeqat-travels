'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, ExternalLink, Award, FileText, AlertTriangle } from 'lucide-react';
import { Language, translations } from '@/content/translations';
import ratesData from '@/content/rates.json';

interface LicenceProps {
  lang: Language;
}

export const LicenceVerificationSection: React.FC<LicenceProps> = ({ lang }) => {
  const t = translations[lang].licenceNotice;
  const isUrdu = lang === 'ur';

  return (
    <section className="py-12 bg-[#16243F] text-white border-y border-[#B98B3C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: License Details */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold gold-badge">
              <ShieldCheck className="w-4 h-4 text-[#B98B3C]" />
              {ratesData.agency.licenceNumber}
            </span>

            <h2 className={`text-2xl sm:text-3xl font-serif font-bold text-white ${isUrdu ? 'font-urdu' : ''}`}>
              {t.title}
            </h2>

            <p className={`text-sm text-gray-300 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu 
                ? 'میقات ٹریول اینڈ ٹورز رحیم یار خان ایک باقاعدہ رجسٹرڈ اور لائسنس یافتہ عمرہ و حج آپریٹر ہے (کوئی عام سب ایجنٹ نہیں)۔ ہمارے پاس حکومت پاکستان، وزارت مذہبی امور اور سعودی عرب کی سفارتی اتھارٹیز کے ساتھ ڈائریکٹ رجسٹریشن موجود ہے۔'
                : 'Meeqat Travel & Tours holds an independent, direct tour operator licence (DTS # PK-7842 / MoRA Approved). We are direct operators, connected with official Saudi and Pakistani diplomatic systems for verified Umrah visa issued via Nusuk BRN.'
              }
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#063528]/80 p-3.5 rounded-xl border border-[#B98B3C]/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#E3C77E]">Ministry of Religious Affairs (MoRA)</h4>
                  <p className="text-[11px] text-gray-300 mt-0.5">Officially listed & attested operator</p>
                </div>
              </div>

              <div className="bg-[#063528]/80 p-3.5 rounded-xl border border-[#B98B3C]/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#E3C77E]">Department of Tourist Services (DTS)</h4>
                  <p className="text-[11px] text-gray-300 mt-0.5">Government License # PK-7842</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.mora.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#E3C77E] hover:underline"
              >
                <span>Verify on Ministry of Religious Affairs (mora.gov.pk)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: License Badge Visual & Fraud Warning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0B4D3B]/90 p-6 rounded-2xl border-2 border-[#B98B3C] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10 space-y-3 text-center sm:text-left">
                <div className="inline-block p-3 bg-[#16243F] rounded-xl text-[#E3C77E] border border-[#B98B3C]">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs text-[#E3C77E] font-mono uppercase tracking-widest">VERIFIED OPERATOR</div>
                  <h3 className="text-xl font-serif font-bold text-white">Meeqat Travel and Tours (Pvt) Ltd</h3>
                </div>
                
                <div className="border-t border-[#B98B3C]/40 pt-3 text-xs text-gray-200 space-y-1">
                  <div><strong>Head Office:</strong> Near Abbasia Canal Petrol Pump, Rahim Yar Khan</div>
                  <div><strong>Network:</strong> Sub-agents & Partners across Pakistan</div>
                  <div><strong>Direct Consular Channel:</strong> Tasheer Biometrics & Nusuk BRN</div>
                </div>
              </div>
            </div>

            {/* Official Bank Account Warning */}
            <div className="bg-amber-950/80 border border-amber-500/50 p-4 rounded-xl text-xs text-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-bold mb-0.5">Pay only to official company account:</strong>
                <span className="font-mono text-amber-300">Title: {ratesData.agency.bankDetails.accountTitle} ({ratesData.agency.bankDetails.bankName})</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
