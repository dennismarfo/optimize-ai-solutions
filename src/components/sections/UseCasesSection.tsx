
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Utensils, ShoppingCart, Briefcase, Store } from 'lucide-react';

export const UseCasesSection = () => {
  const { t } = useLanguage();
  
  const useCases = [
    {
      icon: <Utensils className="h-8 w-8 text-aiBlue" />,
      title: t('useCases.restaurants.title'),
      description: t('useCases.restaurants.description'),
      examples: ['Reservation system', 'Order management', 'Customer feedback'],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-aiBlue" />,
      title: t('useCases.ecommerce.title'),
      description: t('useCases.ecommerce.description'),
      examples: ['Order confirmations', 'Shipment tracking', 'Inventory updates'],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-aiBlue" />,
      title: t('useCases.professional.title'),
      description: t('useCases.professional.description'),
      examples: ['Appointment scheduling', 'Client follow-ups', 'Document automation'],
    },
    {
      icon: <Store className="h-8 w-8 text-aiBlue" />,
      title: t('useCases.small.title'),
      description: t('useCases.small.description'),
      examples: ['Invoicing system', 'Quote generation', 'Customer management'],
    },
  ];

  return (
    <section id="use-cases" className="bg-aiMediumGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('useCases.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('useCases.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="glass-panel p-6 animate-on-scroll card-hover stagger-delay-${index % 2 + 1}"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-aiBlue/10 mr-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
              </div>
              
              <p className="text-white/70 mb-4">{useCase.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {useCase.examples.map((example, i) => (
                  <span 
                    key={i} 
                    className="badge"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
