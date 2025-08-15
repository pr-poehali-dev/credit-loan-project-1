import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const MicroloansPage = () => {
  return (
    <>
      <SEOHead
        title="Микрозаймы онлайн на карту: как взять без процентов и без отказа в 2025"
        description="Получите микрозайм до 100 000 рублей за 15 минут. Первый займ без процентов. Оформление онлайн без справок о доходах. Одобрение даже с плохой кредитной историей."
        keywords="микрозайм онлайн, займ на карту, микрозайм без процентов, займ без отказа, микрозайм с плохой кредитной историей, быстрый займ"
        url="/microloans"
        type="website"
      />
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
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
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100 000₽</div>
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

        {/* What are microloans */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Что такое микрозаймы и микрозаемы
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Микрозайм (микрозаем) — это небольшая денежная сумма, которую можно взять в микрофинансовой 
                  организации (МФО) на короткий срок. Основные преимущества:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Zap" size={20} className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Быстрое оформление онлайн</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="FileText" size={20} className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Минимальный пакет документов</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CreditCard" size={20} className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Получение средств на карту за несколько минут</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={20} className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Возможность получить без справок о доходах</span>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ключевые характеристики</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Сумма:</span>
                    <span className="text-gray-900 font-semibold">от 1 000 до 100 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Срок:</span>
                    <span className="text-gray-900 font-semibold">от 7 до 365 дней</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Процентная ставка:</span>
                    <span className="text-gray-900 font-semibold">от 0% до 2% в день</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Время рассмотрения:</span>
                    <span className="text-gray-900 font-semibold">5-15 минут</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How to get microloan */}
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

        {/* Zero percent loans */}
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

        {/* Bad credit history */}
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

        {/* Step-by-step instruction */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Оформить микрозайм онлайн: пошаговая инструкция
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Подготовка документов
                </h3>
                <p className="text-gray-700">
                  Приготовьте паспорт, банковскую карту и мобильный телефон. Некоторые МФО могут потребовать СНИЛС или второй документ.
                </p>
              </Card>
              
              <Card className="p-6 sm:p-8 border-l-4 border-green-500 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Выбор МФО и условий
                </h3>
                <p className="text-gray-700">
                  Сравните предложения различных микрофинансовых организаций. Обратите внимание на процентную ставку, срок займа и дополнительные комиссии.
                </p>
              </Card>
              
              <Card className="p-6 sm:p-8 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Заполнение заявки
                </h3>
                <p className="text-gray-700">
                  Укажите точные персональные данные, контактную информацию и желаемую сумму займа. Ошибки в анкете могут стать причиной отказа.
                </p>
              </Card>
              
              <Card className="p-6 sm:p-8 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Верификация
                </h3>
                <p className="text-gray-700">
                  Подтвердите номер телефона по SMS и при необходимости пройдите видеозвонок с сотрудником МФО для подтверждения личности.
                </p>
              </Card>
              
              <Card className="p-6 sm:p-8 border-l-4 border-red-500 bg-red-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Получение средств
                </h3>
                <p className="text-gray-700">
                  После одобрения подпишите договор и получите деньги на карту. Обычно средства поступают в течение 5-15 минут.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety */}
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

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-orange-600 to-yellow-600">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Готовы получить микрозайм?
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8">
              Подберем лучшие предложения от надежных МФО с высокой вероятностью одобрения
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-lg font-semibold"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Подобрать микрозайм
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroloansPage;