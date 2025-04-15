
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, BadgeDollarSign, LineChart, ThumbsUp } from 'lucide-react';

export const BenefitsSection = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-aiBlue" />,
      title: language === 'fr' ? "Gagnez du temps précieux" : "Save valuable time",
      description: language === 'fr'
        ? "Récupérez jusqu'à 15 heures par semaine en automatisant les tâches répétitives et chronophages."
        : "Recover up to 15 hours per week by automating repetitive and time-consuming tasks.",
      metric: language === 'fr' ? "15 heures/semaine" : "15 hours/week"
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-aiBlue" />,
      title: language === 'fr' ? "Réduisez vos coûts" : "Reduce your costs",
      description: language === 'fr'
        ? "Diminuez jusqu'à 30% vos frais opérationnels en rationalisant les processus manuels coûteux."
        : "Decrease your operational costs by up to 30% by streamlining costly manual processes.",
      metric: language === 'fr' ? "-30% de coûts" : "30% cost reduction"
    },
    {
      icon: <LineChart className="h-10 w-10 text-aiBlue" />,
      title: language === 'fr' ? "Augmentez vos revenus" : "Increase your revenue",
      description: language === 'fr'
        ? "Augmentez votre chiffre d'affaires de 25% grâce à un meilleur suivi client et une réponse plus rapide."
        : "Increase your revenue by 25% through better customer follow-up and faster response times.",
      metric: language === 'fr' ? "+25% de CA" : "+25% revenue"
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-aiBlue" />,
      title: language === 'fr' ? "Améliorez la satisfaction" : "Improve satisfaction",
      description: language === 'fr'
        ? "Augmentez la satisfaction client de 40% grâce à des interactions plus rapides et personnalisées."
        : "Increase customer satisfaction by 40% with faster and more personalized interactions.",
      metric: language === 'fr' ? "+40% satisfaction" : "+40% satisfaction"
    }
  ];

  return (
    <section id="benefits" className="bg-aiDark py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {language === 'fr'
              ? "Ce que nous vous apportons"
              : "What we bring you"}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {language === 'fr'
              ? "Des résultats concrets et mesurables pour votre entreprise"
              : "Concrete and measurable results for your business"}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-panel p-6 flex flex-col items-center text-center card-hover animate-on-scroll stagger-delay-${index % 4 + 1}"
            >
              <div className="rounded-full p-4 bg-aiMediumGray mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 mb-4">{benefit.description}</p>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-aiBlue">{benefit.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
