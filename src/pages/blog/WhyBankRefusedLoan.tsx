import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const WhyBankRefusedLoan = () => {
  return (
    <>
      <SEOHead
        title="Почему банк отказал в кредите — главные причины отказа и что делать в 2024"
        description="Выясните причины отказа банка в кредите: высокий ПДН, плохая кредитная история, низкий скоринг. Практические советы как исправить ситуацию и получить одобрение."
        keywords="отказ в кредите, почему банк отказал, причины отказа кредита, как получить кредит после отказа, ПДН, скоринг банка"
        url="/blog/why-bank-refused-loan"
        type="article"
        publishedTime="2025-08-13T00:00:00.000Z"
        section="Кредиты"
        tags={["отказ в кредите", "кредиты", "банки", "ПДН", "скоринг"]}
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
              <span className="text-gray-900">Почему банк отказал в кредите</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-red-100 text-red-800">Советы</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>13 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>6 мин чтения</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Почему банк отказал в кредите — причины и что делать, чтобы одобрили
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Разбираем, почему банк может отказать в кредите: ключевые причины, роль кредитной истории, 
              ПДН и скоринга. Даем советы, как повысить шанс на одобрение.
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
                  Многие заемщики сталкиваются с неожиданной ситуацией: банк отказывает в выдаче кредита, 
                  хотя кажется, что все условия выполнены. На самом деле каждая заявка проходит комплексную проверку, 
                  и даже небольшой негативный фактор может повлиять на итоговое решение.
                </p>
              </div>

              {/* Main Reasons */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Основные причины отказа в кредите
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  Рассмотрим, что чаще всего влияет на отрицательное решение банка.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {/* High PDN */}
                  <Card className="p-4 sm:p-6 border-l-4 border-red-500 bg-red-50 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="TrendingUp" size={20} className="sm:size-6 inline mr-2 text-red-600" />
                      Высокий показатель долговой нагрузки (ПДН)
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Если ежемесячные платежи по кредитам составляют более 50–60% дохода, банк может посчитать 
                      вас финансово перегруженным и отказать в новом займе.
                    </p>
                  </Card>

                  {/* Bad Credit History */}
                  <Card className="p-4 sm:p-6 border-l-4 border-orange-500 bg-orange-50 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="FileText" size={20} className="sm:size-6 inline mr-2 text-orange-600" />
                      Плохая кредитная история
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Просрочки, невыплаченные долги, частые реструктуризации — всё это сигнализирует банку о рисках. 
                      Если вы задаётесь вопросом, как улучшить кредитную историю, начните с закрытия просроченных 
                      платежей и аккуратного пользования кредитными продуктами.
                    </p>
                  </Card>

                  {/* False Data */}
                  <Card className="p-4 sm:p-6 border-l-4 border-purple-500 bg-purple-50 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="AlertTriangle" size={20} className="sm:size-6 inline mr-2 text-purple-600" />
                      Недостоверные или неполные данные
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Банки проверяют информацию о доходах, месте работы и имуществе. Несоответствие заявленных 
                      данных реальным может привести к отказу.
                    </p>
                  </Card>

                  {/* Many Credits */}
                  <Card className="p-4 sm:p-6 border-l-4 border-blue-500 bg-blue-50 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="CreditCard" size={20} className="sm:size-6 inline mr-2 text-blue-600" />
                      Большое количество открытых кредитов
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Даже при хорошем доходе банк может посчитать, что ваша долговая нагрузка слишком велика.
                    </p>
                  </Card>

                  {/* Low Scoring */}
                  <Card className="p-4 sm:p-6 border-l-4 border-green-500 bg-green-50 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="BarChart" size={20} className="sm:size-6 inline mr-2 text-green-600" />
                      Низкий скоринговый балл
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Система скоринга оценивает десятки факторов: возраст, профессию, регион проживания, 
                      семейное положение. Если итоговый балл ниже минимального порога, заявка будет отклонена.
                    </p>
                  </Card>
                </div>
              </section>

              {/* What to Do After Rejection */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Что делать после отказа
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  Отказ в кредите — это не конец, а сигнал, что нужно улучшить свои финансовые показатели.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Узнайте причину отказа</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        Банк обязан сообщить, по какому параметру заявка не прошла.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start p-4 sm:p-6 bg-green-50 rounded-lg border border-green-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Снизьте ПДН</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        Погасите часть долгов или увеличьте официальный доход.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start p-4 sm:p-6 bg-purple-50 rounded-lg border border-purple-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Исправьте кредитную историю</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        Закройте просрочки, оформите небольшой кредит и погасите его вовремя.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start p-4 sm:p-6 bg-orange-50 rounded-lg border border-orange-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                      4
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Проверьте документы</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        Убедитесь, что вся информация, подаваемая в банк, корректна.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start p-4 sm:p-6 bg-indigo-50 rounded-lg border border-indigo-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 mt-1 flex-shrink-0 text-sm sm:text-base">
                      5
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Попробуйте другой банк</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        У разных банков разные скоринговые модели, поэтому условия могут отличаться.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Improve Future Chances */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Как повысить шанс на одобрение в будущем
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <Icon name="Building2" size={20} className="sm:size-6 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Пользуйтесь банковскими продуктами</h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          Дебетовые карты, вклады, зарплатные проекты повышают лояльность банка
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <Icon name="Clock" size={20} className="sm:size-6 text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Избегайте частых заявок</h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          Много кредитных заявок подряд негативно влияет на скоринг
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <Icon name="TrendingUp" size={20} className="sm:size-6 text-purple-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Поддерживайте стабильный доход</h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          Официальное трудоустройство и регулярные поступления
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 touch-manipulation hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <Icon name="Shield" size={20} className="sm:size-6 text-orange-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Сохраняйте кредитную историю</h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          Своевременные платежи и отсутствие просрочек
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Important Note */}
              <section className="mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                  <div className="flex items-start">
                    <Icon name="Lightbulb" size={20} className="sm:size-6 text-yellow-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Важно помнить</h4>
                      <p className="text-xs sm:text-base text-gray-700">
                        Отказ в одном банке не означает, что вам откажут везде. Разные финансовые учреждения 
                        используют различные критерии оценки, и то, что не подходит одному банку, 
                        может быть приемлемо для другого.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 border">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Заключение</h2>
                  <p className="text-sm sm:text-lg text-gray-700">
                    Банковский отказ в кредите чаще всего связан с высокой долговой нагрузкой, плохой кредитной историей 
                    или низким скоринговым баллом. Зная эти факторы и устранив их, можно значительно увеличить шансы 
                    на положительное решение при следующей заявке.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Получили отказ? Не отчаивайтесь!</h3>
                  <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
                    Поможем найти банк, который одобрит кредит именно вам
                  </p>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 touch-manipulation w-full sm:w-auto" asChild>
                    <a href="/microloans" aria-label="Перейти к микрозаймам для получения альтернативного финансирования">
                      <Icon name="Search" size={16} className="sm:size-5 mr-2" />
                      Подобрать банк
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
                  <a href="/blog/how-banks-approve-loans" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о том, как банки принимают решения">
                    Как банки принимают решение о выдаче кредита
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Полный разбор факторов одобрения: скоринг, ПДН, кредитная история и требования банков.
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
                  <a href="/blog/improve-credit-history" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о том, как улучшить кредитную историю">
                    Как улучшить кредитную историю — 7 шагов
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Практическое руководство по восстановлению кредитной репутации и повышению рейтинга.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/improve-credit-history" aria-label="Читать статью полностью">
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

export default WhyBankRefusedLoan;