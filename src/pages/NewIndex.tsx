
import React, { useEffect } from 'react';
import { NewHeader } from '@/components/NewHeader';
import { NewHeroSection } from '@/components/sections/NewHeroSection';
import { NewBenefitsSection } from '@/components/sections/NewBenefitsSection';
import { NewServicesSection } from '@/components/sections/NewServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { NewContactSection } from '@/components/sections/NewContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import { CountryProvider } from '@/context/CountryContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { useLanguage } from '@/context/LanguageContext';
import { useCountry } from '@/context/CountryContext';

const IndexContent = () => {
  const { t } = useLanguage();
  const { country, locale } = useCountry();
  useScrollAnimation();
  
  useEffect(() => {
    // Update meta tags based on selected country
    document.title = t('meta.title');
    document.documentElement.lang = locale;
    
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
  }, [t, locale]);

  // Create enhanced Schema.org JSON-LD data for better search engine understanding
  useEffect(() => {
    const address = country === 'canada' 
      ? {
          "@type": "PostalAddress",
          "addressLocality": "Montréal",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      : {
          "@type": "PostalAddress", 
          "addressLocality": "Paris",
          "addressCountry": "FR"
        };

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "OptiAI-Solutions",
      "url": "https://optiai-solutions.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://optiai-solutions.com/logo.png",
        "width": "180",
        "height": "60"
      },
      "image": "https://optiai-solutions.com/og-image.png",
      "description": t('meta.description'),
      "email": "contact@optiai-solutions.com",
      "telephone": country === 'canada' ? "+1 (450) 626-0481" : "+33 1 23 45 67 89",
      "address": address,
      "sameAs": [
        "https://twitter.com/optiaisolutions",
        "https://linkedin.com/company/optiaisolutions"
      ],
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-17:00",
      "offers": {
        "@type": "Offer",
        "name": "Services d'Automatisation Comptable IA",
        "description": "Solutions IA personnalisées pour l'automatisation des processus comptables"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://optiai-solutions.com"
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
  }, [t, country]);

  return (
    <div className="flex flex-col min-h-screen bg-aiDark overflow-hidden">
      <NewHeader />
      
      <main>
        <NewHeroSection />
        <NewBenefitsSection />
        <NewServicesSection />
        <ProcessSection />
        <CaseStudySection />
        <NewContactSection />
      </main>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

const NewIndex = () => {
  return (
    <CountryProvider>
      <LanguageProvider>
        <IndexContent />
      </LanguageProvider>
    </CountryProvider>
  );
};

export default NewIndex;
