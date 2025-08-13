import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import BankOffers from '@/components/sections/BankOffers';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ComparisonTable from '@/components/sections/ComparisonTable';

const DebitCardsPage = () => {
  const heroData = {
    title: "Дебетовые карты банков 2025",
    subtitle: "Выбор дебетовой карты в 2025 году стал особенно актуальным вопросом для российских потребителей. Современные банки предлагают широкий спектр дебетовых карт с различными условиями обслуживания, программами кэшбэка и дополнительными услугами. В этом обзоре мы рассмотрим лучшие предложения от ведущих банков России и поможем вам заказать дебетовую карту, которая максимально соответствует вашим потребностям.",
    ctaText: "Выбрать дебетовую карту",
    backgroundImage: "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"
  };

  const banks = [
    {
      name: "Альфа-Банк",
      description: "Лидер по популярности поисковых запросов. Дебетовая карта Альфа-Банка привлекает клиентов бесплатным обслуживанием и выгодными условиями кэшбэка.",
      rate: "до 33%",
      features: [
        "Бесплатная дебетовая карта навсегда",
        "Доставка карты на дом", 
        "Кэшбэк до 33% в категориях",
        "Процент на остаток до 7%"
      ],
      color: "bg-red-500",
      isPopular: true
    },
    {
      name: "ВТБ",
      description: "Дебетовая карта ВТБ занимает второе место по популярности среди пользователей. Банк предлагает надежные условия обслуживания.",
      rate: "до 15%", 
      features: [
        "Карта с бесплатным обслуживанием",
        "Онлайн-оформление за 5 минут",
        "Кэшбэк в популярных категориях",
        "Широкая сеть банкоматов"
      ],
      color: "bg-blue-600"
    },
    {
      name: "Тинькофф",
      description: "Дебетовая карта Тинькофф известна инновационными решениями и удобным мобильным приложением.",
      rate: "до 30%",
      features: [
        "100% онлайн-банк",
        "Бесплатная доставка дебетовой карты", 
        "Процент на остаток",
        "Развитая программа лояльности"
      ],
      color: "bg-yellow-500"
    },
    {
      name: "Сбербанк",
      description: "Дебетовая карта Сбербанка остается классическим выбором для консервативных клиентов.",
      rate: "до 10%",
      features: [
        "Самая большая сеть отделений",
        "Надежность и стабильность",
        "Различные типы дебетовых карт",
        "Интеграция с госуслугами"
      ],
      color: "bg-green-600"
    },
    {
      name: "ОЗОН Банк", 
      description: "Растущая популярность дебетовой карты ОЗОН связана с интеграцией с экосистемой интернет-торговли.",
      rate: "до 25%",
      features: [
        "Кэшбэк за покупки в ОЗОН",
        "Быстрое оформление онлайн",
        "Интеграция с маркетплейсом", 
        "Современный дизайн карты"
      ],
      color: "bg-purple-600"
    },
    {
      name: "МТС Банк",
      description: "Дебетовая карта МТС Банка предлагает уникальные возможности для клиентов оператора связи.",
      rate: "до 20%",
      features: [
        "Кэшбэк за мобильную связь",
        "Интеграция с услугами МТС",
        "Выгодные тарифы",
        "Бесплатное обслуживание карты"
      ],
      color: "bg-red-600"
    }
  ];

  const steps = [
    {
      title: "Выберите банк",
      description: "Сравните предложения банков и выберите карту с подходящими условиями"
    },
    {
      title: "Подайте онлайн-заявку",
      description: "Заполните заявку на сайте банка за 5-10 минут"
    },
    {
      title: "Получите одобрение",
      description: "Дождитесь решения банка в течение 5-15 минут"
    },
    {
      title: "Получите карту",
      description: "Получите карту курьером на дом или в отделении банка"
    }
  ];

  const features = [
    {
      title: "Бесплатная дебетовая карта",
      description: "Большинство современных банков предлагают карты без платы за обслуживание при соблюдении определенных условий."
    },
    {
      title: "Кэшбэк программы",
      description: "Получайте возврат средств за покупки в различных категориях: рестораны, АЗС, супермаркеты."
    },
    {
      title: "Процент на остаток",
      description: "Многие дебетовые карты предлагают начисление процентов на остаток средств на счете от 3% до 8% годовых."
    },
    {
      title: "Доставка на дом",
      description: "Заказать дебетовую карту с доставкой на дом особенно актуально для занятых людей и жителей удаленных районов."
    },
    {
      title: "Мобильное приложение",
      description: "Удобные мобильные приложения для управления картой и контроля расходов 24/7."
    },
    {
      title: "Широкая сеть банкоматов",
      description: "Снимайте наличные без комиссии в банкоматах партнерской сети по всей России."
    }
  ];

  const comparisonData = [
    {
      bank: "Альфа-Банк",
      cashback: "До 33%",
      categories: "Рестораны, АЗС, супермаркеты",
      interestRate: "До 7%",
      freeService: "Да"
    },
    {
      bank: "Тинькофф", 
      cashback: "До 30%",
      categories: "Категории на выбор",
      interestRate: "До 6%",
      freeService: "Да"
    },
    {
      bank: "ВТБ",
      cashback: "До 15%", 
      categories: "Транспорт, развлечения",
      interestRate: "До 5%",
      freeService: "Да"
    },
    {
      bank: "ОЗОН Банк",
      cashback: "До 25%",
      categories: "ОЗОН, интернет-покупки",
      interestRate: "До 8%",
      freeService: "Да"
    }
  ];

  const faqs = [
    {
      question: "Почему дебетовые карты так популярны?",
      answer: "Согласно анализу поисковых запросов, интерес к дебетовым картам достигает почти миллиона запросов в месяц. Пользователи активно ищут информацию о том, как оформить дебетовую карту онлайн, какие банки предлагают бесплатное обслуживание и доставку карт на дом."
    },
    {
      question: "Как заказать дебетовую карту онлайн?",
      answer: "Выберите банк и тип карты, заполните онлайн-заявку, дождитесь одобрения (5-15 минут), получите карту курьером или в отделении."
    },
    {
      question: "Какие документы нужны для оформления дебетовой карты?",
      answer: "Для оформления дебетовой карты обычно требуется только паспорт гражданина РФ. Некоторые банки могут запросить справку о доходах для премиальных карт."
    },
    {
      question: "Можно ли получить дебетовую карту с доставкой на дом?",
      answer: "Да, большинство банков предлагают бесплатную доставку дебетовых карт курьером. Это особенно удобно для жителей удаленных районов и занятых людей."
    },
    {
      question: "Что такое виртуальная дебетовая карта?",
      answer: "Виртуальная дебетовая карта - это современное решение для онлайн-покупок без физического носителя. Вы получаете номер карты мгновенно и можете использовать её для безопасных интернет-платежей."
    },
    {
      question: "Какие ошибки часто допускают при выборе дебетовой карты?",
      answer: "Основные ошибки: выбор только по размеру кэшбэка, игнорирование условий бесплатного обслуживания, неучет лимитов и ограничений, выбор без учета личных потребностей."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Дебетовые карты банков 2025",
    "description": "Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.",
    "provider": {
      "@type": "Organization", 
      "name": "ОДОБРЯЕМ"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Дебетовые карты",
      "itemListElement": banks.map(bank => ({
        "@type": "Offer",
        "name": bank.name,
        "description": bank.description,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0",
          "priceCurrency": "RUB"
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Заказать Дебетовую карту : сравнение условий и выбор лучшей карты</title>
        <meta name="description" content="Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка." />
        <meta name="keywords" content="дебетовая карта, заказать дебетовую карту, бесплатная дебетовая карта, дебетовая карта онлайн, кэшбэк карта, банки россии, альфа банк, втб, тинькофф, сбербанк, озон банк, мтс банк" />
        <link rel="canonical" href="https://example.com/debit-cards" />
        
        <meta property="og:title" content="Заказать Дебетовую карту : сравнение условий и выбор лучшей карты" />
        <meta property="og:description" content="Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Hero {...heroData} />
        
        <BankOffers 
          title="Топ банков для заказа дебетовой карты"
          subtitle="Сравните лучшие предложения от ведущих банков России"
          banks={banks}
        />

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Сравнение дебетовых карт с кэшбэком
              </h2>
              <p className="text-xl text-gray-600">
                Программы кэшбэка становятся важным фактором выбора дебетовой карты
              </p>
            </div>
            
            <ComparisonTable 
              headers={["Банк", "Максимальный кэшбэк", "Популярные категории", "Процент на остаток", "Бесплатное обслуживание"]}
              data={comparisonData}
              keyField="bank"
            />
          </div>
        </div>

        <HowItWorks 
          title="Как заказать дебетовую карту: пошаговая инструкция"
          subtitle="Простой алгоритм получения дебетовой карты от выбора банка до получения карты"
          steps={steps}
        />

        <FeaturesGrid 
          title="Ключевые особенности дебетовых карт"
          subtitle="Важные функции и преимущества современных дебетовых карт"
          features={features}
        />

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Специальные типы дебетовых карт
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Виртуальная дебетовая карта
                </h3>
                <p className="text-gray-700 mb-4">
                  Современное решение для онлайн-покупок и цифровых платежей без физического носителя.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>✓ Мгновенное получение</div>
                  <div>✓ Безопасность онлайн-платежей</div>
                  <div>✓ Нет риска потери физической карты</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Детская дебетовая карта
                </h3>
                <p className="text-gray-700 mb-4">
                  Специальные дебетовые карты для детей и подростков с 6-14 лет с родительским контролем.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>✓ Лимиты трат</div>
                  <div>✓ Уведомления родителям</div>
                  <div>✓ Обучение финансовой грамотности</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Премиальная дебетовая карта
                </h3>
                <p className="text-gray-700 mb-4">
                  Карты с расширенными привилегиями для клиентов с высокими доходами.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>✓ Повышенные лимиты</div>
                  <div>✓ Консьерж-сервис</div>
                  <div>✓ VIP-зоны в аэропортах</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Критерии выбора дебетовой карты
              </h2>
              <p className="text-xl text-gray-600">
                Как выбрать лучшую дебетовую карту для ваших потребностей
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  💰 Финансовые условия
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">1.</span>
                    <div>
                      <strong>Стоимость обслуживания:</strong> Ищите бесплатные дебетовые карты или с минимальной платой
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">2.</span>
                    <div>
                      <strong>Кэшбэк программы:</strong> Оцените соответствие категорий вашим тратам
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">3.</span>
                    <div>
                      <strong>Процент на остаток:</strong> Дополнительный доход с ваших сбережений
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  📱 Удобство использования
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 font-semibold mr-2">1.</span>
                    <div>
                      <strong>Мобильное приложение:</strong> Качество и функциональность банковского приложения
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-semibold mr-2">2.</span>
                    <div>
                      <strong>Сеть банкоматов:</strong> Доступность снятия наличных без комиссии
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-semibold mr-2">3.</span>
                    <div>
                      <strong>Служба поддержки:</strong> Качество и доступность клиентского сервиса
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">
                ⚠️ Популярные ошибки при выборе дебетовой карты
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-red-700">
                <div className="space-y-2">
                  <div>× Выбор только по размеру кэшбэка</div>
                  <div>× Игнорирование условий бесплатного обслуживания</div>
                  <div>× Неучет лимитов и ограничений</div>
                </div>
                <div className="space-y-2">
                  <div>× Пренебрежение отзывами других клиентов</div>
                  <div>× Неизучение тарифов на дополнительные услуги</div>
                  <div>× Выбор без учета личных потребностей</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Отзывы клиентов о дебетовых картах
              </h2>
              <p className="text-xl text-gray-600">
                Анализ отзывов показывает, что клиенты наиболее высоко ценят
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  ✅ Положительные аспекты
                </h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Бесплатное обслуживание при выполнении условий
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Быстрое оформление дебетовой карты онлайн
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Удобные мобильные приложения
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Выгодные программы кэшбэка
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Надежность крупных банков
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Доставка карты на дом
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  ❌ Частые жалобы
                </h3>
                <div className="space-y-3 text-red-700">
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Скрытые комиссии за некоторые операции
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Сложности с отменой карты
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Ограничения в программах кэшбэка
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Проблемы с работой технической поддержки
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Длительное время доставки в отдаленные регионы
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">×</span>
                    Изменение условий обслуживания
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Заключение и рекомендации
              </h2>
              <p className="text-xl text-gray-600">
                Выбор дебетовой карты в 2025 году требует комплексного подхода
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  👋 Для начинающих пользователей
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>• Выбирайте бесплатные дебетовые карты с простыми условиями</div>
                  <div>• Обратите внимание на Альфа-Банк или ВТБ</div>
                  <div>• Изучите базовые функции мобильного приложения</div>
                  <div>• Начните с карты без сложных программ лояльности</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  🎯 Для опытных пользователей
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>• Сравните программы кэшбэка разных банков</div>
                  <div>• Рассмотрите Тинькофф или ОЗОН Банк для инноваций</div>
                  <div>• Изучите возможности получения процентов на остаток</div>
                  <div>• Оцените дополнительные сервисы и привилегии</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                💡 Главный совет
              </h3>
              <p className="text-blue-700">
                Перед тем как заказать дебетовую карту, обязательно изучите актуальные условия на официальном сайте банка, так как тарифы и программы лояльности могут изменяться. Не стесняйтесь обращаться в службу поддержки банка для уточнения всех интересующих вас вопросов.
              </p>
            </div>
          </div>
        </div>

        <FAQ faqs={faqs} />
        
        <CallToAction 
          title="Готовы заказать дебетовую карту?"
          subtitle="Сравните предложения банков и выберите карту с лучшими условиями для ваших потребностей"
          ctaText="Выбрать дебетовую карту"
        />
        
        <Footer />
      </div>
    </>
  );
};

export default DebitCardsPage;