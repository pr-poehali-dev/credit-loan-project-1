import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const MortgageVsRent2025 = () => {
  return (
    <>
      <SEOHead
        title="Ипотека или аренда: что выгоднее в 2025 году? Полный разбор"
        description="Разбираем, что выбрать в 2025 году — ипотеку или аренду. Сравниваем платежи, ставки, плюсы и минусы. Советы, когда выгоднее ипотека, а когда аренда."
        keywords="ипотека или аренда 2025, что выгоднее ипотека или аренда, сравнение ипотеки и аренды, покупка квартиры или аренда"
        url="/blog/mortgage-vs-rent-2025"
        type="article"
        publishedTime="2025-08-17T00:00:00.000Z"
        section="Ипотека"
        tags={["ипотека", "аренда", "недвижимость", "сравнение", "2025"]}
      />
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-3 sm:py-4 px-4 border-b">
          <div className="max-w-4xl mx-auto px-2">
            <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 flex-wrap">
              <a href="/" className="hover:text-blue-600 touch-manipulation" aria-label="Перейти на главную страницу">Главная</a>
              <Icon name="ChevronRight" size={12} className="sm:size-4" />
              <a href="/blog" className="hover:text-blue-600 touch-manipulation" aria-label="Перейти к блогу">Блог</a>
              <Icon name="ChevronRight" size={12} className="sm:size-4" />
              <span className="text-gray-900">Ипотека vs аренда: что выгоднее в 2025 году</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800">Сравнение</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>17 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>8 мин чтения</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ипотека vs аренда: что выгоднее в 2025 году
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Вопрос «что выгоднее — ипотека или аренда?» остаётся актуальным и в 2025 году. Рост цен на недвижимость, колебания процентных ставок и изменение доходов населения делают выбор непростым. Рассмотрим плюсы и минусы обоих вариантов, чтобы понять, какой из них более рационален.
            </p>
          </div>
        </header>

        {/* Article Image */}
        <div className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/img/736d7b86-b983-4e00-8341-0087543d3f46.jpg" 
              alt="Сравнение ипотеки и аренды в 2025 году" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <main className="py-8 sm:py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Аренда */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Аренда в 2025 году</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Преимущества аренды</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Не нужно влезать в кредитные обязательства.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Гибкость: можно менять жильё и город без проблем.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Нет расходов на ремонт и капитальное обслуживание.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Недостатки аренды</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="X" size={20} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Деньги ежемесячно уходят «в никуда».</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="X" size={20} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Рост цен на аренду в крупных городах (в 2025 году прогнозируется +8–12%).</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="X" size={20} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Отсутствие стабильности: собственник может расторгнуть договор.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ипотека */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ипотека в 2025 году</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Преимущества ипотеки</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Платежи идут в счёт вашей квартиры.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Возможность роста стоимости недвижимости → капитализация.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Долгосрочная стабильность: жильё остаётся вашим.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Недостатки ипотеки</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="AlertTriangle" size={20} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Переплата по процентам (в 2025 году средняя ставка 11–12%).</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="AlertTriangle" size={20} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Нужен первый взнос (обычно 15–30%).</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="AlertTriangle" size={20} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Высокая долговая нагрузка на семью.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Сравнение */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Сравнение ипотеки и аренды в цифрах</h2>
                
                <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <p className="text-gray-700 mb-4 font-medium">
                    Например, квартира за 6 млн ₽ в Москве:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-white rounded-lg border border-purple-200">
                      <Icon name="Home" size={24} className="text-purple-600 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Ипотека на 20 лет под 12% годовых</p>
                        <p className="text-gray-600">→ платеж ~65 000 ₽ в месяц, переплата ~9 млн ₽</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg border border-purple-200">
                      <Icon name="Key" size={24} className="text-purple-600 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Аренда аналогичной квартиры</p>
                        <p className="text-gray-600">→ в 2025 году средняя цена ~55 000 ₽ в месяц</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-100 border-l-4 border-purple-400 p-4 mt-6">
                    <p className="text-purple-800 font-medium">
                      👉 Если доход семьи позволяет, ипотека создаёт капитал в будущем, но на коротком горизонте аренда дешевле.
                    </p>
                  </div>
                </Card>
              </section>

              {/* Когда что выгоднее */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Когда выгоднее ипотека, а когда аренда</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-blue-200 bg-blue-50">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                      <Icon name="Home" className="mr-2" size={24} />
                      Ипотека выгоднее, если:
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-blue-800">у вас есть первый взнос;</p>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-blue-800">доход стабильный;</p>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-blue-800">планируете жить в квартире 10+ лет.</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-green-200 bg-green-50">
                    <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                      <Icon name="Key" className="mr-2" size={24} />
                      Аренда выгоднее, если:
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-green-800">нет стабильного дохода;</p>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-green-800">планируете переезды;</p>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-green-800">не готовы к большим долговым обязательствам.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">FAQ: Частые вопросы об ипотеке и аренде в 2025 году</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Выгодно ли брать ипотеку в 2025 году?</h3>
                    <p className="text-gray-700">
                      Да, если у вас есть стабильный доход и первый взнос. При ставке 11–12% ипотека становится долгосрочной инвестицией в жильё. Но при нестабильном доходе лучше выбрать аренду.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Что выбрать: ипотеку или аренду в Москве в 2025 году?</h3>
                    <p className="text-gray-700">
                      В Москве платеж по ипотеке за квартиру в 6–7 млн ₽ будет выше средней аренды. Но в долгосрочной перспективе ипотека выгоднее, так как жильё переходит в собственность и растёт в цене.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Когда аренда выгоднее ипотеки?</h3>
                    <p className="text-gray-700">
                      Если вы планируете часто менять место жительства, у вас нет стабильного дохода или накоплений на первый взнос, аренда в 2025 году остаётся более безопасным вариантом.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Что выгоднее: ипотека или аренда на 5 лет?</h3>
                    <p className="text-gray-700">
                      На коротком промежутке (3–5 лет) аренда дешевле. Но если вы готовы жить в одной квартире 10+ лет, ипотека выгоднее, так как она формирует капитал.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Есть ли калькулятор для сравнения ипотеки и аренды?</h3>
                    <p className="text-gray-700">
                      Да, на сайтах банков и агрегаторов есть калькуляторы, где можно сравнить ежемесячный платёж и переплату по ипотеке с арендой аналогичной квартиры.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Заключение */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6">
                  <p className="text-gray-900 text-lg leading-relaxed mb-0">
                    В 2025 году ипотека остаётся стратегическим вложением в будущее, а аренда — более гибким, но временным решением. Ответ на вопрос «что выгоднее — ипотека или аренда» зависит от целей и финансовых возможностей семьи.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center py-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Готовы взять ипотеку на выгодных условиях?
                </h3>
                <p className="text-gray-600 mb-6">
                  Сравните предложения банков и найдите лучший вариант для себя
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  asChild
                >
                  <a href="/mortgage">
                    <Icon name="Home" className="mr-2" size={20} />
                    Выбрать ипотеку
                  </a>
                </Button>
              </section>

            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MortgageVsRent2025;