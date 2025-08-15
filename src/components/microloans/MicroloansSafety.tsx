import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansSafety = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Безопасность при работе с МФО
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="p-6 sm:p-8 bg-green-50 border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Icon name="Shield" size={24} className="text-green-600 mr-3" />
              Как избежать мошенников:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Проверьте лицензию МФО на сайте Банка России</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Не переводите деньги за оформление займа</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Внимательно читайте договор</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Проверяйте отзывы о компании</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 sm:p-8 bg-red-50 border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Icon name="AlertTriangle" size={24} className="text-red-600 mr-3" />
              Признаки мошенничества:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon name="X" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Требование предоплаты</span>
              </div>
              <div className="flex items-start">
                <Icon name="X" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Слишком выгодные условия</span>
              </div>
              <div className="flex items-start">
                <Icon name="X" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Отсутствие лицензии ЦБ РФ</span>
              </div>
              <div className="flex items-start">
                <Icon name="X" size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Давление и спешка</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MicroloansSafety;