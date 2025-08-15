import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import MicroloansHero from '@/components/microloans/MicroloansHero';
import MicroloansIntro from '@/components/microloans/MicroloansIntro';
import MicroloansHowTo from '@/components/microloans/MicroloansHowTo';
import MicroloansZeroPercent from '@/components/microloans/MicroloansZeroPercent';
import MicroloansBadCredit from '@/components/microloans/MicroloansBadCredit';
import MicroloansSteps from '@/components/microloans/MicroloansSteps';
import MicroloansSafety from '@/components/microloans/MicroloansSafety';
import MicroloansConclusion from '@/components/microloans/MicroloansConclusion';

const MicroloansPage = () => {
  return (
    <>
      <SEOHead
        title="Микрозаймы онлайн на карту: как взять без процентов и без отказа в 2025"
        description="Получите микрозайм до 100 000 рублей за 15 минут. Первый займ без процентов. Оформление онлайн без справок о доходах. Одобрение даже с плохой кредитной историей."
        keywords="микрозайм онлайн, займ на карту, микрозайм без процентов, займ без отказа, микрозайм с плохой кредитной историей, быстрый займ"
        url="/microloans"
        type="website"
      />
      <Header />
      
      <div className="min-h-screen bg-white">
        <MicroloansHero />
        <MicroloansIntro />
        <MicroloansHowTo />
        <MicroloansZeroPercent />
        <MicroloansBadCredit />
        <MicroloansSteps />
        <MicroloansSafety />
      </div>
      
      <MicroloansConclusion />
      <Footer />
    </>
  );
};

export default MicroloansPage;