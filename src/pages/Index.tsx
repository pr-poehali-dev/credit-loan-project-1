import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm) * 12;
    
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    if (isFinite(monthly)) {
      setMonthlyPayment(monthly);
    }
  };

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
                <h1 className="text-xl font-bold text-gray-900">PREMIUM CREDIT</h1>
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
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">
            VIP Обслуживание
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            PREMIUM
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CREDIT
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Эксклюзивные кредитные программы для требовательных клиентов. 
            Индивидуальный подход, минимальные ставки, максимальный комфорт.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Icon name="FileText" className="mr-2" size={20} />
              Подать заявку онлайн
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать кредит
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Banks - Referral Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
              Банки-партнёры
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Быстрые кредиты от ведущих банков</h2>
            <p className="text-xl text-gray-600">Мгновенное одобрение и выдача средств</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Сбербанк */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-green-200 bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
                  <img 
                    src="https://cdn.poehali.dev/files/f70038da-d6dd-4e66-a474-947315ef3e89.jpg" 
                    alt="Сбербанк" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">Сбербанк</CardTitle>
                <CardDescription className="text-lg font-medium text-green-700">Деньги до зарплаты</CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4 mb-8">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-bold text-lg">до 300 000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Ставка:</span>
                      <span className="font-bold text-lg text-green-600">от 4.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-bold text-lg">до 5 лет</span>
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

            {/* Placeholder для второго банка */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 bg-white opacity-75">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Банк №2</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-700">Скоро здесь</CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-600">Готовим лучшие условия для вас</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  disabled
                  className="w-full bg-gray-400 text-white font-semibold py-4 text-lg"
                >
                  <Icon name="Clock" className="mr-2" size={20} />
                  Скоро
                </Button>
              </CardContent>
            </Card>

            {/* Placeholder для третьего банка */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 bg-white opacity-75">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Банк №3</CardTitle>
                <CardDescription className="text-lg font-medium text-purple-700">Скоро здесь</CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4 mb-8">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-gray-600">Готовим лучшие условия для вас</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  disabled
                  className="w-full bg-gray-400 text-white font-semibold py-4 text-lg"
                >
                  <Icon name="Clock" className="mr-2" size={20} />
                  Скоро
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section id="loans" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Кредитные программы</h2>
            <p className="text-xl text-gray-600">Выберите подходящий для вас тип кредитования</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Calculator */}
      <section id="calculator" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор кредита</h2>
            <p className="text-xl text-gray-600">Рассчитайте примерный размер ежемесячного платежа</p>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="amount" className="text-base font-medium">Сумма кредита (₽)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="1 000 000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="term" className="text-base font-medium">Срок кредита (лет)</Label>
                    <Input
                      id="term"
                      type="number"
                      placeholder="5"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rate" className="text-base font-medium">Процентная ставка (%)</Label>
                    <Input
                      id="rate"
                      type="number"
                      step="0.1"
                      placeholder="5.9"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                  </div>
                  
                  <Button 
                    onClick={calculateLoan}
                    className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
                  >
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать
                  </Button>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl w-full">
                    <Icon name="TrendingUp" size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="text-lg opacity-90 mb-2">Ежемесячный платёж</p>
                    <p className="text-4xl font-bold">
                      {monthlyPayment > 0 ? `${Math.round(monthlyPayment).toLocaleString()} ₽` : '— ₽'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Подать заявку онлайн</h2>
            <p className="text-xl text-gray-300">Заполните форму и получите решение в течение 15 минут</p>
          </div>
          
          <Card className="bg-white/5 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                  <TabsTrigger value="personal">Личные данные</TabsTrigger>
                  <TabsTrigger value="financial">Финансы</TabsTrigger>
                  <TabsTrigger value="loan">Параметры кредита</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-6 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">Имя</Label>
                      <Input id="firstName" placeholder="Иван" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Фамилия</Label>
                      <Input id="lastName" placeholder="Иванов" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input id="email" type="email" placeholder="ivan@example.com" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="financial" className="space-y-6 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="income" className="text-white">Ежемесячный доход</Label>
                      <Input id="income" placeholder="100 000 ₽" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="employment" className="text-white">Место работы</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-white/10 border-gray-600 text-white">
                          <SelectValue placeholder="Выберите тип занятости" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employed">Официальное трудоустройство</SelectItem>
                          <SelectItem value="business">Собственный бизнес</SelectItem>
                          <SelectItem value="freelance">Фриланс</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="loan" className="space-y-6 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="loanType" className="text-white">Тип кредита</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-white/10 border-gray-600 text-white">
                          <SelectValue placeholder="Выберите тип кредита" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Потребительский</SelectItem>
                          <SelectItem value="mortgage">Ипотека</SelectItem>
                          <SelectItem value="auto">Автокредит</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="requestedAmount" className="text-white">Желаемая сумма</Label>
                      <Input id="requestedAmount" placeholder="1 000 000 ₽" className="mt-2 bg-white/10 border-gray-600 text-white" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </CardContent>
          </Card>
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
                <span className="font-bold text-gray-900">PREMIUM CREDIT</span>
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
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 Premium Credit. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;