import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansHowTo = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Как взять микрозайм онлайн на карту
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-6 sm:p-8 bg-white">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Выберите МФО</h3>
            <p className="text-gray-700">
              Изучите условия различных микрофинансовых организаций и выберите наиболее подходящую
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 bg-white">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-orange-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Заполните заявку</h3>
            <p className="text-gray-700">
              Укажите персональные данные, сумму займа и срок возврата в онлайн-форме
            </p>
          </Card>
          
          <Card className="p-6 sm:p-8 bg-white">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Получите деньги</h3>
            <p className="text-gray-700">
              После одобрения средства поступят на вашу банковскую карту в течение 15 минут
            </p>
          </Card>
        </div>
        
        <Card className="p-6 sm:p-8 bg-blue-50 border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Документы для оформления микрозайма:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Паспорт гражданина РФ</span>
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Мобильный телефон</span>
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Банковская карта для получения средств</span>
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Для некоторых МФО: СНИЛС или второй документ</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MicroloansHowTo;