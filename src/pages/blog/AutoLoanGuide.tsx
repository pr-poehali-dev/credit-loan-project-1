import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const AutoLoanGuide = () => {
  return (
    <>
      <SEOHead
        title="Как взять автокредит и не переплатить — пошаговый гид"
        description="Подробный план, как выгодно взять автокредит и не переплатить: выбор банка, господдержка, страховка, досрочное погашение. Советы заемщикам."
        keywords="автокредит, кредит на машину, как взять автокредит, господдержка авто, КАСКО, досрочное погашение автокредита"
        url="/blog/auto-loan-guide"
        type="article"
        publishedTime="2025-08-17T00:00:00.000Z"
        section="Автокредиты"
        tags={["автокредит", "авто", "банки", "кредит", "господдержка"]}
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
              <span className="text-gray-900">Как взять автокредит и не переплатить</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800">Гид</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>17 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>7 мин чтения</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Как взять автокредит и не переплатить
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Автокредит — популярный способ приобрести машину, но без подготовки легко переплатить десятки тысяч рублей. Чтобы этого избежать, нужно понимать, на что обращать внимание при выборе кредита и как правильно его оформлять.
            </p>
          </div>
        </header>

        {/* Article Image */}
        <div className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/img/87dab4fb-7f18-4a04-83bc-0be14b31086c.jpg" 
              alt="Автокредит и финансовое планирование" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <main className="py-8 sm:py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Этап 1 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Определите бюджет и первый взнос</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Перед обращением в банк важно рассчитать:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    сумму, которую вы готовы внести сразу (обычно 10–30%);
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    максимально комфортный ежемесячный платеж (не более 30–40% дохода).
                  </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="text-blue-800 font-medium mb-0">💡 Чем больше первый взнос — тем меньше переплата по кредиту.</p>
                </div>
              </section>

              {/* Этап 2 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Сравните условия разных банков</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Процентная ставка</h3>
                <p className="text-gray-700 mb-4">
                  Ставка по автокредиту зависит от: срока, суммы, наличия КАСКО, участия в господдержке. Разница даже в 2–3% может сэкономить десятки тысяч рублей.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Скрытые комиссии и страховки</h3>
                <p className="text-gray-700 mb-4">
                  Некоторые банки навязывают дополнительные услуги: страхование жизни, «защиту платежей», сервисные пакеты. Уточните, можно ли отказаться от них.
                </p>
              </section>

              {/* Этап 3 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Используйте программы господдержки</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Государство компенсирует часть стоимости автомобиля по специальным программам («Первый автомобиль», «Семейный автомобиль»). Это снижает переплату и облегчает покупку.
                </p>
              </section>

              {/* Этап 4 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">4</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Рассмотрите досрочное погашение</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Уточните условия банка</h3>
                <p className="text-gray-700 mb-4">
                  Должна быть возможность вносить дополнительные платежи без штрафов.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Что выгоднее — уменьшать срок или платеж?</h3>
                <p className="text-gray-700 mb-4">
                  Если хотите сэкономить на процентах, выбирайте сокращение срока кредита. Если нужна меньшая нагрузка на бюджет — уменьшайте платеж.
                </p>
              </section>

              {/* Этап 5 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">5</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Проверьте переплату заранее</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Перед подписанием договора воспользуйтесь кредитным калькулятором:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    сравните итоговую переплату при разных сроках;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    посчитайте выгоду от досрочного погашения.
                  </li>
                </ul>
              </section>

              {/* Практические советы */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Практические советы, чтобы не переплатить</h2>
                <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="DollarSign" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Делайте максимальный первый взнос.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Award" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Старайтесь оформить автокредит с господдержкой.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Shield" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Отказывайтесь от ненужных страховок.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="FileText" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Проверяйте все комиссии в договоре.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="TrendingUp" size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">При возможности вносите платежи чаще.</p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* FAQ */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">FAQ: Частые вопросы об автокредитах</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Можно ли взять автокредит без КАСКО?</h3>
                    <p className="text-gray-700">
                      Да, некоторые банки позволяют оформить автокредит без КАСКО, но ставка в таком случае выше. Если цель — минимизировать переплату, лучше рассчитать оба варианта: с КАСКО и без него.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Когда выгоднее погасить автокредит досрочно?</h3>
                    <p className="text-gray-700">
                      Максимальная выгода достигается в первые годы выплат, когда основная часть платежа уходит на проценты. Чем раньше начнете вносить дополнительные суммы, тем меньше переплата.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Можно ли рефинансировать автокредит?</h3>
                    <p className="text-gray-700">
                      Да, если ставки в банках снизились или условия стали лучше. Рефинансирование позволяет уменьшить переплату и сделать платежи более комфортными.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Что делать, если банк навязывает страховку при автокредите?</h3>
                    <p className="text-gray-700">
                      Страхование автомобиля (КАСКО) часто является обязательным условием. Но страхование жизни и здоровья — навязанная услуга. По закону вы можете отказаться от неё в течение «периода охлаждения» (обычно 14 дней).
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Какой первый взнос по автокредиту лучше?</h3>
                    <p className="text-gray-700">
                      Чем больше первый взнос, тем меньше переплата и ставка. Оптимально — не менее 20–30% от стоимости автомобиля.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Заключение */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <p className="text-blue-900 text-lg leading-relaxed mb-0">
                    Взять автокредит и не переплатить реально: нужно грамотно рассчитать бюджет, сравнить банки, проверить договор и использовать досрочное погашение. Такой подход позволит не только сэкономить, но и быстрее получить собственный автомобиль без лишних долгов.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center py-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Нужен автокредит на выгодных условиях?
                </h3>
                <p className="text-gray-600 mb-6">
                  Сравните предложения банков и найдите лучший вариант для себя
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  asChild
                >
                  <a href="/">
                    <Icon name="Car" className="mr-2" size={20} />
                    Выбрать автокредит
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

export default AutoLoanGuide;