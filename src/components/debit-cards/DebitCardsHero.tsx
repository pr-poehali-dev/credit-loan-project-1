import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DebitCardsHero = () => {
  return (
    <section className="bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Кнопка "Назад к кредитам" */}
        <div className="mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к кредитам
          </a>
        </div>

        {/* Иконка и заголовок */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <Icon name="Wallet" size={32} className="text-white" />
          </div>
          <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">💳 Дебетовые карты </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Дебетовые карты банков 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-600">
            Выбор дебетовой карты в 2025 году стал особенно актуальным вопросом для российских потребителей. Современные банки предлагают широкий спектр дебетовых карт с различными условиями обслуживания, программами кэшбэка и дополнительными услугами.
          </p>
          <Button 
            asChild 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold mb-8"
          >
            <a href="#banks">Выбрать дебетовую карту</a>
          </Button>
        </div>

        {/* Обложка с изображением */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://cdn.poehali.dev/files/2873978a-b912-4d14-ae37-712ab991e042.jpg"
            alt="Дебетовые карты Альфа-Банк и Тинькофф"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DebitCardsHero;