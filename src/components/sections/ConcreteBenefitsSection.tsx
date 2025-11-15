import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, AlertCircle, TrendingUp, Puzzle, Headphones, Rocket } from 'lucide-react';

export const ConcreteBenefitsSection = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit1.title'),
      description: t('concreteBenefits.benefit1.description'),
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit2.title'),
      description: t('concreteBenefits.benefit2.description'),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit3.title'),
      description: t('concreteBenefits.benefit3.description'),
    },
    {
      icon: <Puzzle className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit4.title'),
      description: t('concreteBenefits.benefit4.description'),
    },
    {
      icon: <Headphones className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit5.title'),
      description: t('concreteBenefits.benefit5.description'),
    },
    {
      icon: <Rocket className="h-8 w-8 text-aiBlue" />,
      title: t('concreteBenefits.benefit6.title'),
      description: t('concreteBenefits.benefit6.description'),
    },
  ];

  return (
    <section id="concrete-benefits" className="bg-aiDarkGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('concreteBenefits.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('concreteBenefits.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-panel p-6 animate-on-scroll card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full p-4 bg-aiBlue/10 w-fit mb-4 blue-glow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
