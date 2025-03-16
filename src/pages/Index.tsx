
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import { LanguageProvider } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { useLanguage } from '@/context/LanguageContext';

const IndexContent = () => {
  const { t } = useLanguage();
  useScrollAnimation();
  
  useEffect(() => {
    // Update meta tags based on selected language
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen bg-aiDark overflow-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <UseCasesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
