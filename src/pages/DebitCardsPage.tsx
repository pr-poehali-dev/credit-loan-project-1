import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const DebitCardsPage = () => {
  useEffect(() => {
    // SEO Title
    document.title = 'Заказать Дебетовую карту : сравнение условий и выбор лучшей карты';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Keywords meta
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.getElementsByTagName('head')[0].appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'дебетовая карта, заказать дебетовую карту, бесплатная дебетовая карта, дебетовая карта онлайн, кэшбэк карта, банки россии, альфа банк, втб, тинькофф, сбербанк, озон банк, мтс банк');
    
    // Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.getElementsByTagName('head')[0].appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Заказать Дебетовую карту : сравнение условий и выбор лучшей карты');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.getElementsByTagName('head')[0].appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.');

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.getElementsByTagName('head')[0].appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.getElementsByTagName('head')[0].appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/debit-cards');

    // JSON-LD structured data
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Дебетовые карты банков 2025",
      "description": "Полное руководство по выбору лучшей дебетовой карты с бесплатным обслуживанием. Заказать карту из банка.",
      "provider": {
        "@type": "Organization", 
        "name": "ОДОБРЯЕМ"
      }
    });
    document.getElementsByTagName('head')[0].appendChild(jsonLdScript);

    // Cleanup function
    return () => {
      if (jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Дебетовые карты банков 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Выбор дебетовой карты в 2025 году стал особенно актуальным вопросом для российских потребителей. Современные банки предлагают широкий спектр дебетовых карт с различными условиями обслуживания, программами кэшбэка и дополнительными услугами.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Выбрать дебетовую карту
          </Button>
        </div>
      </section>

      {/* Popularity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему дебетовые карты так популярны?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Согласно анализу поисковых запросов, интерес к дебетовым картам достигает почти миллиона запросов в месяц. Пользователи активно ищут информацию о том, как оформить дебетовую карту онлайн, какие банки предлагают бесплатное обслуживание и доставку карт на дом.
            </p>
          </div>
        </div>
      </section>

      {/* Top Banks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Топ банков для заказа дебетовой карты
            </h2>
            <p className="text-xl text-gray-600">
              Сравните лучшие предложения от ведущих банков России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Альфа-Банк */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Альфа-Банк</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Лидер по популярности поисковых запросов. Дебетовая карта Альфа-Банка привлекает клиентов бесплатным обслуживанием и выгодными условиями кэшбэка.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Бесплатная дебетовая карта навсегда
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Доставка карты на дом
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Кэшбэк до 33% в категориях
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Процент на остаток до 7%
                </div>
              </div>
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Оформить карту
              </Button>
            </div>

            {/* ВТБ */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ВТБ</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Дебетовая карта ВТБ занимает второе место по популярности среди пользователей. Банк предлагает надежные условия обслуживания.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Карта с бесплатным обслуживанием
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Онлайн-оформление за 5 минут
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Кэшбэк в популярных категориях
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Широкая сеть банкоматов
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Оформить карту
              </Button>
            </div>

            {/* Тинькофф */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Тинькофф</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Дебетовая карта Тинькофф известна инновационными решениями и удобным мобильным приложением.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  100% онлайн-банк
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Бесплатная доставка дебетовой карты
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Процент на остаток
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Развитая программа лояльности
                </div>
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                Оформить карту
              </Button>
            </div>

            {/* Сбербанк */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Сбербанк</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Дебетовая карта Сбербанка остается классическим выбором для консервативных клиентов.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Самая большая сеть отделений
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Надежность и стабильность
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Различные типы дебетовых карт
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Интеграция с госуслугами
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Оформить карту
              </Button>
            </div>

            {/* ОЗОН Банк */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ОЗОН Банк</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Растущая популярность дебетовой карты ОЗОН связана с интеграцией с экосистемой интернет-торговли.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Кэшбэк за покупки в ОЗОН
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Быстрое оформление онлайн
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Интеграция с маркетплейсом
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Современный дизайн карты
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Оформить карту
              </Button>
            </div>

            {/* МТС Банк */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">МТС Банк</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Дебетовая карта МТС Банка предлагает уникальные возможности для клиентов оператора связи.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Кэшбэк за мобильную связь
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Интеграция с услугами МТС
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Выгодные тарифы
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Бесплатное обслуживание карты
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Оформить карту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Сравнение дебетовых карт с кэшбэком
            </h2>
            <p className="text-xl text-gray-600">
              Программы кэшбэка становятся важным фактором выбора дебетовой карты
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Банк</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Максимальный кэшбэк</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Популярные категории</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Процент на остаток</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Бесплатное обслуживание</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Альфа-Банк</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 33%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Рестораны, АЗС, супермаркеты</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 7%</td>
                  <td className="px-6 py-4 text-sm text-green-600">Да</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Тинькофф</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 30%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Категории на выбор</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 6%</td>
                  <td className="px-6 py-4 text-sm text-green-600">Да</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">ВТБ</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 15%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Транспорт, развлечения</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 5%</td>
                  <td className="px-6 py-4 text-sm text-green-600">Да</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">ОЗОН Банк</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 25%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">ОЗОН, интернет-покупки</td>
                  <td className="px-6 py-4 text-sm text-gray-600">До 8%</td>
                  <td className="px-6 py-4 text-sm text-green-600">Да</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Order Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как заказать дебетовую карту: пошаговая инструкция
            </h2>
            <p className="text-xl text-gray-600">
              Простой алгоритм получения дебетовой карты от выбора банка до получения карты
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Выберите банк</h3>
              <p className="text-gray-600">Сравните предложения банков и выберите карту с подходящими условиями</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Подайте онлайн-заявку</h3>
              <p className="text-gray-600">Заполните заявку на сайте банка за 5-10 минут</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Получите одобрение</h3>
              <p className="text-gray-600">Дождитесь решения банка в течение 5-15 минут</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Получите карту</h3>
              <p className="text-gray-600">Получите карту курьером на дом или в отделении банка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ключевые особенности дебетовых карт
            </h2>
            <p className="text-xl text-gray-600">
              Важные функции и преимущества современных дебетовых карт
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Бесплатная дебетовая карта
              </h3>
              <p className="text-gray-700">
                Большинство современных банков предлагают карты без платы за обслуживание при соблюдении определенных условий.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Percent" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Кэшбэк программы
              </h3>
              <p className="text-gray-700">
                Получайте возврат средств за покупки в различных категориях: рестораны, АЗС, супермаркеты.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Процент на остаток
              </h3>
              <p className="text-gray-700">
                Многие дебетовые карты предлагают начисление процентов на остаток средств на счете от 3% до 8% годовых.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Truck" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Доставка на дом
              </h3>
              <p className="text-gray-700">
                Заказать дебетовую карту с доставкой на дом особенно актуально для занятых людей и жителей удаленных районов.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Smartphone" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Мобильное приложение
              </h3>
              <p className="text-gray-700">
                Удобные мобильные приложения для управления картой и контроля расходов 24/7.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Широкая сеть банкоматов
              </h3>
              <p className="text-gray-700">
                Снимайте наличные без комиссии в банкоматах партнерской сети по всей России.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Заключение и рекомендации
            </h2>
            <p className="text-xl text-gray-600">
              Выбор дебетовой карты в 2025 году требует комплексного подхода
            </p>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы заказать дебетовую карту?
          </h2>
          <p className="text-xl mb-8">
            Сравните предложения банков и выберите карту с лучшими условиями для ваших потребностей
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Выбрать дебетовую карту
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DebitCardsPage;