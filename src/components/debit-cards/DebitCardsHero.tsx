import React from 'react';
import { Button } from '@/components/ui/button';

const DebitCardsHero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Дебетовые карты банков 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Выбор дебетовой карты в 2025 году стал особенно актуальным вопросом для российских потребителей. Современные банки предлагают широкий спектр дебетовых карт с различными условиями обслуживания, программами кэшбэка и дополнительными услугами.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
          Выбрать дебетовую карту
        </Button>
      </div>
    </section>
  );
};

export default DebitCardsHero;