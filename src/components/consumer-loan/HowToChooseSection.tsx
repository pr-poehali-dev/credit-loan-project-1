import React from 'react';
import Icon from '@/components/ui/icon';

const HowToChooseSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
          <Icon name="Target" className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Как выбрать выгодный потребительский кредит
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Критерии выбора лучшего предложения
        </h3>
        <p className="text-gray-700 mb-6">
          При выборе потребительского кредита обращайте внимание на:
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
            Процентную ставку
          </h4>
          <p className="text-gray-700">
            Ищите предложения с низкой процентной ставкой. Разница даже в 1-2% может существенно повлиять на переплату.
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
            Полную стоимость кредита (ПСК)
          </h4>
          <p className="text-gray-700">
            ПСК включает все расходы по кредиту: проценты, комиссии, страховки.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
            Дополнительные услуги
          </h4>
          <p className="text-gray-700">
            Некоторые банки навязывают страховки и дополнительные услуги, увеличивающие стоимость кредита.
          </p>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
            Досрочное погашение
          </h4>
          <p className="text-gray-700">
            Проверьте возможность досрочного погашения без комиссий.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="TrendingDown" className="w-5 h-5 text-green-600 mr-2" />
          Потребительский кредит с низкой процентной ставкой
        </h4>
        <p className="text-gray-700 mb-4">
          Самые низкие ставки по потребительским кредитам предлагают:
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Users" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Банки для зарплатных клиентов: ставки от 4,5-6%</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Building" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Банки с государственным участием: Сбербанк, ВТБ</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Региональные банки: часто предлагают конкурентные условия</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToChooseSection;