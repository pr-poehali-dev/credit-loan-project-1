import React from 'react';
import Icon from '@/components/ui/icon';

const FAQSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
          <Icon name="HelpCircle" className="w-6 h-6 text-cyan-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Частые вопросы о потребительских кредитах
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Icon name="FileX" className="w-5 h-5 text-blue-600 mr-2" />
            Можно ли получить потребительский кредит без справок?
          </h3>
          <p className="text-gray-700">
            Многие банки предлагают кредиты по двум документам (паспорт + водительские права или СНИЛС), но ставка будет выше.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Icon name="Target" className="w-5 h-5 text-green-600 mr-2" />
            Какой потребительский кредит лучше выбрать?
          </h3>
          <p className="text-gray-700 mb-3">
            Выбор зависит от ваших потребностей:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingCart" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Для крупных покупок – кредит с максимальной суммой</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Для краткосрочных нужд – кредит с возможностью досрочного погашения</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="PiggyBank" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Для экономии – кредит с минимальной ставкой</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Icon name="TrendingUp" className="w-5 h-5 text-purple-600 mr-2" />
            Как улучшить условия кредитования?
          </h3>
          <p className="text-gray-700 mb-3">
            Для получения лучших условий:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="History" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Поддерживайте хорошую кредитную историю</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Оформите зарплатную карту в банке-кредиторе</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Рассмотрите возможность привлечения поручителей</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700">Выберите оптимальную сумму и срок кредита</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;