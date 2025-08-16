import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const CreditRefinancingPage = () => {
  return (
    <>
      <SEOHead
        title="Рефинансирование кредита: когда это выгодно и как сэкономить на переплате"
        description="Разбираем, когда выгодно рефинансировать кредит: снижение ставки, объединение займов, сокращение переплаты. Советы и подводные камни."
        keywords="рефинансирование кредита, перекредитование, снижение ставки, объединение кредитов, переплата, выгодное рефинансирование"
        url="/blog/credit-refinancing"
        type="article"
        publishedTime="2025-08-16T00:00:00.000Z"
        section="Кредиты"
        tags={["рефинансирование", "кредиты", "переплата", "банки", "экономия"]}
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
              <span className="text-gray-900">Рефинансирование кредита: когда это выгодно</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800">Кредиты</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>16 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>7 мин чтения</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Рефинансирование кредита: когда это выгодно
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Рефинансирование — это оформление нового кредита на более выгодных условиях для погашения действующего. Эта услуга помогает снизить процентную ставку, уменьшить ежемесячный платеж или объединить несколько кредитов в один. Но подходит она не всем. Разберём, в каких случаях рефинансирование кредита действительно выгодно.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <article className="prose prose-lg max-w-none bg-white">
            {/* Что такое рефинансирование */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="RefreshCw" size={32} className="text-blue-600" />
                Что такое рефинансирование кредита
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 text-lg mb-4">
                  По сути, это замена старого кредита новым — с более низкой ставкой или другими условиями.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700 font-medium">
                    <strong>Пример:</strong> если у вас есть кредит под 20% годовых, а другой банк предлагает 13%, рефинансирование позволит сократить переплату на десятки тысяч рублей.
                  </p>
                </div>
              </div>
            </section>

            {/* Когда рефинансирование выгодно */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="TrendingDown" size={32} className="text-green-600" />
                Когда рефинансирование кредита выгодно
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Ставки в банках стали ниже
                  </h3>
                  <p className="text-gray-700">
                    Главная причина — снижение процентных ставок. Если разница хотя бы 3–5%, рефинансирование почти всегда оправдано.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Есть несколько кредитов и займов
                  </h3>
                  <p className="text-gray-700">
                    Объединив их в один, вы сможете платить удобный единый платеж, часто меньше по размеру, чем сумма всех предыдущих.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Сложности с платежами
                  </h3>
                  <p className="text-gray-700">
                    Если ежемесячная нагрузка слишком высокая, рефинансирование может снизить платеж, пусть и за счет увеличения срока кредита.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Улучшилась кредитная история
                  </h3>
                  <p className="text-gray-700">
                    Когда вы закрыли старые просрочки и повысили рейтинг, банки могут предложить более выгодные условия.
                  </p>
                </div>
              </div>
            </section>

            {/* Когда рефинансирование невыгодно */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="AlertTriangle" size={32} className="text-red-600" />
                В каких случаях рефинансирование невыгодно
              </h2>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Осталось менее года до полного погашения.</strong> Экономия будет минимальной.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Новый кредит сопровождается большими комиссиями</strong> и обязательными страховками.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Ставка снижается незначительно</strong> (на 1–2%).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Как оформить рефинансирование */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="FileText" size={32} className="text-purple-600" />
                Как оформить рефинансирование
              </h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Сравните предложения разных банков</h4>
                      <p className="text-gray-700 text-sm">Изучите условия нескольких банков, обращая внимание не только на ставку</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Рассчитайте выгоду</h4>
                      <p className="text-gray-700 text-sm">Учитывайте не только ставку, но и срок кредита</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Подайте заявку на новый кредит</h4>
                      <p className="text-gray-700 text-sm">Оформите заявку в выбранном банке</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Соберите документы</h4>
                      <p className="text-gray-700 text-sm">Паспорт, договор по действующему кредиту, справку о доходах</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Получите новый кредит</h4>
                      <p className="text-gray-700 text-sm">Новый банк перечислит деньги старому кредитору, и вы начнете платить по новым условиям</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Советы заемщикам */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="Lightbulb" size={32} className="text-yellow-600" />
                Советы заемщикам
              </h2>
              
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Проверяйте все комиссии и страховки в новом договоре.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Уточняйте, можно ли досрочно погашать новый кредит без штрафов.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span>Используйте онлайн-калькуляторы для точного сравнения.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ: Частые вопросы о рефинансировании кредита</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Как посчитать выгоду от рефинансирования кредита?
                  </h3>
                  <p className="text-gray-700">
                    Нужно сравнить итоговую переплату по старому кредиту и новому предложению. Учитываются ставка, срок, комиссии и страховки. Если разница больше нескольких процентов, рефинансирование выгодно.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Можно ли рефинансировать ипотеку и потребительский кредит одновременно?
                  </h3>
                  <p className="text-gray-700">
                    Да, многие банки предлагают объединить несколько займов в один. Это удобно — у вас будет единый платеж и, как правило, сниженная ставка.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Возможно ли рефинансирование кредита с плохой кредитной историей?
                  </h3>
                  <p className="text-gray-700">
                    Да, но условия будут менее выгодными. Чаще всего банки предлагают более высокую ставку или требуют дополнительные гарантии.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Какие подводные камни есть у рефинансирования?
                  </h3>
                  <div className="text-gray-700">
                    <ul className="space-y-2 ml-4">
                      <li>• скрытые комиссии;</li>
                      <li>• обязательное страхование;</li>
                      <li>• увеличение срока кредита, что иногда ведет к росту общей переплаты.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Нужно ли согласие старого банка на рефинансирование?
                  </h3>
                  <p className="text-gray-700">
                    Нет. Новый банк сам перечисляет деньги в старый, и ваш кредит считается закрытым.
                  </p>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Icon name="CheckCircle" size={28} className="text-green-600" />
                  Заключение
                </h2>
                <p className="text-gray-700 text-lg">
                  Рефинансирование кредита выгодно, когда ставка снижается ощутимо, нужно объединить несколько займов или уменьшить ежемесячную нагрузку. Главное — внимательно сравнивать условия и учитывать не только проценты, но и скрытые расходы.
                </p>
              </div>
            </section>
          </article>
        </div>

        {/* Related Articles */}
        <section className="py-8 sm:py-12 bg-gray-50 border-t">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Читайте также
            </h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <Card className="p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow touch-manipulation">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  <a href="/blog/fast-loan-repayment" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о быстром погашении кредита">
                    Как быстро погасить кредит и сэкономить на процентах
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Эффективные стратегии досрочного погашения и экономии на переплате.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/fast-loan-repayment" aria-label="Читать статью полностью">
                    Читать
                    <Icon name="ArrowRight" size={12} className="sm:size-3.5 ml-1" />
                  </a>
                </Button>
              </Card>

              <Card className="p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow touch-manipulation">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  <a href="/blog/how-banks-approve-loans" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о том, как банки принимают решения">
                    Как банки принимают решение о выдаче кредита
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Узнайте, что влияет на одобрение кредита и как повысить свои шансы.
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
                  <a href="/blog/improve-credit-history" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о улучшении кредитной истории">
                    Как улучшить кредитную историю — 7 шагов
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Пошаговое руководство по улучшению кредитного рейтинга.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/improve-credit-history" aria-label="Читать статью полностью">
                    Читать
                    <Icon name="ArrowRight" size={12} className="sm:size-3.5 ml-1" />
                  </a>
                </Button>
              </Card>

              <Card className="p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow touch-manipulation">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  <a href="/blog/why-bank-refused-loan" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о причинах отказа банка">
                    Почему банк отказал в кредите — причины и решения
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Разбираем основные причины отказов и даем практические советы.
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

export default CreditRefinancingPage;