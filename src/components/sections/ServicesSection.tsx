
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Workflow, Bot, FileText, Bell, BarChart3, Mail } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Workflow className="h-10 w-10 text-aiBlue" />,
      title: t('services.process.title'),
      description: t('services.process.description'),
    },
    {
      icon: <Bot className="h-10 w-10 text-aiBlue" />,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
    },
    {
      icon: <FileText className="h-10 w-10 text-aiBlue" />,
      title: t('services.content.title'),
      description: t('services.content.description'),
    },
    {
      icon: <Bell className="h-10 w-10 text-aiBlue" />,
      title: t('services.followups.title'),
      description: t('services.followups.description'),
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-aiBlue" />,
      title: t('services.reporting.title'),
      description: t('services.reporting.description'),
    },
    {
      icon: <Mail className="h-10 w-10 text-aiBlue" />,
      title: t('services.email.title'),
      description: t('services.email.description'),
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-panel p-6 flex flex-col items-center text-center card-hover animate-on-scroll stagger-delay-${index % 3 + 1}"
            >
              <div className="rounded-full p-4 bg-aiMediumGray mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
