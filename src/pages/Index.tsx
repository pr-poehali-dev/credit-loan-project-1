import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {

  const loanTypes = [
    {
      title: 'Потребительский кредит',
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">ОДОБРЯЕМ</div>
                <p className="text-xs text-gray-500">Финансовые решения</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#loans" className="text-gray-600 hover:text-blue-600 transition-colors">Кредиты</a>
              <a href="#mortgage" className="text-gray-600 hover:text-blue-600 transition-colors">Ипотека</a>
              <a href="#auto" className="text-gray-600 hover:text-blue-600 transition-colors">Автокредит</a>
              <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors">Калькулятор</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Подать заявку
              </Button>
            </nav>

            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ОДОБРЯЕМ
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Эксклюзивные кредитные программы для требовательных клиентов. 
            Индивидуальный подход, минимальные ставки, максимальный комфорт.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              <Icon name="FileText" className="mr-2" size={18} />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              <Icon name="Calculator" className="mr-2" size={18} />
              Калькулятор
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Banks - Referral Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
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
                      <span className="font-bold text-base md:text-lg">до 5 млн ₽</span>
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
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
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
                <CardDescription className="text-lg font-medium text-yellow-700">Рефинансирование</CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4 mb-8">
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-bold text-lg">до 5 млн ₽</span>
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
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
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
                <CardDescription className="text-lg font-medium text-red-700">Кредит наличными </CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4 mb-8">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-bold text-lg">до 5 млн ₽</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Ставка:</span>
                      <span className="font-bold text-lg text-red-600">от 13%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-bold text-lg">до 5 лет</span>
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
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Получить кредит
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

      {/* Loan Types */}
      <section id="loans" className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">Кредитные программы</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Выберите подходящий для вас тип кредитования</p>
          </header>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
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
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Где и как взять кредит на выгодных условиях — советы, банки и онлайн-оформление
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            В современном мире финансовые потребности граждан растут, и многие задаются вопросом: где взять кредит на выгодных условиях? Выбор банка и кредитного продукта — ответственное решение, которое требует тщательного изучения рынка и понимания собственных возможностей.
          </p>

          <div className="mt-16 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Icon name="Route" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Основные способы получения кредита
                </h2>
                <p className="text-gray-600 mt-1">
                  Каждый способ имеет свои особенности и подходит для различных ситуаций
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Icon name="Building2" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Традиционное кредитование
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Классический способ — обратиться в банковское отделение. Подходит тем, кто предпочитает личное общение с консультантом.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Icon name="Globe" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Онлайн кредитование
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Подача заявки через интернет значительно экономит время. Процесс может занять от нескольких минут до часов.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Icon name="Smartphone" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Мобильные приложения
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Банковские приложения позволяют взять кредит на карту в несколько кликов. Особенно удобно для небольших сумм.
              </p>
            </div>
          </div>

          <div className="mt-16 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Icon name="Target" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Выбор банка для кредитования
                </h2>
                <p className="text-gray-600 mt-1">
                  При выборе финансового учреждения следует учитывать ключевые факторы
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">
            Крупные федеральные банки
          </h3>
          <p className="text-gray-700 mb-8">
            Банки взять кредит в которых можно на стабильных условиях, включают Сбербанк, ВТБ, Альфа-Банк и другие крупные игроки рынка. Они предлагают широкую линейку продуктов и имеют развитую сеть отделений.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Сбербанк</h4>
                  <p className="text-sm text-gray-600">лидер по объёму кредитного портфеля</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">В</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ВТБ</h4>
                  <p className="text-sm text-gray-600">выгодные условия для зарплатных клиентов</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">А</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Альфа-Банк</h4>
                  <p className="text-sm text-gray-600">быстрое рассмотрение заявок</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Т</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Тинькофф Банк</h4>
                  <p className="text-sm text-gray-600">удобное онлайн-обслуживание</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 mt-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Icon name="MapPin" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Региональные банки
              </h3>
            </div>
            <p className="text-gray-700">
              Местные банки часто предлагают более гибкие условия и индивидуальный подход к клиентам. Они могут быть хорошим вариантом для тех, кто ищет персональное обслуживание.
            </p>
          </div>

          <div className="mt-16 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Icon name="FileText" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Условия получения кредита
                </h2>
                <p className="text-gray-600 mt-1">
                  Понимание требований банков поможет увеличить шансы на одобрение заявки
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="User" className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Основные требования к заёмщику
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Icon name="Calendar" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Возраст от 21 до 65-70 лет</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Icon name="TrendingUp" className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Стабильный доход</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Icon name="Briefcase" className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Стаж работы не менее 3-6 месяцев</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Icon name="Flag" className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Российское гражданство</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl md:col-span-2">
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Положительная кредитная история</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 mt-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Icon name="FileStack" className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Необходимые документы
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              Для того чтобы взять кредит без лишних проволочек, важно заранее подготовить полный пакет документов:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg border border-amber-100">
                <Icon name="CreditCard" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Паспорт гражданина РФ</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg border border-amber-100">
                <Icon name="Receipt" className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Справка о доходах</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg border border-amber-100">
                <Icon name="Building2" className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Трудовая книжка</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg border border-amber-100">
                <Icon name="Plus" className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Дополнительные документы</span>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Icon name="Smartphone" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Онлайн кредитование: быстро и удобно
                </h2>
                <p className="text-gray-600 mt-1">
                  Цифровизация банковских услуг позволила значительно упростить процесс получения займов
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8">
              <p className="text-gray-700 text-lg">
                Сегодня можно взять кредит онлайн на карту за считанные минуты.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mt-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Преимущества онлайн кредитования
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <Icon name="Zap" className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Быстрое рассмотрение заявки</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <Icon name="FileX" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Минимум документов</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                <Icon name="CreditCard" className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Зачисление средств на карту</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <Icon name="Clock" className="w-5 h-5 text-amber-500" />
                <span className="text-gray-700">Оформление в любое время</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Icon name="AlertTriangle" className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Особенности получения
              </h3>
            </div>
            <p className="text-gray-700">
              Многие ищут возможность взять кредит без отказа, и онлайн-сервисы часто предлагают более лояльные условия одобрения. Однако следует помнить, что процентные ставки по таким кредитам могут быть выше.
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Icon name="CheckCircle2" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Заключение
                  </h2>
                  <p className="text-gray-600">Ключевые принципы успешного кредитования</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Решение взять кредит требует тщательной подготовки и анализа множества факторов. Современный банковский рынок предлагает широкий выбор продуктов для различных категорий заёмщиков, включая тех, кто имеет проблемы с кредитной историей.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Главное — реально оценивать свои финансовые возможности, сравнивать предложения разных банков и выбирать наиболее подходящий продукт. Правильно подобранный кредит станет эффективным финансовым инструментом для достижения ваших целей.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" className="w-6 h-6 text-blue-600 mt-0.5" />
                    <p className="text-gray-800 font-medium leading-relaxed">
                      Помните: ответственное отношение к кредитным обязательствам — залог успешного сотрудничества с банком и возможность получения более выгодных условий в будущем.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="CreditCard" size={16} className="text-white" />
                </div>
                <span className="font-bold text-gray-900">ОДОБРЯЕМ</span>
              </div>
              <p className="text-gray-600 text-sm">
                Надёжные финансовые решения для вашего будущего
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Продукты</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Потребительские кредиты</li>
                <li>Ипотечное кредитование</li>
                <li>Автокредитование</li>
                <li>Рефинансирование</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>+7 (800) 123-45-67</li>
                <li>info@premiumcredit.ru</li>
                <li>Москва, Тверская 1</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">© 2025 Одобряем. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;