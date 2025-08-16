import { Helmet } from 'react-helmet-async';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/credit-cards/HeroSection';
import TopBanksSection from '@/components/credit-cards/TopBanksSection';
import BankOffersSection from '@/components/credit-cards/BankOffersSection';
import ApplicationGuideSection from '@/components/credit-cards/ApplicationGuideSection';
import NoRejectionSection from '@/components/credit-cards/NoRejectionSection';
import InterestRatesSection from '@/components/credit-cards/InterestRatesSection';
import TipsSection from '@/components/credit-cards/TipsSection';
import ConclusionSection from '@/components/credit-cards/ConclusionSection';

const CreditCards = () => {
  return (
    <>
      <Helmet>
        <title>Кредитные карты 2025: оформить онлайн без отказа с плохой кредитной историей</title>
        <meta name="description" content="Кредитные карты банков 2025 ★ Оформить онлайн без отказа ★ С плохой кредитной историей ★ Без процентов до 365 дней ★ Сравнение условий Сбербанк, Альфа-Банк, Т - Банк ★ Займы на карту срочно" />
        <meta name="keywords" content="кредитные карты, оформить кредитную карту, кредитная карта онлайн, без отказа, плохая кредитная история, льготный период, без процентов, сбербанк, альфа банк, тинькофф банк, кредитные карты 2025" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Одобряем - финансовые решения" />
        <meta property="og:title" content="Кредитные карты 2025: оформить онлайн без отказа" />
        <meta property="og:description" content="Лучшие кредитные карты банков России. Оформление онлайн без отказа, даже с плохой кредитной историей. Льготные периоды до 365 дней." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poehali.dev/credit-cards" />
        <meta property="og:image" content="https://cdn.poehali.dev/files/069de826-3508-4ea6-a26e-4791a96facac.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Кредитные карты 2025: оформить онлайн без отказа" />
        <meta name="twitter:description" content="Лучшие кредитные карты банков России с льготными периодами до 365 дней" />
        <meta name="twitter:image" content="https://cdn.poehali.dev/files/069de826-3508-4ea6-a26e-4791a96facac.jpg" />
        <link rel="canonical" href="https://poehali.dev/credit-cards" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Кредитные карты 2025",
            "description": "Полное руководство по выбору и оформлению кредитных карт в 2025 году",
            "url": "https://poehali.dev/credit-cards",
            "mainEntity": {
              "@type": "Article",
              "headline": "Кредитные карты 2025: полное руководство по выбору и оформлению",
              "author": {
                "@type": "Organization",
                "name": "Одобряем"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Одобряем",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://poehali.dev/logo.png"
                }
              },
              "datePublished": "2025-01-01",
              "dateModified": "2025-08-16",
              "image": "https://cdn.poehali.dev/files/069de826-3508-4ea6-a26e-4791a96facac.jpg"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          <HeroSection />
          <TopBanksSection />
          <BankOffersSection />
          <ApplicationGuideSection />
          <NoRejectionSection />
          <InterestRatesSection />
          <TipsSection />
          <ConclusionSection />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CreditCards;