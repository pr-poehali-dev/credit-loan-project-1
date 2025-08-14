import React, { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import DebitCardsHero from '@/components/debit-cards/DebitCardsHero';
import PopularitySection from '@/components/debit-cards/PopularitySection';
import TopBanksSection from '@/components/debit-cards/TopBanksSection';
import ComparisonTableSection from '@/components/debit-cards/ComparisonTableSection';
import HowToOrderSteps from '@/components/debit-cards/HowToOrderSteps';
import KeyFeaturesSection from '@/components/debit-cards/KeyFeaturesSection';
import ConclusionSection from '@/components/debit-cards/ConclusionSection';
import CTASection from '@/components/debit-cards/CTASection';

const DebitCardsPage = () => {
  useEffect(() => {
    // SEO Title
    document.title = 'Заказать Дебетовую карту : сравнение условий и выбор лучшей карты';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Keywords meta
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.getElementsByTagName('head')[0].appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'дебетовая карта, заказать дебетовую карту, бесплатная дебетовая карта, дебетовая карта онлайн, кэшбэк карта, банки россии, альфа банк, втб, тинькофф, сбербанк, отп банк, мтс банк');
    
    // Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.getElementsByTagName('head')[0].appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Заказать Дебетовую карту : сравнение условий и выбор лучшей карты');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.getElementsByTagName('head')[0].appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.');

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.getElementsByTagName('head')[0].appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.getElementsByTagName('head')[0].appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/debit-cards');

    // JSON-LD structured data
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Дебетовые карты банков 2025",
      "description": "Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.",
      "provider": {
        "@type": "Organization", 
        "name": "ОДОБРЯЕМ"
      }
    });
    document.getElementsByTagName('head')[0].appendChild(jsonLdScript);

    // Cleanup function
    return () => {
      if (jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DebitCardsHero />
      <PopularitySection />
      <TopBanksSection />
      <ComparisonTableSection />
      <HowToOrderSteps />
      <KeyFeaturesSection />
      <ConclusionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default DebitCardsPage;