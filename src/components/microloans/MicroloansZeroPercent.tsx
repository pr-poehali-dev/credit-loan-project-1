import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansZeroPercent = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Микрозаймы без процентов: как получить
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Многие МФО предлагают первый займ без процентов для новых клиентов. Это отличная возможность 
              решить финансовые проблемы без переплат.
            </p>
            
            <Card className="p-6 bg-green-50 border-green-200 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Условия получения займа без процентов:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="UserCheck" size={16} className="text-green-600 mr-2" />
                  <span className="text-gray-700">Первое обращение в МФО</span>
                </div>
                <div className="flex items-center">
                  <Icon name="DollarSign" size={16} className="text-green-600 mr-2" />
                  <span className="text-gray-700">Сумма займа до 15 000 рублей</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="text-green-600 mr-2" />
                  <span className="text-gray-700">Срок возврата до 30 дней</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-green-600 mr-2" />
                  <span className="text-gray-700">Своевременный возврат предыдущих займов</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Популярные МФО с беспроцентным периодом:</h3>
            <div className="space-y-4">
              <Card className="p-4 sm:p-6 bg-white border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Займер</h4>
                    <p className="text-sm text-gray-600">до 30 дней 0%</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Топ</Badge>
                </div>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-white border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">МигКредит</h4>
                    <p className="text-sm text-gray-600">до 28 дней 0%</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Быстро</Badge>
                </div>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-white border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Честное слово</h4>
                    <p className="text-sm text-gray-600">до 25 дней 0%</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Надёжно</Badge>
                </div>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-white border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Быстроденьги</h4>
                    <p className="text-sm text-gray-600">до 21 дня 0%</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Выгодно</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroloansZeroPercent;