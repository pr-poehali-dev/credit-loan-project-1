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

const Mortgage = () => {
  useEffect(() => {
    document.title = 'Взять ипотеку в 2025: условия банков без первоначального взноса';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Как взять ипотеку в 2025 году: сравните условия банков, ставки от 6%, возможность без первоначального взноса. Семейная ипотека на новостройки и вторичку.');
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-blue-50"
              asChild
            >
              <a href="/">
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад к списку кредитов
              </a>
            </Button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pb-16">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full mb-6">
              <Icon name="Home" size={24} />
              <span className="font-semibold">Ипотека 2025</span>
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