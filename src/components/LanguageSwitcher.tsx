'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { locales, localeMeta, localizePath, type Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/LocaleProvider';

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside click and on Escape — a dropdown that traps the page is
  // the fastest way to make a site feel broken on mobile.
  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent | TouchEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('touchstart', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('touchstart', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function choose(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    // Remember the choice so the middleware honours it on the next visit.
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(localizePath(pathname, next));
  }

  const current = localeMeta[locale];

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.common.languageLabel}
        className={`flex items-center gap-1.5 rounded-md border border-[#e8e4dc] bg-white text-[#4a4a4a] transition-colors hover:border-[#0B4D3B] hover:text-[#0B4D3B] ${
          compact ? 'px-2 py-1.5 text-xs' : 'px-2.5 py-1.5 text-[12px]'
        }`}
      >
        {compact ? (
          <Globe className="h-3.5 w-3.5" />
        ) : (
          <span className="text-[15px] leading-none">{current.flag}</span>
        )}
        <span className="font-medium">{current.nativeLabel}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-[#e8e4dc] bg-white py-1 shadow-lg shadow-black/5"
        >
          {locales.map((code) => {
            const meta = localeMeta[code];
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => choose(code)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-start text-[13px] transition-colors hover:bg-[#F7F4EC] ${
                    active ? 'text-[#0B4D3B]' : 'text-[#3a3a3a]'
                  }`}
                >
                  <span className="text-base leading-none">{meta.flag}</span>
                  <span className="flex-1">
                    <span className="block font-medium leading-tight">{meta.nativeLabel}</span>
                    <span className="block text-[10.5px] leading-tight text-[#9a9384]">
                      {meta.englishLabel}
                    </span>
                  </span>
                  {active && <Check className="h-3.5 w-3.5 shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
