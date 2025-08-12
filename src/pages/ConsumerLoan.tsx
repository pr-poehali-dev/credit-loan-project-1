import React from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const ConsumerLoan = () => {
  useEffect(() => {
    document.title = 'Потребительский кредит 2025: ставки банков, калькулятор';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Потребительские кредиты в банках 2025: сравните ставки от 4.5%, рассчитайте платеж онлайн. Выгодные условия в Сбербанке, ВТБ, Альфа-Банке. Оформите за 5 минут!');
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
              Потребительский кредит 2025: полный гид по выбору лучших предложений банков
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Потребительский кредит остается одним из самых востребованных финансовых продуктов в России. В 2025 году банки предлагают разнообразные условия кредитования, и важно понимать, как выбрать наиболее выгодное предложение для ваших потребностей.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon name="HelpCircle" className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Что такое потребительский кредит и зачем он нужен
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Потребительский кредит – это денежные средства, которые банк предоставляет физическим лицам на любые личные нужды без указания конкретной цели. В отличие от целевых кредитов, заемщик может свободно распоряжаться полученными деньгами.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Target" className="w-5 h-5 text-blue-600 mr-2" />
                  Основные цели получения потребительского кредита
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="ShoppingCart" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Покупка товаров длительного пользования</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Home" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Ремонт и обустройство жилья</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="GraduationCap" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Образование и медицинские услуги</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Plane" className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">Путешествия и отдых</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <Icon name="RefreshCw" className="w-4 h-4 text-red-500" />
                    <span className="text-gray-700">Рефинансирование других долгов</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon name="Percent" className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Актуальные ставки по потребительским кредитам в 2025 году
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Процентные ставки ведущих банков
                </h3>
                <p className="text-gray-700 mb-6">
                  Ставки по потребительским кредитам в 2025 году варьируются в зависимости от банка, суммы и срока кредитования:
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">С</span>
                    </div>
                    Сбербанк потребительский кредит
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ставка:</span>
                      <span className="font-semibold">от 4,5% до 21,9% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-semibold">от 30 000 до 5 000 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-semibold">от 3 месяцев до 7 лет</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">В</span>
                    </div>
                    ВТБ потребительский кредит
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ставка:</span>
                      <span className="font-semibold">от 5,9% до 25,9% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-semibold">от 100 000 до 7 000 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-semibold">от 6 месяцев до 7 лет</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">А</span>
                    </div>
                    Альфа-Банк потребительский кредит
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ставка:</span>
                      <span className="font-semibold">от 5,5% до 49% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-semibold">от 50 000 до 5 000 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-semibold">от 1 года до 5 лет</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="TrendingUp" className="w-5 h-5 text-amber-600 mr-2" />
                  Факторы, влияющие на процентную ставку
                </h4>
                <p className="text-gray-700 mb-4">
                  Банки определяют процентную ставку по потребительскому кредиту индивидуально, учитывая:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="History" className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-700">Кредитную историю заемщика</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="DollarSign" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Официальный доход</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="User" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Возраст и трудовой стаж</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Сумму и срок кредита</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <Icon name="CreditCard" className="w-4 h-4 text-indigo-500" />
                    <span className="text-gray-700">Наличие зарплатного проекта в банке</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Icon name="Calculator" className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Калькулятор потребительского кредита: как рассчитать платеж
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Кредитный калькулятор потребительского кредита онлайн
                </h3>
                <p className="text-gray-700 mb-6">
                  Для расчета ежемесячного платежа по потребительскому кредиту используется формула аннуитетных платежей:
                </p>
                
                <div className="bg-slate-100 rounded-lg p-6 font-mono text-center mb-6">
                  <div className="text-lg font-semibold">PMT = S × [i × (1 + i)^n] / [(1 + i)^n - 1]</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">PMT</span>
                    <span className="text-gray-600">– ежемесячный платеж</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">S</span>
                    <span className="text-gray-600">– сумма кредита</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">i</span>
                    <span className="text-gray-600">– месячная процентная ставка</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">n</span>
                    <span className="text-gray-600">– количество месяцев</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Calculator" className="w-5 h-5 text-green-600 mr-2" />
                  Калькулятор Сбербанка потребительский кредит
                </h4>
                <p className="text-gray-700 mb-4">
                  Сбербанк предоставляет удобный онлайн-калькулятор для расчета потребительского кредита. Калькулятор позволяет:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Рассчитать ежемесячный платеж</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Определить переплату по кредиту</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Выбрать оптимальный срок кредитования</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Сравнить различные варианты</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Icon name="Target" className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Как выбрать выгодный потребительский кредит
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Критерии выбора лучшего предложения
                </h3>
                <p className="text-gray-700 mb-6">
                  При выборе потребительского кредита обращайте внимание на:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    Процентную ставку
                  </h4>
                  <p className="text-gray-700">
                    Ищите предложения с низкой процентной ставкой. Разница даже в 1-2% может существенно повлиять на переплату.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    Полную стоимость кредита (ПСК)
                  </h4>
                  <p className="text-gray-700">
                    ПСК включает все расходы по кредиту: проценты, комиссии, страховки.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    Дополнительные услуги
                  </h4>
                  <p className="text-gray-700">
                    Некоторые банки навязывают страховки и дополнительные услуги, увеличивающие стоимость кредита.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                    Досрочное погашение
                  </h4>
                  <p className="text-gray-700">
                    Проверьте возможность досрочного погашения без комиссий.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="TrendingDown" className="w-5 h-5 text-green-600 mr-2" />
                  Потребительский кредит с низкой процентной ставкой
                </h4>
                <p className="text-gray-700 mb-4">
                  Самые низкие ставки по потребительским кредитам предлагают:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Банки для зарплатных клиентов: ставки от 4,5-6%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Building" className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Банки с государственным участием: Сбербанк, ВТБ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">Региональные банки: часто предлагают конкурентные условия</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Icon name="FileText" className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Условия получения потребительского кредита
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="User" className="w-5 h-5 text-blue-600 mr-2" />
                    Требования к заемщикам
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Стандартные требования банков к заемщикам:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Calendar" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Возраст: от 21 до 65-75 лет</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Flag" className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700">Гражданство: РФ</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Briefcase" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Стаж работы: от 3-6 месяцев на последнем месте</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingUp" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Доход: справка 2-НДФЛ или справка по форме банка</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="FileStack" className="w-5 h-5 text-green-600 mr-2" />
                    Необходимые документы
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Для оформления потребительского кредита потребуются:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Паспорт РФ</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Receipt" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Справка о доходах</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="BookOpen" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Трудовая книжка или трудовой договор</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Plus" className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">Дополнительные документы (по требованию банка)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon name="Banknote" className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Потребительский кредит наличными: особенности получения
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-emerald-600 mr-2" />
                    Преимущества кредита наличными
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Потребительский кредит наличными обладает рядом преимуществ:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Быстрое получение денег</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Unlock" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Свобода в использовании средств</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Отсутствие залога и поручителей</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Возможность онлайн-оформления</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Route" className="w-5 h-5 text-blue-600 mr-2" />
                    Процедура получения
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">1</div>
                      <span className="text-gray-700">Подача заявки онлайн или в отделении банка</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">2</div>
                      <span className="text-gray-700">Рассмотрение заявки (от 15 минут до 3 дней)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">3</div>
                      <span className="text-gray-700">Предоставление документов</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">4</div>
                      <span className="text-gray-700">Подписание кредитного договора</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">5</div>
                      <span className="text-gray-700">Получение денег наличными или на карту</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Icon name="Building2" className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Потребительские кредиты в банках: сравнение предложений
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Топ-5 банков с выгодными условиями
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                    Сбербанк
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Надежность и репутация</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Широкая сеть отделений</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Льготы для зарплатных клиентов</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                    ВТБ
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Высокие суммы кредитования</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Settings" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Гибкие условия</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700">Программы лояльности</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                    Альфа-Банк
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Быстрое рассмотрение заявок</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="User" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Индивидуальный подход</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Smartphone" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Удобное мобильное приложение</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                    Совкомбанк
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Percent" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Конкурентные ставки</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Программы рассрочки</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Gift" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Специальные предложения</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
                    Региональные банки
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700">Более лояльные условия</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Учет местных особенностей</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Персональный сервис</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Icon name="HelpCircle" className="w-6 h-6 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Частые вопросы о потребительских кредитах
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="FileX" className="w-5 h-5 text-blue-600 mr-2" />
                    Можно ли получить потребительский кредит без справок?
                  </h3>
                  <p className="text-gray-700">
                    Многие банки предлагают кредиты по двум документам (паспорт + водительские права или СНИЛС), но ставка будет выше.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="Target" className="w-5 h-5 text-green-600 mr-2" />
                    Какой потребительский кредит лучше выбрать?
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Выбор зависит от ваших потребностей:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="ShoppingCart" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Для крупных покупок – кредит с максимальной суммой</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Для краткосрочных нужд – кредит с возможностью досрочного погашения</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Piggy Bank" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Для экономии – кредит с минимальной ставкой</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="TrendingUp" className="w-5 h-5 text-purple-600 mr-2" />
                    Как улучшить условия кредитования?
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Для получения лучших условий:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="History" className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Поддерживайте хорошую кредитную историю</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Оформите зарплатную карту в банке-кредиторе</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">Рассмотрите возможность привлечения поручителей</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Settings" className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700">Выберите оптимальную сумму и срок кредита</span>
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
                  <p className="text-gray-600">Ключевые принципы выбора потребительского кредита</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Потребительский кредит в 2025 году остается актуальным финансовым инструментом для решения различных задач. При выборе кредита важно учитывать не только процентную ставку, но и полную стоимость кредита, условия досрочного погашения и репутацию банка.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-gray-700 leading-relaxed">
                    Используйте кредитные калькуляторы для расчета платежей, сравнивайте предложения разных банков и внимательно читайте условия договора. Помните, что ответственный подход к выбору и обслуживанию кредита поможет вам не только решить финансовые задачи, но и улучшить кредитную историю для будущих займов.
                  </p>
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

export default ConsumerLoan;