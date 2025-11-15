
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';
import { TrendingDown, TrendingUp, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '@/lib/translations';

export const CaseStudySection = () => {
  const { language } = useLanguage();
  const { country } = useCountry();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get cases from translations based on current country
  const cases = translations[country as keyof typeof translations].caseStudy.cases;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [cases.length]);

  const nextCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];
  
  return (
    <section id="case" className="bg-aiDark py-24 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {translations[country as keyof typeof translations].caseStudy.title}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {translations[country as keyof typeof translations].caseStudy.subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel p-8 mb-8 animate-on-scroll transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">{currentCase.title}</h3>
            <p className="text-white/80 text-lg mb-8 text-center">
              {currentCase.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="rounded-full p-4 bg-green-500/20 w-fit mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">{currentCase.result1}</h4>
              </div>
              
              <div className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="rounded-full p-4 bg-aiBlue/20 w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-aiBlue" />
                </div>
                <h4 className="text-2xl font-bold text-aiBlue mb-2">{currentCase.result2}</h4>
              </div>
              
              <div className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="rounded-full p-4 bg-yellow-500/20 w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-400" />
                </div>
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">{currentCase.result3}</h4>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevCase}
              className="p-2 rounded-full bg-aiMediumGray hover:bg-aiLightGray transition-colors"
              aria-label="Cas précédent"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-aiBlue w-8' 
                      : 'bg-aiLightGray w-2'
                  }`}
                  aria-label={`Aller au cas ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextCase}
              className="p-2 rounded-full bg-aiMediumGray hover:bg-aiLightGray transition-colors"
              aria-label="Cas suivant"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
