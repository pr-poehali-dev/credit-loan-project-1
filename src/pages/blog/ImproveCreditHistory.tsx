import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const ImproveCreditHistory = () => {
  return (
    <>
      <SEOHead
        title="Как улучшить кредитную историю — 7 эффективных шагов в 2024 году"
        description="Узнайте, как быстро исправить и улучшить кредитную историю: закрываем просрочки, берем новые кредиты правильно, повышаем рейтинг. Пошаговое руководство."
        keywords="улучшить кредитную историю, исправить кредитную историю, кредитный рейтинг, как повысить кредитный рейтинг, просрочки по кредитам"
        url="/blog/improve-credit-history"
        type="article"
        publishedTime="2025-08-13T00:00:00.000Z"
        section="Кредитная история"
        tags={["кредитная история", "кредиты", "рейтинг", "банки", "просрочки"]}
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
              <span className="text-gray-900">Как улучшить кредитную историю</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-green-100 text-green-800">Кредитная история</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>13 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>5 мин чтения</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Как улучшить кредитную историю — 7 шагов к одобрению кредита
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Пошаговое руководство, как улучшить кредитную историю, повысить кредитный рейтинг 
              и увеличить шансы на одобрение займа в банке.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-8 sm:py-12 px-4" itemScope itemType="https://schema.org/Article">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                <p>
                  Кредитная история — это своеобразное «досье» заемщика, в котором отражены все кредиты, займы, 
                  просрочки и погашения. Банки используют её для оценки надежности клиента. Если кредитная история 
                  испорчена, получить новый заем будет сложнее, а условия могут быть менее выгодными. Однако ситуацию можно исправить.
                </p>
              </div>

              {/* What Affects Credit History */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Что влияет на кредитную историю
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  Перед тем как перейти к улучшению, важно понимать, что на неё влияет:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                  <ul className="space-y-2 sm:space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Icon name="Clock" size={16} className="sm:size-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">своевременность платежей</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="CreditCard" size={16} className="sm:size-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">количество и размер кредитов</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Search" size={16} className="sm:size-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">частота обращений в банки</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="AlertTriangle" size={16} className="sm:size-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">наличие просрочек и их длительность</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Scale" size={16} className="sm:size-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">судебные споры с кредиторами</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7 Steps */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  7 шагов для улучшения кредитной истории
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {/* Step 1 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-red-500 bg-red-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        1
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Погасите просроченные платежи
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Это первый и обязательный шаг. Даже если сумма небольшая, наличие открытых просрочек 
                          сильно снижает кредитный рейтинг.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 2 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-orange-500 bg-orange-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        2
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Закройте ненужные кредиты
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Чем меньше действующих кредитов, тем лучше показатель долговой нагрузки (ПДН), 
                          а значит — выше шанс на одобрение нового займа.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 3 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-yellow-500 bg-yellow-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        3
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Оформите небольшой кредит и погасите его вовремя
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Можно взять потребительский кредит или кредитную карту с минимальным лимитом, 
                          чтобы показать банку, что вы способны исправно платить.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 4 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-green-500 bg-green-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        4
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Пользуйтесь кредитной картой правильно
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Погашайте задолженность в течение льготного периода и избегайте минимальных платежей.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 5 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-blue-500 bg-blue-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        5
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Не допускайте новых просрочек
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Даже один пропущенный день может вновь испортить кредитную историю.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 6 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-indigo-500 bg-indigo-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        6
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Проверяйте кредитную историю раз в год
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Сделать это можно через бюро кредитных историй (БКИ) бесплатно два раза в год. 
                          Так вы сможете вовремя заметить ошибки и исправить их.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Step 7 */}
                  <Card className="p-4 sm:p-6 border-l-4 border-purple-500 bg-purple-50 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                        7
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          Подтверждайте доход официально
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          Банки доверяют заемщикам с прозрачным доходом. Если вы работаете неофициально, 
                          рассмотрите возможность оформить трудовой договор.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Quick Tips */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Как быстро повысить кредитный рейтинг
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  Если нужно улучшить показатели в сжатые сроки:
                </p>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div className="flex items-center p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200 touch-manipulation">
                    <Icon name="CheckCircle" size={20} className="sm:size-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">не подавайте много заявок в разные банки подряд</span>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200 touch-manipulation">
                    <Icon name="CheckCircle" size={20} className="sm:size-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">пользуйтесь услугами одного банка (зарплатная карта, вклады)</span>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200 touch-manipulation">
                    <Icon name="CheckCircle" size={20} className="sm:size-6 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">погасите хотя бы один кредит досрочно</span>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Ошибки, которых нужно избегать
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3 text-red-800">
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="sm:size-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Взятие слишком больших сумм сразу после исправления истории</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="sm:size-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Игнорирование проверки кредитной истории</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="sm:size-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Использование кредитов в МФО с высокими ставками (некоторые банки воспринимают это как сигнал о рисках)</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 border">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Заключение</h2>
                  <p className="text-sm sm:text-lg text-gray-700">
                    Исправить кредитную историю реально, но это требует времени и дисциплины. Чем дольше вы будете 
                    платить вовремя и избегать новых долгов, тем выше станет ваш кредитный рейтинг и шансы на одобрение 
                    кредита на выгодных условиях.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Готовы начать улучшать кредитную историю?</h3>
                  <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
                    Получите персональные рекомендации и подберите оптимальный кредитный продукт
                  </p>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 touch-manipulation w-full sm:w-auto" asChild>
                    <a 
                      href="https://www.sravni.ru/kredity/scoring/istorija/" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow noindex"
                      aria-label="Проверить кредитную историю на сайте Сравни.ру"
                    >
                      <Icon name="TrendingUp" size={16} className="sm:size-5 mr-2" />
                      Проверить кредитную историю
                    </a>
                  </Button>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-8 sm:py-12 px-4 bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Читайте также</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow touch-manipulation">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  <a href="/blog/how-banks-approve-loans" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о том, как банки принимают решение">
                    Как банки принимают решение о выдаче кредита
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Разбираем факторы, влияющие на одобрение: скоринг, ПДН, кредитная история и доходы.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/how-banks-approve-loans" aria-label="Читать статью полностью">
                    Читать
                    <Icon name="ArrowRight" size={12} className="sm:size-3.5 ml-1" />
                  </a>
                </Button>
              </Card>

              <Card className="p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow touch-manipulation">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  <a href="/blog/why-bank-refused-loan" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о причинах отказа банка">
                    Почему банк отказал в кредите
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Основные причины отказов и практические советы по их устранению для будущих заявок.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/why-bank-refused-loan" aria-label="Читать статью полностью">
                    Читать
                    <Icon name="ArrowRight" size={12} className="sm:size-3.5 ml-1" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ImproveCreditHistory;