import React from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import PartnerBanks from '@/components/sections/PartnerBanks';
import LoanTypes from '@/components/sections/LoanTypes';
import SeoContent from '@/components/sections/SeoContent';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
      <PartnerBanks />
      <LoanTypes />
      <SeoContent />
      <Footer />
    </div>
  );
};

export default Index;