import React from 'react';
import Icon from '@/components/ui/icon';

const KeyFeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ключевые особенности дебетовых карт
          </h2>
          <p className="text-xl text-gray-600">
            Важные функции и преимущества современных дебетовых карт
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="CreditCard" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Бесплатная дебетовая карта
            </h3>
            <p className="text-gray-700">
              Большинство современных банков предлагают карты без платы за обслуживание при соблюдении определенных условий.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Percent" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Кэшбэк программы
            </h3>
            <p className="text-gray-700">
              Получайте возврат средств за покупки в различных категориях: рестораны, АЗС, супермаркеты.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="TrendingUp" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Процент на остаток
            </h3>
            <p className="text-gray-700">
              Многие дебетовые карты предлагают начисление процентов на остаток средств на счете от 3% до 8% годовых.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Truck" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Доставка на дом
            </h3>
            <p className="text-gray-700">
              Заказать дебетовую карту с доставкой на дом особенно актуально для занятых людей и жителей удаленных районов.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Smartphone" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Мобильное приложение
            </h3>
            <p className="text-gray-700">
              Удобные мобильные приложения для управления картой и контроля расходов 24/7.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="MapPin" className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Широкая сеть банкоматов
            </h3>
            <p className="text-gray-700">
              Снимайте наличные без комиссии в банкоматах партнерской сети по всей России.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;