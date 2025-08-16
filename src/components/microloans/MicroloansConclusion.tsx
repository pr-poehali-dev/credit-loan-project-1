import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansConclusion = () => {
  return (
    <>
      {/* Conclusion */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Заключение
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 leading-relaxed">
              Микрозаймы — это удобный инструмент для решения краткосрочных финансовых проблем. 
              Главное — выбрать надежную МФО, внимательно изучить условия и не забывать о своевременном возврате средств.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Быстро</h3>
                <p className="text-gray-600">Получение за 15 минут</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Удобно</h3>
                <p className="text-gray-600">Оформление онлайн</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Безопасно</h3>
                <p className="text-gray-600">При выборе лицензированных МФО</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <Icon name="AlertCircle" size={24} className="text-yellow-600 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">
                Помните: микрозаймы следует использовать ответственно. 
                Всегда изучайте условия и рассчитывайте свои возможности по возврату.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default MicroloansConclusion;