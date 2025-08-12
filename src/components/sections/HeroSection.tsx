import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative py-12 md:py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/5324e95e-96c9-434a-b16f-201d569fbee1.jpg" 
            alt="Современный офисный центр - финансовые услуги" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              ОДОБРЯЕМ
            </span>
          </div>
          <p className="text-lg md:text-xl text-blue-50 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
            Эксклюзивные кредитные программы для требовательных клиентов. 
            Индивидуальный подход, минимальные ставки, максимальный комфорт.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-blue-50 text-blue-900 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto max-w-sm shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
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