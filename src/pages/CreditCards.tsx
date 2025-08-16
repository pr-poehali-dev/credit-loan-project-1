import { Helmet } from 'react-helmet-async';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const CreditCards = () => {
  return (
    <>
      <Helmet>
        <title>Кредитные карты 2025: оформить онлайн без отказа с плохой кредитной историей</title>
        <meta name="description" content="Кредитные карты банков 2025 ★ Оформить онлайн без отказа ★ С плохой кредитной историей ★ Без процентов до 365 дней ★ Сравнение условий Сбербанк, Альфа-Банк, Т - Банк ★ Займы на карту срочно" />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Кредитные карты 2025: полное руководство по выбору и оформлению
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Кредитные карты стали неотъемлемой частью финансовой жизни россиян. В 2025 году банки предлагают улучшенные условия получения кредитных карт, включая программы для клиентов с плохой кредитной историей и возможность оформления без отказа.
            </p>
          </div>

          {/* Top Banks Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Топ-5 банков с лучшими кредитными картами</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Альфа-Банк */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <Icon name="CreditCard" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Альфа-Банк</h3>
                </div>
                <p className="text-gray-600 mb-4">Кредитная карта Альфа-Банк — самый популярный выбор среди россиян.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Льготный период до 365 дней без процентов</li>
                  <li>• Оформление онлайн за 5 минут</li>
                  <li>• Одобрение даже с плохой КИ</li>
                  <li>• Кредитный лимит до 3 000 000 ₽</li>
                </ul>
              </div>

              {/* Сбербанк */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Icon name="Shield" className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Сбербанк</h3>
                </div>
                <p className="text-gray-600 mb-4">Кредитная карта Сбербанк остается выбором консерваторов.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Оформление в отделении или онлайн</li>
                  <li>• Льготный период до 120 дней</li>
                  <li>• Интеграция с экосистемой Сбера</li>
                  <li>• Снятие без комиссии в банкоматах</li>
                </ul>
              </div>

              {/* Т-Банк */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-black p-3 rounded-lg mr-4">
                    <Icon name="Smartphone" className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Т-Банк</h3>
                </div>
                <p className="text-gray-600 mb-4">Кредитная карта Т-Банк Платинум для продвинутых пользователей.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 365 дней без процентов</li>
                  <li>• Cashback до 30% в категориях</li>
                  <li>• Бесплатная доставка на дом</li>
                  <li>• Полностью цифровое обслуживание</li>
                </ul>
              </div>

              {/* ВТБ */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Icon name="Building" className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">ВТБ</h3>
                </div>
                <p className="text-gray-600 mb-4">ВТБ кредитная карта с привлекательными условиями.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Льготный период до 180 дней</li>
                  <li>• Низкая ставка от 11,9% годовых</li>
                  <li>• Снятие наличных без комиссии</li>
                  <li>• Программа лояльности</li>
                </ul>
              </div>

              {/* Озон Банк */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Icon name="ShoppingBag" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Озон Банк</h3>
                </div>
                <p className="text-gray-600 mb-4">Кредитная карта Озон идеально подходит для онлайн-шопинга.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Повышенный cashback на Озон до 25%</li>
                  <li>• Бесплатная доставка Озон</li>
                  <li>• Льготный период 120 дней</li>
                  <li>• Мгновенное одобрение онлайн</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Application Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Оформление кредитной карты: пошаговое руководство</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Способы оформления</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Globe" className="text-blue-600 mr-3" size={20} />
                    <span>Оформить кредитную карту онлайн — самый быстрый способ</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Building" className="text-green-600 mr-3" size={20} />
                    <span>В отделении банка с консультацией специалиста</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Smartphone" className="text-purple-600 mr-3" size={20} />
                    <span>Через мобильное приложение банка</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-orange-600 mr-3" size={20} />
                    <span>По телефону горячей линии</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Документы для оформления</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="FileText" className="text-blue-600 mr-3" size={20} />
                    <span>Паспорт гражданина РФ</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Receipt" className="text-green-600 mr-3" size={20} />
                    <span>Справка о доходах (не всегда требуется)</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="FolderOpen" className="text-purple-600 mr-3" size={20} />
                    <span>Дополнительные документы по требованию банка</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* No Rejection Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Кредитные карты без отказа: миф или реальность?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Банки, которые редко отказывают</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Почта Банк</div>
                    <div className="text-gray-600">Лояльные требования</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Совкомбанк</div>
                    <div className="text-gray-600">Упрощенное одобрение</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Газпромбанк</div>
                    <div className="text-gray-600">Гибкие критерии</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Кредитные карты с плохой кредитной историей</h3>
                <p className="text-gray-600 mb-4">Даже с проблемной кредитной историей можно получить карту:</p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Хоум Кредит Банк</div>
                    <div className="text-gray-600">Кредитная карта без отказа с плохой КИ</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Русский Стандарт</div>
                    <div className="text-gray-600">Специальные программы</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">МТС Банк</div>
                    <div className="text-gray-600">Лояльный андеррайтинг</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interest Rates */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Льготные периоды и проценты</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <Icon name="Calendar" className="text-green-600 mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">Беспроцентные кредитные карты</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• 120 дней без процентов — стандартный период</li>
                  <li>• 365 дней — максимальный льготный период</li>
                  <li>• Условия сохранения льготного периода</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <Icon name="Percent" className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">Процентные ставки 2025</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Минимальная ставка: от 11,9% годовых</li>
                  <li>• Средняя по рынку: 25-35% годовых</li>
                  <li>• Максимальная: до 49,9% годовых</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <Icon name="Banknote" className="text-purple-600 mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">Снятие наличных</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• В своих банкоматах: 0-3%</li>
                  <li>• В чужих банкоматах: 3-6%</li>
                  <li>• За границей: 4-8%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Советы по использованию кредитных карт</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="CheckCircle" className="text-green-600 mr-3" size={24} />
                  Как максимально использовать льготный период
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Изучите условия льготного периода</li>
                  <li>• Ведите учет трат и платежей</li>
                  <li>• Погашайте полную задолженность вовремя</li>
                  <li>• Используйте автоплатежи</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="AlertTriangle" className="text-red-600 mr-3" size={24} />
                  Ошибки, которых стоит избегать
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Снятие наличных в льготном периоде</li>
                  <li>• Просрочка платежей</li>
                  <li>• Превышение кредитного лимита</li>
                  <li>• Игнорирование комиссий</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Заключение</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Выбор кредитной карты в 2025 году зависит от ваших потребностей и финансового положения. 
              Независимо от кредитной истории, существуют варианты получения карты. Главное — внимательно 
              изучить условия и ответственно подходить к использованию кредитных средств.
            </p>
            <p className="text-lg mt-6 opacity-90">
              Оформить кредитную карту онлайн можно на официальных сайтах банков или через сравнительные сервисы. 
              Помните: лучшая кредитная карта — та, которая соответствует вашему образу жизни и финансовым возможностям.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CreditCards;