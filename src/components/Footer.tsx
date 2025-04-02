
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aiDark py-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-white font-bold text-xl">
              OptiAI<span className="text-aiBlue">-Solutions</span>
            </a>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
          
          <div className="text-white/40 text-sm">
            &copy; {currentYear} OptiAI-Solutions. {t('footer.rights')} <span className="ml-1">propulsé par Marfo Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
