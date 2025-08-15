import React from 'react';
import { Card } from '@/components/ui/card';

const MicroloansSteps = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Оформить микрозайм онлайн: пошаговая инструкция
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          <Card className="p-6 sm:p-8 border-l-4 border-blue-500 bg-blue-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Подготовка документов
            </h3>
            <p className="text-gray-700">
              Приготовьте паспорт, банковскую карту и мобильный телефон. Некоторые МФО могут потребовать СНИЛС или второй документ.
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 border-l-4 border-green-500 bg-green-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Выбор МФО и условий
            </h3>
            <p className="text-gray-700">
              Сравните предложения различных микрофинансовых организаций. Обратите внимание на процентную ставку, срок займа и дополнительные комиссии.
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 border-l-4 border-orange-500 bg-orange-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Заполнение заявки
            </h3>
            <p className="text-gray-700">
              Укажите точные персональные данные, контактную информацию и желаемую сумму займа. Ошибки в анкете могут стать причиной отказа.
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 border-l-4 border-purple-500 bg-purple-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Верификация
            </h3>
            <p className="text-gray-700">
              Подтвердите номер телефона по SMS и при необходимости пройдите видеозвонок с сотрудником МФО для подтверждения личности.
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 border-l-4 border-red-500 bg-red-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Получение средств
            </h3>
            <p className="text-gray-700">
              После одобрения подпишите договор и получите деньги на карту. Обычно средства поступают в течение 5-15 минут.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MicroloansSteps;