import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MicroloansPartners = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6">
            <Icon name="Building2" size={24} />
            <span className="font-semibold">МФО-партнёры</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Микрозаймы от проверенных МФО</h2>
          <p className="text-lg text-gray-600">Быстрое одобрение и выгодные условия</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cashiro */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/86b23edf-41f5-4981-9f6f-8903359e833a.png" 
                  alt="Cashiro - микрозайм" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Cashiro</h3>
              <p className="text-base md:text-lg font-medium text-red-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">1-30 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-red-600">0,8% в день</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">3-30 дней</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Zap" size={16} />
                  <span>Быстрое одобрение</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/txUVt02X?erid=LjN8K2yaa"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>

          {/* ЗАЁМ.РУ */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/2015ac3c-f2ce-498f-b8ca-ba19525a1ece.png" 
                  alt="ЗАЁМ.РУ - микрозайм" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">ЗАЁМ.РУ</h3>
              <p className="text-base md:text-lg font-medium text-blue-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">31-100 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-blue-600">0,4-0,6% в день</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">1-365 дней</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="TrendingUp" size={16} />
                  <span>Крупные суммы</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/HHvfTe22?erid=2SDnjcjAe4z"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>

          {/* А Деньги */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/906f071c-dfe6-42b2-a87a-71e0b47cf4ba.png" 
                  alt="А Деньги - микрозайм" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">А Деньги</h3>
              <p className="text-base md:text-lg font-medium text-orange-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">до 30 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">до 30 дней</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Особенности:</span>
                    <span className="font-bold text-base md:text-lg text-orange-600">Автопродление</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Shield" size={16} />
                  <span>Без поручителей</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/amxPDOWZ?erid=LjN8KSUm6"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>

          {/* Срочно деньги */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-lime-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/fde66a38-b113-4cea-88c9-400bc074a896.png" 
                  alt="Срочно деньги - микрозайм" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Срочно деньги</h3>
              <p className="text-base md:text-lg font-medium text-lime-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-lime-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">2-30 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-lime-600">0-0,8% в день</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">1-30 дней</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span>Решение за 1 минуту</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/QBskke4v?erid=2SDnjdmVzVA&siteId=8015"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>

          {/* ДеньгиОК */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-green-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/bb9beedc-24f3-45b4-9072-dc26109891c9.png" 
                  alt="ДеньгиОК - микрозайм" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">ДеньгиОК</h3>
              <p className="text-base md:text-lg font-medium text-green-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">2-20 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-green-600">0,8% в день</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">10-15 дней</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="CheckCircle" size={16} />
                  <span>Надёжный МФО</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/5IMsM4AM?erid=2SDnjbrUYhH"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>

          {/* 495 Кредит */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center p-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <span className="text-purple-600 font-bold text-2xl">495</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">495 Кредит</h3>
              <p className="text-base md:text-lg font-medium text-purple-700 mb-6">Микрозайм</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">2-20 тыс ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-purple-600">0,8% в день</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">10-15 дней</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Star" size={16} />
                  <span>Проверенный МФО</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/iTsTuS3a?erid=2SDnjcVZcGM"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >Оформить займ</a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться МФО
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MicroloansPartners;