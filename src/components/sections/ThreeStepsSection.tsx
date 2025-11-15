import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ClipboardCheck, FileText, Zap } from 'lucide-react';

export const ThreeStepsSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-aiBlue" />,
      title: t('threeSteps.step1.title'),
      description: t('threeSteps.step1.description'),
    },
    {
      icon: <FileText className="h-10 w-10 text-aiBlue" />,
      title: t('threeSteps.step2.title'),
      description: t('threeSteps.step2.description'),
    },
    {
      icon: <Zap className="h-10 w-10 text-aiBlue" />,
      title: t('threeSteps.step3.title'),
      description: t('threeSteps.step3.description'),
    },
  ];

  return (
    <section id="three-steps" className="bg-aiMediumGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('threeSteps.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('threeSteps.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-aiBlue to-transparent z-0" />
              )}
              
              <div className="glass-panel p-8 text-center relative z-10 card-hover">
                <div className="rounded-full p-6 bg-aiBlue/10 w-fit mx-auto mb-6 blue-glow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-white/80 mb-4">Prêt à commencer ?</p>
          <a 
            href="https://calendly.com/opti-ai-solutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-aiBlue to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-aiBlue/50 transition-all duration-300 blue-glow"
          >
            Réserver un appel gratuit
          </a>
        </div>
      </div>
    </section>
  );
};
