import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Готовы заказать дебетовую карту?
        </h2>
        <p className="text-xl mb-8">
          Сравните предложения банков и выберите карту с лучшими условиями для ваших потребностей
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
          Выбрать дебетовую карту
        </Button>
      </div>
    </section>
  );
};

export default CTASection;