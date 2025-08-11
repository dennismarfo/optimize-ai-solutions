
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';
import { Receipt, CreditCard, FileText, TrendingUp } from 'lucide-react';

export const NewServicesSection = () => {
  const { t } = useLanguage();
  const { country } = useCountry();
  
  const services = country === 'canada' ? [
    {
      icon: <Receipt className="h-10 w-10 text-aiBlue" />,
      title: t('services.invoicing.title'),
      description: t('services.invoicing.description'),
    },
    {
      icon: <CreditCard className="h-10 w-10 text-aiBlue" />,
      title: t('services.reconciliation.title'),
      description: t('services.reconciliation.description'),
    },
    {
      icon: <FileText className="h-10 w-10 text-aiBlue" />,
      title: t('services.extraction.title'),
      description: t('services.extraction.description'),
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-aiBlue" />,
      title: t('services.forecasting.title'),
      description: t('services.forecasting.description'),
    },
  ] : [
    {
      icon: <Receipt className="h-10 w-10 text-aiBlue" />,
      title: t('services.invoicing.title'),
      description: t('services.invoicing.description'),
    },
    {
      icon: <CreditCard className="h-10 w-10 text-aiBlue" />,
      title: t('services.reconciliation.title'),
      description: t('services.reconciliation.description'),
    },
    {
      icon: <FileText className="h-10 w-10 text-aiBlue" />,
      title: t('services.suppliers.title'),
      description: t('services.suppliers.description'),
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-aiBlue" />,
      title: t('services.forecasting.title'),
      description: t('services.forecasting.description'),
    },
  ];

  return (
    <section id="services" className="bg-aiDark py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('services.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-panel p-8 flex items-start space-x-6 card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full p-4 bg-aiMediumGray flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
