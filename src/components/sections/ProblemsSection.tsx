
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, AlertCircle, BadgeDollarSign, PanelLeftClose } from 'lucide-react';

export const ProblemsSection = () => {
  const { language } = useLanguage();
  
  const problems = [
    {
      icon: <Clock className="h-10 w-10 text-red-400" />,
      title: language === 'fr' ? "Trop de temps perdu" : "Too much wasted time",
      description: language === 'fr' 
        ? "Les tâches administratives et répétitives vous empêchent de vous concentrer sur votre cœur de métier et le développement de votre entreprise."
        : "Administrative and repetitive tasks prevent you from focusing on your core business and growing your company."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-red-400" />,
      title: language === 'fr' ? "Risques d'erreurs humaines" : "Risk of human errors",
      description: language === 'fr'
        ? "Les processus manuels augmentent les risques d'erreurs coûteuses qui peuvent impacter votre réputation et votre chiffre d'affaires."
        : "Manual processes increase the risk of costly errors that can impact your reputation and revenue."
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-red-400" />,
      title: language === 'fr' ? "Opportunités manquées" : "Missed opportunities",
      description: language === 'fr'
        ? "Sans suivi client automatisé, vous perdez des ventes potentielles et risquez d'oublier des suivis importants."
        : "Without automated customer follow-up, you lose potential sales and risk forgetting important follow-ups."
    },
    {
      icon: <PanelLeftClose className="h-10 w-10 text-red-400" />,
      title: language === 'fr' ? "Outils complexes" : "Complex tools",
      description: language === 'fr'
        ? "Les solutions existantes exigent souvent de changer complètement vos outils ou d'investir dans des formations coûteuses."
        : "Existing solutions often require completely changing your tools or investing in expensive training."
    }
  ];

  return (
    <section id="problems" className="bg-aiMediumGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {language === 'fr' 
              ? "Ces défis vous sont-ils familiers ?" 
              : "Do these challenges sound familiar?"}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {language === 'fr'
              ? "La plupart des petites entreprises et indépendants sont confrontés à ces obstacles quotidiens."
              : "Most small businesses and freelancers face these daily obstacles."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-panel p-6 flex flex-col animate-on-scroll stagger-delay-${index % 2 + 1}"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-red-400/10 mr-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              </div>
              
              <p className="text-white/70">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
