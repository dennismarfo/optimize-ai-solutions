
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { TrendingDown, TrendingUp, DollarSign } from 'lucide-react';

export const CaseStudySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="case" className="bg-aiDark py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('caseStudy.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('caseStudy.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 mb-8 animate-on-scroll">
            <p className="text-white/80 text-lg mb-8 text-center">
              {t('caseStudy.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full p-4 bg-green-500/20 w-fit mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">{t('caseStudy.result1')}</h3>
              </div>
              
              <div className="text-center">
                <div className="rounded-full p-4 bg-aiBlue/20 w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-aiBlue" />
                </div>
                <h3 className="text-2xl font-bold text-aiBlue mb-2">{t('caseStudy.result2')}</h3>
              </div>
              
              <div className="text-center">
                <div className="rounded-full p-4 bg-yellow-500/20 w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{t('caseStudy.result3')}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
