
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const NewContactSection = () => {
  const { t } = useLanguage();
  const { country } = useCountry();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi d'email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h.",
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-aiMediumGray py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-panel p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-aiDark/50 text-white border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-aiBlue/50 focus:border-aiBlue/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-aiDark/50 text-white border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-aiBlue/50 focus:border-aiBlue/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.company')}
                </label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-aiDark/50 text-white border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-aiBlue/50 focus:border-aiBlue/50"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-aiDark/50 text-white border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-aiBlue/50 focus:border-aiBlue/50"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-aiBlue hover:bg-aiBlueLight text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    {t('contact.submit')}
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Informations de contact */}
          <div className="animate-on-scroll space-y-8">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contactez-nous directement</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://calendly.com/dennismarfo/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-aiBlue hover:bg-aiBlueLight rounded-lg transition-colors group"
                >
                  <Calendar className="h-6 w-6 text-white mr-4" />
                  <div>
                    <div className="font-medium text-white">{t('contact.book')}</div>
                    <div className="text-white/70 text-sm">Consultation gratuite de 30 min</div>
                  </div>
                </a>
                
                <a 
                  href="#contact"
                  className="flex items-center p-4 bg-aiDark hover:bg-aiLightGray rounded-lg transition-colors group"
                >
                  <Phone className="h-6 w-6 text-aiBlue mr-4" />
                  <div>
                    <div className="font-medium text-white">{t('contact.quote')}</div>
                    <div className="text-white/70 text-sm">Devis personnalisé sous 24h</div>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center text-white/70">
                    <Phone className="h-5 w-5 mr-3 text-aiBlue" />
                    <span>{t('contact.phone')}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Mail className="h-5 w-5 mr-3 text-aiBlue" />
                    <span>{t('contact.emailContact')}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin className="h-5 w-5 mr-3 text-aiBlue" />
                    <span>{t('contact.address')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA final */}
        <div className="text-center mt-16">
          <a 
            href="https://calendly.com/dennismarfo/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aiBlue hover:bg-aiBlueLight text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow font-semibold text-lg"
          >
            <Calendar className="mr-3 h-6 w-6" aria-hidden="true" />
            {t('contact.book')}
          </a>
        </div>
      </div>
    </section>
  );
};
