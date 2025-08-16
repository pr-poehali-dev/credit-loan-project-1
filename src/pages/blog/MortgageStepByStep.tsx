import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const MortgageStepByStep = () => {
  return (
    <>
      <SEOHead
        title="Пошаговый план получения ипотеки — от заявки до договора"
        description="Подробная инструкция по получению ипотеки: заявка в банк, проверка, документы, выбор квартиры, оценка и подписание договора. Советы для успешного оформления."
        keywords="ипотека пошагово, как получить ипотеку, документы для ипотеки, этапы оформления ипотеки, план получения ипотеки"
        url="/blog/mortgage-step-by-step"
        type="article"
        publishedTime="2025-08-16T00:00:00.000Z"
        section="Ипотека"
        tags={["ипотека", "недвижимость", "банки", "кредит", "документы"]}
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
              <span className="text-gray-900">Пошаговый план получения ипотеки</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800">Инструкция</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>16 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>8 мин чтения</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Пошаговый план получения ипотеки: от заявки до подписания договора
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Оформление ипотеки — это процесс, состоящий из нескольких этапов. Знание порядка действий помогает избежать ошибок и экономит время. Ниже представлен пошаговый план получения ипотеки, который подходит как для покупки квартиры на первичном рынке, так и на вторичном.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <main className="py-8 sm:py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Шаг 1 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Финансовая подготовка</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Прежде чем обращаться в банк, важно оценить свою платежеспособность:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    рассчитайте допустимый ежемесячный платеж (не более 30–40% от дохода);
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    проверьте свою кредитную историю в бюро кредитных историй (БКИ);
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    закройте мелкие долги и кредиты, чтобы снизить показатель долговой нагрузки (ПДН).
                  </li>
                </ul>
              </section>

              {/* Шаг 2 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Заявка в банк</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Заявку можно подать онлайн или в офисе банка. В анкете указываются:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    личные данные;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    семейное положение;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    доход и стаж работы;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    желаемая сумма и срок ипотеки.
                  </li>
                </ul>
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-start">
                    <Icon name="Lightbulb" size={20} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-900 mb-1">💡 Совет:</p>
                      <p className="text-blue-800">отправьте заявки сразу в несколько банков, чтобы сравнить предложения и повысить вероятность одобрения.</p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Шаг 3 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Рассмотрение и предварительное одобрение</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Банк анализирует:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    кредитную историю;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    уровень дохода и ПДН;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    скоринговый рейтинг (возраст, профессия, регион, стаж).
                  </li>
                </ul>
                <p className="text-gray-700">
                  В случае одобрения вы получаете «ипотечный сертификат» — подтверждение максимальной суммы кредита и условий.
                </p>
              </section>

              {/* Шаг 4 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">4</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Сбор документов</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Стандартный пакет включает:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    паспорт, СНИЛС и ИНН;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    справку 2-НДФЛ или по форме банка;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    копию трудовой книжки или договора;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    свидетельство о браке, документы на детей (при наличии).
                  </li>
                </ul>
              </section>

              {/* Шаг 5 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">5</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Выбор квартиры</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  После одобрения вы можете искать квартиру. Важно, чтобы объект соответствовал требованиям банка:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    чистая юридическая история;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    отсутствие обременений;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    застройщик аккредитован банком (для новостроек).
                  </li>
                </ul>
              </section>

              {/* Шаг 6 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">6</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Оценка и страхование</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Банк назначает независимую оценку недвижимости. Параллельно заемщик оформляет страховку:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    обязательна страховка квартиры;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    по желанию — страхование жизни и здоровья (иногда снижает ставку).
                  </li>
                </ul>
              </section>

              {/* Шаг 7 */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3">7</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">Подписание договора</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Заключаются два документа:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    кредитный договор с банком;
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    договор купли-продажи или ДДУ с застройщиком.
                  </li>
                </ul>
                <p className="text-gray-700">
                  После регистрации в Росреестре банк перечисляет деньги продавцу, а вы становитесь собственником жилья.
                </p>
              </section>

              {/* FAQ Section */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">FAQ: Частые вопросы о получении ипотеки</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Сколько времени занимает оформление ипотеки?</h3>
                    <p className="text-gray-700">
                      В среднем процесс занимает от 2 до 6 недель. Всё зависит от скорости сбора документов, проверки квартиры и работы Росреестра. Если заранее подготовить документы и выбрать аккредитованного застройщика, срок можно сократить.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Что делать после одобрения ипотеки?</h3>
                    <p className="text-gray-700">
                      После одобрения ипотеки нужно выбрать квартиру, провести её оценку и оформить страховку. Затем подписывается кредитный договор с банком и договор купли-продажи или ДДУ (для новостройки).
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Какие документы нужны для ипотеки?</h3>
                    <p className="text-gray-700">
                      Стандартный список включает: паспорт, СНИЛС, ИНН, справку о доходах (2-НДФЛ или по форме банка), трудовой договор или копию трудовой книжки, а также документы о семейном положении.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Можно ли получить ипотеку с плохой кредитной историей?</h3>
                    <p className="text-gray-700">
                      Да, но условия будут менее выгодными: выше процентная ставка и, возможно, меньший лимит. Чтобы увеличить шансы, стоит сначала улучшить кредитную историю — закрыть просрочки, оформить и вовремя погасить небольшой кредит.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Обязательно ли страхование недвижимости при ипотеке?</h3>
                    <p className="text-gray-700">
                      Да, страхование недвижимости обязательно. Оно защищает банк, так как квартира является залогом. Дополнительно можно застраховать жизнь и здоровье заемщика — это часто снижает ставку.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Получение ипотеки — это семь последовательных шагов: от подготовки финансов и подачи заявки до подписания договора. Если подойти к процессу системно, можно не только ускорить оформление, но и получить более выгодные условия.
                </p>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Готовы подать заявку на ипотеку?
                </h3>
                <p className="text-gray-700 mb-6">
                  Сравните предложения ведущих банков и выберите самые выгодные условия
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="/mortgage">Выбрать ипотеку</a>
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

export default MortgageStepByStep;