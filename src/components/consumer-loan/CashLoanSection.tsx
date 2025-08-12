import React from 'react';
import Icon from '@/components/ui/icon';

const CashLoanSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
          <Icon name="Banknote" className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Потребительский кредит наличными: особенности получения
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="CheckCircle2" className="w-5 h-5 text-emerald-600 mr-2" />
            Преимущества кредита наличными
          </h3>
          <p className="text-gray-700 mb-4">
            Потребительский кредит наличными обладает рядом преимуществ:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Быстрое получение денег</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Unlock" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Свобода в использовании средств</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Отсутствие залога и поручителей</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Globe" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Возможность онлайн-оформления</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="Route" className="w-5 h-5 text-blue-600 mr-2" />
            Процедура получения
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">1</div>
              <span className="text-gray-700">Подача заявки онлайн или в отделении банка</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">2</div>
              <span className="text-gray-700">Рассмотрение заявки (от 15 минут до 3 дней)</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">3</div>
              <span className="text-gray-700">Предоставление документов</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">4</div>
              <span className="text-gray-700">Подписание кредитного договора</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">5</div>
              <span className="text-gray-700">Получение денег наличными или на карту</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashLoanSection;