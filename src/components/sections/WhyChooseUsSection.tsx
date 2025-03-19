
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, DollarSign, Users, BarChart, Settings, Shield } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-aiBlue" />,
      title: t('why.time.title'),
      description: t('why.time.description'),
    },
    {
      icon: <DollarSign className="h-6 w-6 text-aiBlue" />,
      title: t('why.cost.title'),
      description: t('why.cost.description'),
    },
    {
      icon: <Users className="h-6 w-6 text-aiBlue" />,
      title: t('why.customer.title'),
      description: t('why.customer.description'),
    },
    {
      icon: <BarChart className="h-6 w-6 text-aiBlue" />,
      title: t('why.productivity.title'),
      description: t('why.productivity.description'),
    },
    {
      icon: <Settings className="h-6 w-6 text-aiBlue" />,
      title: t('why.tailored.title'),
      description: t('why.tailored.description'),
    },
    {
      icon: <Shield className="h-6 w-6 text-aiBlue" />,
      title: t('why.security.title'),
      description: t('why.security.description'),
    },
  ];

  return (
    <section id="why-us" className="bg-aiDarkGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('why.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('why.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-panel p-6 flex items-start animate-on-scroll card-hover stagger-delay-${index % 3 + 1}"
            >
              <div className="p-3 rounded-full bg-aiBlue/10 mr-4 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
