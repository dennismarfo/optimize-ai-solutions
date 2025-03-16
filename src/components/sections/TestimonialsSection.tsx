
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.business'),
      content: t('testimonials.client1.quote'),
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.business'),
      content: t('testimonials.client2.quote'),
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.business'),
      content: t('testimonials.client3.quote'),
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-aiDark py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('testimonials.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="glass-panel p-8 md:p-10 relative animate-on-scroll">
            <div className="absolute -top-6 left-10 text-aiBlue">
              <Quote className="h-12 w-12 rotate-180" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-aiBlue blue-glow-sm"
                />
              </div>
              
              <div>
                <p className="text-white/90 italic mb-6">"{testimonials[currentIndex].content}"</p>
                <div>
                  <p className="text-white font-medium">{testimonials[currentIndex].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-aiMediumGray hover:bg-aiLightGray transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-aiBlue w-6' 
                      : 'bg-aiLightGray'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-aiMediumGray hover:bg-aiLightGray transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
