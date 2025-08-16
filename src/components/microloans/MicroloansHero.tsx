import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-orange-100 text-orange-800 mb-4">Быстрые займы</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Микрозаймы онлайн на карту: полное руководство 2025
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto">
            Как взять микрозайм без процентов, без отказа и с плохой кредитной историей
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">15 мин</div>
              <div className="text-sm sm:text-base text-gray-600">Получение средств</div>
            </Card>
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-sm sm:text-base text-gray-600">Первый займ</div>
            </Card>
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">300 000₽</div>
              <div className="text-sm sm:text-base text-gray-600">Максимальная сумма</div>
            </Card>
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">365</div>
              <div className="text-sm sm:text-base text-gray-600">Дней максимум</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroloansHero;