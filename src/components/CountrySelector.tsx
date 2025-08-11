
import React from 'react';
import { useCountry } from '@/context/CountryContext';

export const CountrySelector = () => {
  const { country, setCountry } = useCountry();

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => setCountry('canada')}
        className={`flex items-center text-sm font-medium transition-colors ${
          country === 'canada' 
            ? 'text-white' 
            : 'text-white/60 hover:text-white/80'
        }`}
      >
        <span className="mr-1">🇨🇦</span>
        <span>Canada</span>
      </button>
      <span className="text-white/40">|</span>
      <button 
        onClick={() => setCountry('france')}
        className={`flex items-center text-sm font-medium transition-colors ${
          country === 'france' 
            ? 'text-white' 
            : 'text-white/60 hover:text-white/80'
        }`}
      >
        <span className="mr-1">🇫🇷</span>
        <span>France</span>
      </button>
    </div>
  );
};
