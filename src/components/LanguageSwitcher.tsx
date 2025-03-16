
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors"
    >
      <Globe className="h-4 w-4 mr-1" />
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
};
