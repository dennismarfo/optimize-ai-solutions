
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Country = 'canada' | 'france';

interface CountryContextProps {
  country: Country;
  setCountry: (country: Country) => void;
  currency: string;
  locale: string;
  getFlag: () => string;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<Country>('canada');

  const currency = country === 'canada' ? 'CAD' : 'EUR';
  const locale = country === 'canada' ? 'fr-CA' : 'fr-FR';
  
  const getFlag = () => country === 'canada' ? '🇨🇦' : '🇫🇷';

  return (
    <CountryContext.Provider value={{ country, setCountry, currency, locale, getFlag }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextProps => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
