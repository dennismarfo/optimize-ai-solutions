
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Send, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      // Pour utiliser EmailJS, vous devez créer un compte sur emailjs.com et configurer un template
      // Remplacez ces IDs par vos propres IDs EmailJS
      const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'gmail'
      const templateId = 'YOUR_TEMPLATE_ID'; // Créez un template sur EmailJS
      const userId = 'YOUR_USER_ID'; // Votre clé publique EmailJS
      
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, userId);
      
      toast({
        title: t('contact.success'),
        description: `${t('contact.successDesc')} ${formData.name}!`,
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.error'),
        description: t('contact.errorDesc'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-aiMediumGray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle animate-on-scroll">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-panel p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                  {t('contact.name')}
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-aiDarkGray/50 text-white border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-aiBlue/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                  {t('contact.email')}
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-aiDarkGray/50 text-white border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-aiBlue/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                  {t('contact.message')}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-aiDarkGray/50 text-white border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-aiBlue/50"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-aiBlue hover:bg-aiBlueLight text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.submit')}
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass-panel p-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {t('contact.or')}
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-aiDarkGray hover:bg-aiLightGray text-white font-medium p-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Calendar className="mr-3 h-5 w-5 text-aiBlue" />
                  {t('contact.book')}
                </a>
                
                <a 
                  href="https://wa.me/14506260481" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white font-medium p-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  {t('contact.chat')}
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-white/60 text-sm mb-1">info@optiai-solutions.com</p>
                <p className="text-white/60 text-sm">+1 (450) 626-0481</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
