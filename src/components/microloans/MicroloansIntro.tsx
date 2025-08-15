import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansIntro = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Что такое микрозаймы и микрозаемы
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              <strong>Микрозайм (микрозаем)</strong> — это небольшая денежная сумма от 1 000 до 100 000 рублей, которую можно взять в <strong>микрофинансовой организации (МФО)</strong> на срок от 7 до 365 дней. Основные преимущества микрозаймов:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <Icon name="Zap" size={20} className="text-orange-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Быстрое оформление онлайн за 15 минут</span>
              </li>
              <li className="flex items-center">
                <Icon name="FileText" size={20} className="text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Минимальный пакет документов (только паспорт)</span>
              </li>
              <li className="flex items-center">
                <Icon name="CreditCard" size={20} className="text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Получение средств на карту круглосуточно</span>
              </li>
              <li className="flex items-center">
                <Icon name="Shield" size={20} className="text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Одобрение без справок о доходах и поручителей</span>
              </li>
            </ul>
          </div>
          
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ключевые характеристики</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Сумма:</span>
                <span className="text-gray-900 font-semibold">от 1 000 до 100 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Срок:</span>
                <span className="text-gray-900 font-semibold">от 7 до 365 дней</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Процентная ставка:</span>
                <span className="text-gray-900 font-semibold">от 0% до 2% в день</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">Время рассмотрения:</span>
                <span className="text-gray-900 font-semibold">5-15 минут</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MicroloansIntro;