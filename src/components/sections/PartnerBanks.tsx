import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PartnerBanks = () => {
  return (
    <section id="banks" className="py-12 md:py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
            Банки-партнёры
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">Быстрые кредиты от ведущих банков</h2>
          <p className="text-lg md:text-xl text-gray-600 px-4">Мгновенное одобрение и выдача средств</p>
        </header>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Сбербанк */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-green-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <CardHeader className="relative text-center pb-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/f70038da-d6dd-4e66-a474-947315ef3e89.jpg" 
                  alt="Логотип Сбербанка - кредиты онлайн от 19%" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <CardTitle className="text-xl md:text-2xl text-gray-900">Сбербанк</CardTitle>
              <CardDescription className="text-base md:text-lg font-medium text-green-700">Деньги до зарплаты</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="space-y-4 mb-8">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Сумма:</span>
                    <span className="font-bold text-base md:text-lg">до 1 млн ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                    <span className="font-bold text-base md:text-lg text-green-600">от 19%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">Срок:</span>
                    <span className="font-bold text-base md:text-lg">до 5 лет</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span>Решение за 2 минуты</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Shield" size={16} />
                  <span>Без справок и поручителей</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/CpNSOA4a?erid=2SDnje8KVjs"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться банком
              </p>
            </CardContent>
          </Card>

          {/* Т-Банк */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-yellow-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <CardHeader className="relative text-center pb-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/e77b493b-0c8f-415a-8cdb-d22ea975836f.jpg" 
                  alt="Т-Банк" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <CardTitle className="text-2xl text-gray-900">Т-Банк</CardTitle>
              <CardDescription className="text-lg font-medium text-yellow-700">Быстрые деньги</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="space-y-4 mb-8">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold text-lg">до 1 млн ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-lg text-yellow-600">от 11%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-bold text-lg">до 5 лет</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="TrendingDown" size={16} />
                  <span>Снижение ставки до 40%</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Banknote" size={16} />
                  <span>Объединение всех кредитов</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/qMN0f7EE?erid=2SDnjcyz7NY"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться банком
              </p>
            </CardContent>
          </Card>

          {/* Совкомбанк */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-red-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <CardHeader className="relative text-center pb-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/d2f0ef12-4d16-4a38-8f79-16e16b1881ba.jpg" 
                  alt="Совкомбанк" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <CardTitle className="text-2xl text-gray-900">Совкомбанк</CardTitle>
              <CardDescription className="text-lg font-medium text-red-700">В рассрочку</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold text-lg">до 500 000  ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-lg text-red-600">от 1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-bold text-lg">до 2 лет</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="TrendingUp" size={16} />
                  <span>Без справок о доходах</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span>Решение за 3 минуты</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/pCgvSuoB?erid=Kra23XHz1"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться банком
              </p>
            </CardContent>
          </Card>

          {/* Альфа-Банк */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-red-200 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <CardHeader className="relative text-center pb-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                <img 
                  src="https://cdn.poehali.dev/files/c0084308-d657-4a0a-b294-2b5a1839e38a.png" 
                  alt="Альфа-Банк" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <CardTitle className="text-2xl text-gray-900">Альфа-Банк</CardTitle>
              <CardDescription className="text-lg font-medium text-red-700">Кредит наличными</CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold text-lg">до 5млн ₽</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-lg text-red-600">от 19,99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-bold text-lg">до 5 лет</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Zap" size={16} />
                  <span>Моментальное решение</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Icon name="Smartphone" size={16} />
                  <span>Онлайн оформление</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="ExternalLink" className="mr-2" size={20} />
                Получить кредит
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                * Условия могут изменяться банком
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;