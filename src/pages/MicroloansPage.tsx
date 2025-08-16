import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import MicroloansHero from '@/components/microloans/MicroloansHero';
import MicroloansIntro from '@/components/microloans/MicroloansIntro';
import MicroloansHowTo from '@/components/microloans/MicroloansHowTo';
import MicroloansPartners from '@/components/microloans/MicroloansPartners';
import MicroloansZeroPercent from '@/components/microloans/MicroloansZeroPercent';
import MicroloansBadCredit from '@/components/microloans/MicroloansBadCredit';
import MicroloansSteps from '@/components/microloans/MicroloansSteps';
import MicroloansSafety from '@/components/microloans/MicroloansSafety';
import MicroloansConclusion from '@/components/microloans/MicroloansConclusion';
import MicroloansFAQ from '@/components/microloans/MicroloansFAQ';
import MicroloansInternalLinks from '@/components/microloans/MicroloansInternalLinks';
import MicroloansCTA from '@/components/microloans/MicroloansCTA';

const MicroloansPage = () => {
  return (
    <>
      <SEOHead
        title="Микрозаймы онлайн на карту: как взять без процентов и без отказа в 2025"
        description="✅ Микрозаймы до 100 000₽ за 15 минут! Первый займ БЕСПЛАТНО 0%. Одобрение без справок и с плохой КИ. ⭐ Рейтинг лучших МФО 2025 года. Безопасно и быстро!"
        keywords="микрозайм онлайн, займ на карту, микрозайм без процентов, займ без отказа, микрозайм с плохой кредитной историей, быстрый займ, МФО 2025, займ без справок, микрофинансирование, деньги срочно, займ за 15 минут, первый займ бесплатно, микрозайм круглосуточно, займ без проверок"
        url="/microloans"
        type="website"
        section="Микрозаймы"
        tags={["микрозаймы", "МФО", "займы онлайн", "быстрые деньги", "финансы"]}
      />
      <Header />
      
      <div className="min-h-screen bg-white">
        <MicroloansHero />
        <MicroloansIntro />
        <MicroloansHowTo />
        <MicroloansPartners />
        <MicroloansZeroPercent />
        <MicroloansBadCredit />
        <MicroloansSteps />
        <MicroloansSafety />
      </div>
      
      <MicroloansFAQ />
      <MicroloansInternalLinks />
      <MicroloansCTA />
      <MicroloansConclusion />
      <Footer />
    </>
  );
};

export default MicroloansPage;