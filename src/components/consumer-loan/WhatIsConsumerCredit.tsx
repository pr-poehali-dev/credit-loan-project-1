import React from 'react';
import Icon from '@/components/ui/icon';

const WhatIsConsumerCredit = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <Icon name="HelpCircle" className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Что такое потребительский кредит и зачем он нужен
        </h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Потребительский кредит – это денежные средства, которые банк предоставляет физическим лицам на любые личные нужды без указания конкретной цели. В отличие от целевых кредитов, заемщик может свободно распоряжаться полученными деньгами.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="Target" className="w-5 h-5 text-blue-600 mr-2" />
          Основные цели получения потребительского кредита
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-3">
            <Icon name="ShoppingCart" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Покупка товаров длительного пользования</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Home" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Ремонт и обустройство жилья</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="GraduationCap" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Образование и медицинские услуги</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Plane" className="w-4 h-4 text-orange-500" />
            <span className="text-gray-700">Путешествия и отдых</span>
          </div>
          <div className="flex items-center space-x-3 md:col-span-2">
            <Icon name="RefreshCw" className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">Рефинансирование других долгов</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsConsumerCredit;