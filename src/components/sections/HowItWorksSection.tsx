
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, Lightbulb, Rocket, Calendar } from 'lucide-react';

export const HowItWorksSection = () => {
  const { language } = useLanguage();
  
  const steps = [
    {
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      number: "1",
      title: language === 'fr' ? "Consultation gratuite" : "Free consultation",
      description: language === 'fr'
        ? "Nous discutons de vos défis actuels et identifions les processus qui pourraient être automatisés pour un impact maximal."
        : "We discuss your current challenges and identify processes that could be automated for maximum impact."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-white" />,
      number: "2",
      title: language === 'fr' ? "Solution sur mesure" : "Custom solution",
      description: language === 'fr'
        ? "Nous créons une solution d'IA personnalisée qui s'intègre parfaitement à vos outils existants, sans perturber votre façon de travailler."
        : "We create a personalized AI solution that integrates seamlessly with your existing tools, without disrupting your way of working."
    },
    {
      icon: <Rocket className="h-12 w-12 text-white" />,
      number: "3",
      title: language === 'fr' ? "Mise en œuvre et résultats" : "Implementation and results",
      description: language === 'fr'
        ? "Nous mettons en place la solution et vous constatez rapidement des gains de temps et d'efficacité. Vous restez concentré sur votre cœur de métier."
        : "We implement the solution and you quickly see time and efficiency gains. You stay focused on your core business."
    }
  ];

  return (
    <section id="how-it-works" className="bg-aiDarkGray py-24 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {language === 'fr'
              ? "Comment ça fonctionne"
              : "How it works"}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {language === 'fr'
              ? "Un processus simple en 3 étapes pour transformer votre entreprise"
              : "A simple 3-step process to transform your business"}
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-aiBlue/0 via-aiBlue to-aiBlue/0 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center animate-on-scroll stagger-delay-${index + 1}"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-aiBlue flex items-center justify-center shadow-lg shadow-aiBlue/20 z-10">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-aiBlue/30 animate-ping opacity-75"></div>
                  <div className="absolute -top-3 -left-3 text-4xl font-bold text-white bg-aiDarkGray w-10 h-10 rounded-full flex items-center justify-center border-2 border-aiBlue">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://calendly.com/dennismarfo/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aiBlue hover:bg-aiBlueLight text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow font-medium text-lg"
          >
            <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
            {language === 'fr' 
              ? "Démarrer avec une consultation gratuite" 
              : "Start with a free consultation"}
          </a>
        </div>
      </div>
    </section>
  );
};
