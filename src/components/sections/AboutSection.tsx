
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BrainCircuit, Users, CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-aiDarkGray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title animate-on-scroll">
            {t('about.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-aiBlue mb-1">2+</div>
                <div className="text-sm text-white/60">{t('about.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aiBlue mb-1">50+</div>
                <div className="text-sm text-white/60">{t('about.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aiBlue mb-1">100+</div>
                <div className="text-sm text-white/60">{t('about.projects')}</div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-aiBlue/10 mr-4">
                <BrainCircuit className="h-6 w-6 text-aiBlue" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">AI Conversational Assistant & GPT-4 Integration</h3>
                <p className="text-white/60 text-sm">Advanced AI models for intelligent automation</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-aiBlue/10 mr-4">
                <svg className="h-6 w-6 text-aiBlue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9v8a3 3 0 003 3h6a3 3 0 003-3V9a3 3 0 00-3-3H9a3 3 0 00-3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 6V3h2v3M12 12v3M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">N8N & Make Workflows</h3>
                <p className="text-white/60 text-sm">Powerful automation platforms for complex processes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-aiBlue/10 mr-4">
                <CheckCircle className="h-6 w-6 text-aiBlue" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">No-Code Solutions</h3>
                <p className="text-white/60 text-sm">Accessible automation for businesses of all sizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
