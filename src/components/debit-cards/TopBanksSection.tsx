import React from 'react';
import BanksGrid from './BanksGrid';

const TopBanksSection = () => {
  return (
    <section id="banks" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Топ банков для заказа дебетовой карты
          </h2>
          <p className="text-xl text-gray-600">
            Сравните лучшие предложения от ведущих банков России
          </p>
        </div>

        <BanksGrid />
      </div>
    </section>
  );
};

export default TopBanksSection;