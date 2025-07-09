
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDown, Calendar, Check, Target } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 md:pt-0"
      style={{
        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.95)), url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80")',
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
        
        {/* Benefits List */}
        <div className="max-w-2xl mx-auto mb-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center justify-center md:justify-start bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-white text-sm md:text-base">{t('hero.benefits.analysis')}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-white text-sm md:text-base">{t('hero.benefits.recommendations')}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-white text-sm md:text-base">{t('hero.benefits.suggestion')}</span>
            </div>
          </div>
          
          {/* Target Audience */}
          <div className="flex items-center justify-center bg-aiBlue/20 backdrop-blur-sm rounded-lg px-6 py-3 mb-8">
            <Target className="h-5 w-5 text-aiBlue mr-3" />
            <span className="text-aiBlue font-medium text-sm md:text-base">{t('hero.target')}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fadeIn mb-12">
          <a 
            href="https://calendly.com/dennismarfo/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aiBlue hover:bg-aiBlueLight text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow font-semibold text-lg"
          >
            <Calendar className="mr-3 h-6 w-6" aria-hidden="true" />
            {t('hero.cta')}
          </a>
        </div>
        
        {/* WhatsApp Button */}
        <div className="animate-fadeIn mb-16">
          <a 
            href="https://wa.me/14506260481" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-600/50 font-medium"
            aria-label="Contact us on WhatsApp"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
        
        <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#problems" className="text-white/50 hover:text-white flex flex-col items-center justify-center text-center transition-colors duration-300" aria-label="Scroll down to problems section">
            <span className="mb-2 text-sm leading-none">{t('hero.scroll')}</span>
            <ArrowDown className="h-5 w-5 mx-auto" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
