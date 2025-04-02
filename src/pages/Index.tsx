
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
  const { t, language } = useLanguage();
  useScrollAnimation();
  
  useEffect(() => {
    // Update meta tags based on selected language
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('meta.title'));
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  // Create Schema.org JSON-LD data for better search engine understanding
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OptiAI-Solutions",
      "url": "https://optiai-solutions.com",
      "logo": "https://optiai-solutions.com/logo.png",
      "description": t('meta.description'),
      "email": "info@optiai-solutions.com",
      "telephone": "+1 (450) 626-0481",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA"
      },
      "sameAs": [
        "https://twitter.com/optiaisolutions",
        "https://linkedin.com/company/optiaisolutions",
        "https://facebook.com/optiaisolutions"
      ],
      "offers": {
        "@type": "Offer",
        "name": language === 'fr' ? "Services d'Automatisation IA" : "AI Automation Services",
        "description": language === 'fr' ? "Solutions IA personnalisées pour l'optimisation des processus d'entreprise" : "Custom AI solutions for business process optimization"
      }
    };

    // Add JSON-LD script to head
    let script = document.querySelector('#schema-org-data');
    if (script) {
      document.head.removeChild(script);
    }
    
    script = document.createElement('script');
    script.id = 'schema-org-data';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
    return () => {
      const scriptElement = document.querySelector('#schema-org-data');
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, [t, language]);

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
