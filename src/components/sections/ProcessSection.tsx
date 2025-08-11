
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Search, Wrench, Rocket, Settings } from 'lucide-react';

export const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-aiBlue" />,
      title: t('process.audit.title'),
      description: t('process.audit.description'),
    },
    {
      icon: <Wrench className="h-8 w-8 text-aiBlue" />,
      title: t('process.prototype.title'),
      description: t('process.prototype.description'),
    },
    {
      icon: <Rocket className="h-8 w-8 text-aiBlue" />,
      title: t('process.deployment.title'),
      description: t('process.deployment.description'),
    },
    {
      icon: <Settings className="h-8 w-8 text-aiBlue" />,
      title: t('process.optimization.title'),
      description: t('process.optimization.description'),
    },
  ];

  return (
    <section id="process" className="bg-aiMediumGray py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('process.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="rounded-full p-6 bg-aiDark/50 w-fit mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
