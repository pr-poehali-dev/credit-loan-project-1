import React from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import MortgageRequirements from '@/components/mortgage/MortgageRequirements';
import NoDownPaymentSection from '@/components/mortgage/NoDownPaymentSection';
import FamilyMortgageSection from '@/components/mortgage/FamilyMortgageSection';
import BankComparisonSection from '@/components/mortgage/BankComparisonSection';
import StepByStepSection from '@/components/mortgage/StepByStepSection';
import ConclusionSection from '@/components/mortgage/ConclusionSection';
import Breadcrumbs from '@/components/ui/breadcrumbs';

const Mortgage = () => {
  useEffect(() => {
    // SEO Title
    document.title = 'Ипотека 2025: ставки банков от 6%, семейная ипотека, без первоначального взноса';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ипотечные кредиты 2025: ставки от 6% годовых, семейная и льготная ипотека, без первого взноса. Сбербанк, ВТБ, Газпромбанк. Новостройки и вторичка. Калькулятор, требования, оформление.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ипотечные кредиты 2025: ставки от 6% годовых, семейная и льготная ипотека, без первого взноса. Сбербанк, ВТБ, Газпромбанк. Новостройки и вторичка. Калькулятор, требования, оформление.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Keywords meta
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.getElementsByTagName('head')[0].appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'ипотека 2025, ипотечный кредит, семейная ипотека, льготная ипотека, ставки банков, сбербанк ипотека, втб ипотека, газпромбанк, новостройки, вторичка, калькулятор ипотеки, оформить ипотеку онлайн');
    
    // Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.getElementsByTagName('head')[0].appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Ипотека 2025: ставки от 6% | Семейная ипотека, льготные программы');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.getElementsByTagName('head')[0].appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Выгодные условия ипотечного кредитования от ведущих банков России. Семейная ипотека, льготные программы, новостройки и вторичное жилье.');
    
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
    canonical.setAttribute('href', window.location.origin + '/mortgage');
    
    // Structured Data
    let structuredData = document.querySelector('#structured-data-mortgage');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data-mortgage';
      structuredData.type = 'application/ld+json';
      document.getElementsByTagName('head')[0].appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Ипотечное кредитование",
      "description": "Ипотечные кредиты от ведущих банков России с выгодными условиями для покупки жилья",
      "url": window.location.href,
      "serviceType": "Ипотечное кредитование",
      "provider": {
        "@type": "Organization",
        "name": "ОДОБРЯЕМ"
      },
      "offers": {
        "@type": "Offer",
        "description": "Ипотечный кредит от 6% годовых",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "6",
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
                { label: "Ипотека" }
              ]}
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pb-16">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full mb-6">
              <Icon name="Home" size={24} />
              <span className="font-semibold">Ипотека </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Взять ипотеку в 2025 году: полное руководство по выбору и оформлению
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Ипотечное кредитование остается основным способом приобретения недвижимости для большинства россиян. В 2025 году условия ипотеки претерпели изменения, появились новые программы поддержки, а процентные ставки стабилизировались на более привлекательном уровне. Разберем подробно, как взять ипотеку выгодно и какие возможности доступны заемщикам.
            </p>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
              <img 
                src="/img/175c8c2b-bd6e-4c26-9f35-4f675cab74a0.jpg" 
                alt="Красивый современный дом - ипотека 2025" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm md:text-base font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  💡 Воплотите мечту о собственном доме с выгодной ипотекой
                </p>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MortgageRequirements />
            <NoDownPaymentSection />
            <FamilyMortgageSection />
            <BankComparisonSection />
            <StepByStepSection />
            <ConclusionSection />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Mortgage;