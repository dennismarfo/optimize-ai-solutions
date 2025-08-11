
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, Shield, Zap, CheckCircle } from 'lucide-react';

export const NewBenefitsSection = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-aiBlue" />,
      title: t('benefits.timeReduction.title'),
      description: t('benefits.timeReduction.description'),
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-aiBlue" />,
      title: t('benefits.compliance.title'),
      description: t('benefits.compliance.description'),
    },
    {
      icon: <Zap className="h-10 w-10 text-aiBlue" />,
      title: t('benefits.integrations.title'),
      description: t('benefits.integrations.description'),
    },
    {
      icon: <Shield className="h-10 w-10 text-aiBlue" />,
      title: t('benefits.security.title'),
      description: t('benefits.security.description'),
    },
  ];

  return (
    <section id="benefits" className="bg-aiMediumGray py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('benefits.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-panel p-6 text-center card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="rounded-full p-4 bg-aiDark/50 mb-6 w-fit mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA milieu de page */}
        <div className="text-center mt-16">
          <a 
            href="https://calendly.com/dennismarfo/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aiBlue hover:bg-aiBlueLight text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow font-medium text-lg"
          >
            <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
