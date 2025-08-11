
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';
import { ArrowDown, Calendar, Phone } from 'lucide-react';

export const NewHeroSection = () => {
  const { t } = useLanguage();
  const { currency } = useCountry();
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 md:pt-0"
      style={{
        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.95)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      aria-labelledby="main-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aiDark z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <h1 id="main-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fadeInSlow leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeInSlow leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeIn">
          <a 
            href="https://calendly.com/dennismarfo/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aiBlue hover:bg-aiBlueLight text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow font-semibold text-lg"
          >
            <Calendar className="mr-3 h-6 w-6" aria-hidden="true" />
            {t('hero.cta')}
          </a>
          
          <a 
            href="#contact" 
            className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-aiDark px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg"
          >
            <Phone className="mr-3 h-6 w-6" aria-hidden="true" />
            {t('hero.cta2')}
          </a>
        </div>
        
        <div className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#benefits" className="text-white/50 hover:text-white flex flex-col items-center justify-center text-center transition-colors duration-300" aria-label="Scroll down to benefits section">
            <span className="mb-2 text-sm leading-none">{t('hero.scroll')}</span>
            <ArrowDown className="h-5 w-5 mx-auto" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
