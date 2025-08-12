import React from 'react';
import Icon from '@/components/ui/icon';

const InterestRatesSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Icon name="Percent" className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Актуальные ставки по потребительским кредитам в 2025 году
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Процентные ставки ведущих банков
        </h3>
        <p className="text-gray-700 mb-6">
          Ставки по потребительским кредитам в 2025 году варьируются в зависимости от банка, суммы и срока кредитования:
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">С</span>
            </div>
            Сбербанк потребительский кредит
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Ставка:</span>
              <span className="font-semibold">от 4,5% до 21,9% годовых</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Сумма:</span>
              <span className="font-semibold">от 30 000 до 5 000 000 ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Срок:</span>
              <span className="font-semibold">от 3 месяцев до 7 лет</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">В</span>
            </div>
            ВТБ потребительский кредит
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Ставка:</span>
              <span className="font-semibold">от 5,9% до 25,9% годовых</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Сумма:</span>
              <span className="font-semibold">от 100 000 до 7 000 000 ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Срок:</span>
              <span className="font-semibold">от 6 месяцев до 7 лет</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">А</span>
            </div>
            Альфа-Банк потребительский кредит
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Ставка:</span>
              <span className="font-semibold">от 5,5% до 49% годовых</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Сумма:</span>
              <span className="font-semibold">от 50 000 до 5 000 000 ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Срок:</span>
              <span className="font-semibold">от 1 года до 5 лет</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="TrendingUp" className="w-5 h-5 text-amber-600 mr-2" />
          Факторы, влияющие на процентную ставку
        </h4>
        <p className="text-gray-700 mb-4">
          Банки определяют процентную ставку по потребительскому кредиту индивидуально, учитывая:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-3">
            <Icon name="History" className="w-4 h-4 text-amber-500" />
            <span className="text-gray-700">Кредитную историю заемщика</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="DollarSign" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Официальный доход</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="User" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Возраст и трудовой стаж</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Calendar" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Сумму и срок кредита</span>
          </div>
          <div className="flex items-center space-x-3 md:col-span-2">
            <Icon name="CreditCard" className="w-4 h-4 text-indigo-500" />
            <span className="text-gray-700">Наличие зарплатного проекта в банке</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestRatesSection;