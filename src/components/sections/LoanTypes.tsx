import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const LoanTypes = () => {
  const loanTypes = [
    {
      title: 'Потребительский',
      rate: 'от 5.9%',
      amount: 'до 5 млн ₽',
      term: 'до 7 лет',
      icon: 'CreditCard',
      description: 'Быстрое оформление без поручителей',
      color: 'bg-blue-600'
    },
    {
      title: 'Ипотека',
      rate: 'от 3.5%',
      amount: 'до 30 млн ₽',
      term: 'до 30 лет',
      icon: 'Home',
      description: 'Специальные программы для семей',
      color: 'bg-emerald-600'
    },
    {
      title: 'Автокредит',
      rate: 'от 4.9%',
      amount: 'до 10 млн ₽',
      term: 'до 5 лет',
      icon: 'Car',
      description: 'Новые и подержанные автомобили',
      color: 'bg-purple-600'
    },
    {
      title: 'Микрозаймы',
      rate: 'от 0%',
      amount: 'до 100 000 ₽',
      term: 'до 30 дней',
      icon: 'Zap',
      description: 'Деньги за 15 минут без справок',
      color: 'bg-red-600'
    },
    {
      title: 'Дебетовые карты',
      rate: 'до 7%',
      amount: 'кэшбэк до 33%',
      term: 'бесплатно',
      icon: 'Wallet',
      description: 'Карты с выгодными условиями',
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="loans" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">Кредитные программы</h2>
          <p className="text-lg md:text-xl text-gray-600 px-4">Выберите подходящий для вас тип кредитования</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">
          {loanTypes.map((loan, index) => {
            const getCardId = (index: number) => {
              switch(index) {
                case 1: return 'mortgage';
                case 2: return 'auto';
                case 3: return 'microloans';
                case 4: return 'debit-cards';
                default: return '';
              }
            };
            
            return (
            <Card key={index} id={getCardId(index)} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className={`absolute top-0 right-0 w-32 h-32 ${loan.color} rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <CardHeader className="relative">
                <div className={`w-12 h-12 ${loan.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon name={loan.icon as any} size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{loan.title}</CardTitle>
                <CardDescription className="text-base">{loan.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-semibold text-green-600">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-semibold">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-semibold">{loan.term}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800"
                  asChild={index === 0 || index === 1 || index === 2 || index === 3 || index === 4}
                >
                  {index === 0 ? (
                    <a href="/consumer-loan">
                      Подробнее
                    </a>
                  ) : index === 1 ? (
                    <a href="/mortgage">
                      Подробнее
                    </a>
                  ) : index === 2 ? (
                    <a href="/auto-loan">
                      Подробнее
                    </a>
                  ) : index === 3 ? (
                    <a href="/microloans">
                      Подробнее
                    </a>
                  ) : index === 4 ? (
                    <a href="/debit-cards">
                      Подробнее
                    </a>
                  ) : (
                    "Подробнее"
                  )}
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;