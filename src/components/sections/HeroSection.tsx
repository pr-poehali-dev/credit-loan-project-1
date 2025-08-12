import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ОДОБРЯЕМ
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Эксклюзивные кредитные программы для требовательных клиентов. 
            Индивидуальный подход, минимальные ставки, максимальный комфорт.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto max-w-sm"
              asChild
            >
              <a href="#banks">
                <Icon name="FileText" className="mr-2" size={18} />
                Подать заявку
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main H1 Title */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Где и как взять кредит на выгодных условиях
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Получите кредит от ведущих банков России. Мгновенное одобрение, минимальные ставки.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;