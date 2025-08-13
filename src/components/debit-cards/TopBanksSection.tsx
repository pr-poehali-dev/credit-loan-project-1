import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Альфа-Банк */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Популярный
            </div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Альфа-Банк</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Лидер по популярности поисковых запросов. Дебетовая карта Альфа-Банка привлекает клиентов бесплатным обслуживанием и выгодными условиями кэшбэка.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Бесплатная дебетовая карта навсегда
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Доставка карты на дом
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Кэшбэк до 33% в категориях
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Процент на остаток до 7%
              </div>
            </div>
            <Button className="w-full bg-red-500 hover:bg-red-600">
              Оформить карту
            </Button>
          </div>

          {/* ВТБ */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">ВТБ</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Дебетовая карта ВТБ занимает второе место по популярности среди пользователей. Банк предлагает надежные условия обслуживания.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Карта с бесплатным обслуживанием
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Онлайн-оформление за 5 минут
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Кэшбэк в популярных категориях
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Широкая сеть банкоматов
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Оформить карту
            </Button>
          </div>

          {/* Тинькофф */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Тинькофф</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Дебетовая карта Тинькофф известна инновационными решениями и удобным мобильным приложением.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                100% онлайн-банк
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Бесплатная доставка дебетовой карты
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Процент на остаток
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Развитая программа лояльности
              </div>
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              Оформить карту
            </Button>
          </div>

          {/* Сбербанк */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Сбербанк</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Дебетовая карта Сбербанка остается классическим выбором для консервативных клиентов.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Самая большая сеть отделений
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Надежность и стабильность
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Различные типы дебетовых карт
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Интеграция с госуслугами
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Оформить карту
            </Button>
          </div>

          {/* ОЗОН Банк */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">ОЗОН Банк</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Растущая популярность дебетовой карты ОЗОН связана с интеграцией с экосистемой интернет-торговли.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Кэшбэк за покупки в ОЗОН
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Быстрое оформление онлайн
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Интеграция с маркетплейсом
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Современный дизайн карты
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Оформить карту
            </Button>
          </div>

          {/* МТС Банк */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">МТС Банк</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Дебетовая карта МТС Банка предлагает уникальные возможности для клиентов оператора связи.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Кэшбэк за мобильную связь
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Интеграция с услугами МТС
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Выгодные тарифы
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Бесплатное обслуживание карты
              </div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Оформить карту
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanksSection;