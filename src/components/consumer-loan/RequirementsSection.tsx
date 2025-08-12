import React from 'react';
import Icon from '@/components/ui/icon';

const RequirementsSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <Icon name="FileText" className="w-6 h-6 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Условия получения потребительского кредита
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="User" className="w-5 h-5 text-blue-600 mr-2" />
            Требования к заемщикам
          </h3>
          <p className="text-gray-700 mb-4">
            Стандартные требования банков к заемщикам:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="Calendar" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Возраст: от 21 до 65-75 лет</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Flag" className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Гражданство: РФ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Briefcase" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Стаж работы: от 3-6 месяцев на последнем месте</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="TrendingUp" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Доход: справка 2-НДФЛ или справка по форме банка</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="FileStack" className="w-5 h-5 text-green-600 mr-2" />
            Необходимые документы
          </h3>
          <p className="text-gray-700 mb-4">
            Для оформления потребительского кредита потребуются:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Паспорт РФ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Receipt" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Справка о доходах</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="BookOpen" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Трудовая книжка или трудовой договор</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Plus" className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Дополнительные документы (по требованию банка)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;