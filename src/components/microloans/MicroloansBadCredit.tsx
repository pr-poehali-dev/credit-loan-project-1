import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansBadCredit = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Микрозаймы без отказа с плохой кредитной историей
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Даже с плохой кредитной историей можно получить микрозайм. МФО используют собственные системы 
              скоринга, которые учитывают не только кредитную историю.
            </p>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Факторы, повышающие шансы на одобрение:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="TrendingUp" size={16} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">Стабильный доход</span>
                </div>
                <div className="flex items-center">
                  <Icon name="FileCheck" size={16} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">Правильно заполненная анкета</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Star" size={16} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">Наличие положительных отзывов о заемщике</span>
                </div>
                <div className="flex items-center">
                  <Icon name="DollarSign" size={16} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">Заявка на небольшую сумму</span>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 sm:p-8 bg-yellow-50 border-yellow-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Icon name="AlertTriangle" size={20} className="text-yellow-600 mr-2" />
              Важно помнить:
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <Icon name="Info" size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <span>Займы с плохой КИ имеют более высокие процентные ставки</span>
              </div>
              <div className="flex items-start">
                <Icon name="Info" size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <span>Возможны дополнительные комиссии</span>
              </div>
              <div className="flex items-start">
                <Icon name="Info" size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <span>Лимит по сумме может быть снижен</span>
              </div>
              <div className="flex items-start">
                <Icon name="Info" size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <span>Обязательно читайте договор перед подписанием</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MicroloansBadCredit;