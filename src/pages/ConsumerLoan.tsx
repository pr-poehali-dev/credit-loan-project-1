import React from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import WhatIsConsumerCredit from '@/components/consumer-loan/WhatIsConsumerCredit';
import InterestRatesSection from '@/components/consumer-loan/InterestRatesSection';
import CalculatorSection from '@/components/consumer-loan/CalculatorSection';
import HowToChooseSection from '@/components/consumer-loan/HowToChooseSection';
import RequirementsSection from '@/components/consumer-loan/RequirementsSection';
import CashLoanSection from '@/components/consumer-loan/CashLoanSection';
import BankComparisonSection from '@/components/consumer-loan/BankComparisonSection';
import FAQSection from '@/components/consumer-loan/FAQSection';
import ConclusionSection from '@/components/consumer-loan/ConclusionSection';
import Breadcrumbs from '@/components/ui/breadcrumbs';

const ConsumerLoan = () => {
  useEffect(() => {
    // SEO Title
    document.title = 'Потребительский кредит 2025: ставки банков от 4.5%, калькулятор, условия';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Потребительские кредиты в банках 2025: сравните ставки от 4.5%, рассчитайте платеж онлайн. Выгодные условия в Сбербанке, ВТБ, Альфа-Банке. Одобрение за 5 минут!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Потребительские кредиты в банках 2025: сравните ставки от 4.5%, рассчитайте платеж онлайн. Выгодные условия в Сбербанке, ВТБ, Альфа-Банке. Одобрение за 5 минут!';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Keywords meta
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.getElementsByTagName('head')[0].appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'потребительский кредит, кредит наличными, ставки банков 2025, калькулятор кредита, сбербанк, втб, альфа-банк, оформить кредит онлайн');
    
    // Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.getElementsByTagName('head')[0].appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Потребительский кредит 2025: ставки от 4.5% | Одобрение за 5 минут');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.getElementsByTagName('head')[0].appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Сравните условия потребительских кредитов от ведущих банков России. Калькулятор, требования, оформление онлайн.');
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.getElementsByTagName('head')[0].appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.getElementsByTagName('head')[0].appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/consumer-loan');
    
    // Structured Data
    let structuredData = document.querySelector('#structured-data-consumer-loan');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data-consumer-loan';
      structuredData.type = 'application/ld+json';
      document.getElementsByTagName('head')[0].appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Потребительский кредит",
      "description": "Потребительские кредиты от ведущих банков России с выгодными условиями",
      "url": window.location.href,
      "serviceType": "Потребительское кредитование",
      "provider": {
        "@type": "Organization",
        "name": "ОДОБРЯЕМ"
      },
      "offers": {
        "@type": "Offer",
        "description": "Потребительский кредит от 4.5% годовых",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "4.5",
          "priceCurrency": "RUB",
          "unitText": "% годовых"
        }
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Потребительский кредит" }
              ]}
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pb-16">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6">
              <Icon name="CreditCard" size={24} />
              <span className="font-semibold">Потребительский кредит </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Потребительский кредит 2025: полный гид по выбору лучших предложений банков
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Потребительский кредит остается одним из самых востребованных финансовых продуктов в России. В 2025 году банки предлагают разнообразные условия кредитования, и важно понимать, как выбрать наиболее выгодное предложение для ваших потребностей.
            </p>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
              <img 
                src="/img/bc9fa1c5-c055-427f-9f26-f8b3297cbc89.jpg" 
                alt="Уверенный человек с кредитной картой - потребительский кредит 2025" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm md:text-base font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  💳 Получите кредит на любые цели с выгодными условиями
                </p>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <WhatIsConsumerCredit />
            <InterestRatesSection />
            <CalculatorSection />
            <HowToChooseSection />
            <RequirementsSection />
            <CashLoanSection />
            <BankComparisonSection />
            <FAQSection />
            <ConclusionSection />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default ConsumerLoan;