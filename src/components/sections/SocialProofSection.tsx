import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Quote, Users } from 'lucide-react';

export const SocialProofSection = () => {
  const { t } = useLanguage();
  
  // Generic client logos (can be replaced with real ones later)
  const clientLogos = [
    { name: 'QuickBooks', width: 'w-32' },
    { name: 'Sage', width: 'w-28' },
    { name: 'Excel', width: 'w-24' },
    { name: 'Acomba', width: 'w-32' },
  ];

  const testimonials = [
    {
      name: t('socialProof.testimonials.0.name'),
      position: t('socialProof.testimonials.0.position'),
      company: t('socialProof.testimonials.0.company'),
      quote: t('socialProof.testimonials.0.quote'),
    },
    {
      name: t('socialProof.testimonials.1.name'),
      position: t('socialProof.testimonials.1.position'),
      company: t('socialProof.testimonials.1.company'),
      quote: t('socialProof.testimonials.1.quote'),
    },
    {
      name: t('socialProof.testimonials.2.name'),
      position: t('socialProof.testimonials.2.position'),
      company: t('socialProof.testimonials.2.company'),
      quote: t('socialProof.testimonials.2.quote'),
    },
  ];

  return (
    <section id="social-proof" className="bg-aiDark py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('socialProof.subtitle')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 animate-on-scroll">
            <Users className="h-5 w-5 text-aiBlue" />
            <p className="section-subtitle">
              {t('socialProof.title')}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-panel p-6 relative animate-on-scroll card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-aiBlue/30 mb-4" />
              <p className="text-white/90 italic mb-6 text-sm">"{testimonial.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.position}</p>
                <p className="text-aiBlue text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="animate-on-scroll">
          <p className="text-center text-white/60 text-sm mb-8">Intégrations natives avec vos outils</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className={`${logo.width} h-12 bg-white/10 rounded-lg flex items-center justify-center`}
              >
                <span className="text-white/60 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
