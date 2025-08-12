import React from 'react';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Icon name="Calculator" className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Калькулятор потребительского кредита: как рассчитать платеж
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Кредитный калькулятор потребительского кредита онлайн
        </h3>
        <p className="text-gray-700 mb-6">
          Для расчета ежемесячного платежа по потребительскому кредиту используется формула аннуитетных платежей:
        </p>
        
        <div className="bg-slate-100 rounded-lg p-6 font-mono text-center mb-6">
          <div className="text-lg font-semibold">PMT = S × [i × (1 + i)^n] / [(1 + i)^n - 1]</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">PMT</span>
            <span className="text-gray-600">– ежемесячный платеж</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">S</span>
            <span className="text-gray-600">– сумма кредита</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">i</span>
            <span className="text-gray-600">– месячная процентная ставка</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">n</span>
            <span className="text-gray-600">– количество месяцев</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="Calculator" className="w-5 h-5 text-green-600 mr-2" />
          Калькулятор Сбербанка потребительский кредит
        </h4>
        <p className="text-gray-700 mb-4">
          Сбербанк предоставляет удобный онлайн-калькулятор для расчета потребительского кредита. Калькулятор позволяет:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Рассчитать ежемесячный платеж</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Определить переплату по кредиту</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Выбрать оптимальный срок кредитования</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Сравнить различные варианты</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;