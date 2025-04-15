
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  MessageSquare, 
  FileText, 
  Calendar, 
  Mail, 
  ClipboardCheck, 
  Receipt 
} from 'lucide-react';

export const WhyAISection = () => {
  const { language } = useLanguage();
  
  const useCases = [
    {
      icon: <MessageSquare className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Chatbots intelligents" : "Intelligent chatbots",
      description: language === 'fr'
        ? "Répondez aux questions fréquentes de vos clients 24/7, même lorsque vous dormez."
        : "Answer your customers' frequent questions 24/7, even when you're asleep."
    },
    {
      icon: <FileText className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Création de contenu" : "Content creation",
      description: language === 'fr'
        ? "Générez des devis, propositions et rapports personnalisés en quelques secondes."
        : "Generate quotes, proposals, and customized reports in seconds."
    },
    {
      icon: <Calendar className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Gestion de rendez-vous" : "Appointment management",
      description: language === 'fr'
        ? "Automatisez la prise de rendez-vous et les rappels pour réduire les absences."
        : "Automate appointment booking and reminders to reduce no-shows."
    },
    {
      icon: <Mail className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Suivi client automatisé" : "Automated customer follow-up",
      description: language === 'fr'
        ? "Ne manquez jamais une opportunité de vente grâce à des suivis personnalisés."
        : "Never miss a sales opportunity thanks to personalized follow-ups."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Automatisation des tâches" : "Task automation",
      description: language === 'fr'
        ? "Éliminez les tâches manuelles répétitives comme la saisie de données."
        : "Eliminate repetitive manual tasks like data entry."
    },
    {
      icon: <Receipt className="h-8 w-8 text-aiBlue" />,
      title: language === 'fr' ? "Facturation simplifiée" : "Simplified invoicing",
      description: language === 'fr'
        ? "Créez et envoyez des factures automatiquement, avec suivi des paiements."
        : "Create and send invoices automatically, with payment tracking."
    }
  ];

  const industries = [
    language === 'fr' ? "Restauration" : "Restaurants",
    language === 'fr' ? "Salons de beauté" : "Beauty salons",
    language === 'fr' ? "Cabinets médicaux" : "Medical offices",
    language === 'fr' ? "Freelances" : "Freelancers",
    language === 'fr' ? "Artisans" : "Craftspeople",
    language === 'fr' ? "Petits commerces" : "Small shops",
    language === 'fr' ? "Consultants" : "Consultants",
    language === 'fr' ? "Services à domicile" : "Home services"
  ];

  return (
    <section id="why-ai" className="bg-aiMediumGray py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {language === 'fr'
              ? "Pourquoi l'IA maintenant ?"
              : "Why AI now?"}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {language === 'fr'
              ? "Des cas d'usage concrets qui transforment déjà les petites entreprises"
              : "Concrete use cases already transforming small businesses"}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="glass-panel p-6 flex flex-col animate-on-scroll card-hover stagger-delay-${index % 3 + 1}"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-aiBlue/10 mr-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
              </div>
              
              <p className="text-white/70">{useCase.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center animate-on-scroll">
            {language === 'fr'
              ? "Parfait pour ces secteurs d'activité"
              : "Perfect for these business sectors"}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
            {industries.map((industry, index) => (
              <span 
                key={index} 
                className="badge bg-aiBlue/20 border border-aiBlue/30 px-4 py-2 text-sm"
              >
                {industry}
              </span>
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
              ? "Réserver ma consultation gratuite de 15 min" 
              : "Book my free 15-min consultation"}
          </a>
        </div>
      </div>
    </section>
  );
};
