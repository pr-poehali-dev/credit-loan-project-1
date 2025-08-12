import React from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const Mortgage = () => {
  useEffect(() => {
    document.title = 'Взять ипотеку в 2025: условия банков без первоначального взноса';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Как взять ипотеку в 2025 году: сравните условия банков, ставки от 6%, возможность без первоначального взноса. Семейная ипотека на новостройки и вторичку.');
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-blue-50"
              asChild
            >
              <a href="/">
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад к списку кредитов
              </a>
            </Button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 pb-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Взять ипотеку в 2025 году: полное руководство по выбору и оформлению
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Ипотечное кредитование остается основным способом приобретения недвижимости для большинства россиян. В 2025 году условия ипотеки претерпели изменения, появились новые программы поддержки, а процентные ставки стабилизировались на более привлекательном уровне. Разберем подробно, как взять ипотеку выгодно и какие возможности доступны заемщикам.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon name="Home" className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Можно ли взять ипотеку в 2025 году: актуальные условия
                </h2>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="UserCheck" className="w-5 h-5 text-emerald-600 mr-2" />
                  Основные требования для получения ипотеки
                </h3>
                <p className="text-gray-700 mb-4">
                  Чтобы взять ипотеку в банке, необходимо соответствовать базовым критериям:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700">Возраст: от 21 года до 65-75 лет (в зависимости от банка)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Flag" className="w-4 h-4 text-red-500" />
                    <span className="text-gray-700">Гражданство: РФ с постоянной регистрацией</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Briefcase" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Стаж работы: минимум 3-6 месяцев на текущем месте</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="TrendingUp" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Доход: подтвержденный официальный доход</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="History" className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">Кредитная история: положительная или нейтральная</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="FileText" className="w-5 h-5 text-blue-600 mr-2" />
                  Документы для оформления ипотеки
                </h3>
                <p className="text-gray-700 mb-4">
                  Базовый пакет документов включает:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Паспорт гражданина РФ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Receipt" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Справка о доходах (2-НДФЛ или по форме банка)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="BookOpen" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Трудовая книжка или трудовой договор</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Home" className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">Документы на приобретаемую недвижимость</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <Icon name="Shield" className="w-4 h-4 text-red-500" />
                    <span className="text-gray-700">Справка об отсутствии задолженностей</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Icon name="DollarSign" className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Взять ипотеку без первоначального взноса: реальные возможности
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Можно ли взять ипотеку без первоначального взноса
                </h3>
                <p className="text-gray-700 mb-6">
                  Традиционно банки требуют первоначальный взнос от 10-15%, однако существуют программы, позволяющие взять ипотеку без первоначального взноса:
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    Семейная ипотека с господдержкой
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Percent" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Ставка от 6% годовых</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Возможность 100% финансирования</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Для семей с детьми</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    Ипотека для молодых семей
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700">Льготные условия для граждан до 35 лет</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingDown" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Субсидирование первоначального взноса</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Специальные государственные программы</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    Ипотека с материнским капиталом
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Baby" className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700">Материнский капитал в качестве первоначального взноса</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Banknote" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Сумма в 2025 году составляет 630 380 рублей</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Route" className="w-5 h-5 text-yellow-600 mr-2" />
                  Как взять ипотеку без первоначального взноса
                </h3>
                <p className="text-gray-700 mb-4">
                  Для получения ипотеки без первоначального взноса рассмотрите следующие варианты:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Baby" className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-700">Использование материнского капитала</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Участие в программе молодой семьи</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Search" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Поиск банков с программами 100% финансирования</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="UserPlus" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Привлечение поручителей с недвижимостью в залог</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                  <Icon name="Heart" className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Семейная ипотека: как взять и кому доступна
                </h2>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-rose-600 mr-2" />
                  Можно ли взять семейную ипотеку в 2025 году
                </h3>
                <p className="text-gray-700 mb-4">
                  Семейная ипотека – одна из самых выгодных программ господдержки. Условия в 2025 году:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
                    <span className="text-gray-600">Процентная ставка:</span>
                    <span className="font-semibold text-rose-600">6% годовых</span>
                  </div>
                  <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
                    <span className="text-gray-600">Максимальная сумма:</span>
                    <span className="font-semibold">до 12 млн рублей</span>
                  </div>
                  <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
                    <span className="text-gray-600">Срок кредитования:</span>
                    <span className="font-semibold">до 30 лет</span>
                  </div>
                  <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
                    <span className="text-gray-600">Первоначальный взнос:</span>
                    <span className="font-semibold">от 15%</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Users" className="w-5 h-5 text-blue-600 mr-2" />
                    Кто может взять семейную ипотеку
                  </h3>
                  <p className="text-gray-700 mb-4">Право на семейную ипотеку имеют:</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Baby" className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700 text-sm">Семьи с детьми, рожденными с 1 января 2018 года</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Heart" className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700 text-sm">Семьи, усыновившие детей после 1 января 2018 года</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">Семьи с детьми-инвалидами (независимо от даты рождения)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Home" className="w-5 h-5 text-green-600 mr-2" />
                    Можно ли взять семейную ипотеку на вторичное жилье
                  </h3>
                  <p className="text-gray-700 mb-4">Семейную ипотеку можно взять на:</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Building2" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Новостройки от аккредитованных застройщиков</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Home" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">Вторичное жилье (с 2024 года)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="TreePine" className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-700 text-sm">Частные дома с земельными участками</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Building" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700 text-sm">Апартаменты в жилых комплексах</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Icon name="Building2" className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Где взять ипотеку: сравнение банков и условий
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  В каком банке взять ипотеку выгоднее
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">С</span>
                    </div>
                    Сбербанк
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Percent" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Ставка от 6% по семейной ипотеке</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Широкая сеть отделений</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Быстрое рассмотрение заявок</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">В</span>
                    </div>
                    ВТБ
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingDown" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Конкурентные ставки</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Settings" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Гибкие условия по доходам</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Программы для зарплатных клиентов</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">Г</span>
                    </div>
                    Газпромбанк
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Специальные предложения для бюджетников</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Льготы для участников программ господдержки</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">А</span>
                    </div>
                    Альфа-Банк
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Globe" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Быстрое онлайн-оформление</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="User" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Индивидуальный подход к заемщикам</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Percent" className="w-5 h-5 text-amber-600 mr-2" />
                  Процентные ставки по ипотеке в 2025 году
                </h3>
                <p className="text-gray-700 mb-4">Актуальные ставки по основным программам:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-medium">Базовая ипотека:</span>
                      <span className="font-bold">от 16-20%</span>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-medium">Семейная ипотека:</span>
                      <span className="font-bold text-green-600">6%</span>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-medium">Льготная ипотека:</span>
                      <span className="font-bold">от 8%</span>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-medium">Ипотека на вторичное жилье:</span>
                      <span className="font-bold">от 18-22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Icon name="Route" className="w-6 h-6 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Взять ипотеку на квартиру: пошаговый алгоритм
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Как взять квартиру в ипотеку
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                    Определение бюджета
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calculator" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Рассчитайте максимальную сумму кредита</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Учтите ежемесячный доход и расходы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="PiggyBank" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Заложите резерв на дополнительные расходы</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                    Выбор банка и программы
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Search" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Сравните условия разных банков</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="FileText" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Изучите требования к заемщикам</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Target" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Подберите подходящую программу</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                    Подача заявки
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Edit" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Заполните анкету онлайн или в отделении</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="FileStack" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Приложите необходимые документы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Дождитесь предварительного одобрения</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Icon name="CheckCircle2" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Заключение
                  </h2>
                  <p className="text-gray-600">Ключевые принципы получения ипотеки в 2025 году</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Взять ипотеку в 2025 году стало проще благодаря разнообразным программам господдержки. Семейная ипотека под 6% годовых, возможность использования материнского капитала и программы без первоначального взноса делают недвижимость доступнее для широкого круга заемщиков.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    При выборе ипотечной программы важно учитывать не только процентную ставку, но и полную стоимость кредита, включая все комиссии и дополнительные расходы. Тщательная подготовка документов, улучшение кредитной истории и правильный выбор банка помогут получить наиболее выгодные условия.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Icon name="AlertTriangle" className="w-6 h-6 text-blue-600 mt-0.5" />
                    <p className="text-gray-800 font-medium leading-relaxed">
                      Помните, что ипотека – это долгосрочное обязательство, поэтому реалистично оценивайте свои финансовые возможности и не забывайте о необходимости создания финансовой подушки безопасности.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Mortgage;