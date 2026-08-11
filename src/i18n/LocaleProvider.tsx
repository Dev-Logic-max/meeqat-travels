'use client';

import React, { createContext, useContext } from 'react';
import { defaultLocale, getDir, type Locale } from './config';
import { getDictionary, type Dictionary } from './dictionaries';

interface LocaleContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  dir: 'ltr',
  t: getDictionary(defaultLocale),
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    dir: getDir(locale),
    t: getDictionary(locale),
  };
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

/** Current locale code — the legacy components expect this shape. */
export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

/** Full context when a component needs direction or the dictionary too. */
export function useI18n(): LocaleContextValue {
  return useContext(LocaleContext);
}
