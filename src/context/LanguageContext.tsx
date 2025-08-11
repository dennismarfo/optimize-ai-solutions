
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/lib/translations';
import { useCountry } from '@/context/CountryContext';

interface LanguageContextProps {
  t: (key: string) => string;
  // Backward-compat fields for legacy components
  language?: string;
  setLanguage?: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { country, locale } = useCountry();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[country];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for country: ${country}`);
        return key;
      }
    }
    
    return value;
  };

  // Backward-compat: expose language and setLanguage expected by legacy components
  const setLanguage = (lang: string) => {
    console.warn('setLanguage is deprecated. Use the country selector to switch locales.');
  };

  return (
    <LanguageContext.Provider value={{ t, language: locale, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.error('useLanguage must be used within a LanguageProvider');
    // Safe fallback to prevent hard crashes when provider is missing
    return {
      t: (key: string) => key,
      language: 'fr-FR',
      setLanguage: () => {},
    };
  }
  return context;
};
