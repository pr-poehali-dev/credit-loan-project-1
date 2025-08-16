import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const FastLoanRepaymentPage = () => {
  return (
    <>
      <SEOHead
        title="Как быстро погасить кредит и сэкономить на процентах — эффективные стратегии"
        description="Рассказываем, как быстро погасить кредит и снизить переплату: советы по досрочному погашению, правильному выбору срока и экономии на процентах."
        keywords="досрочное погашение кредита, как быстро погасить кредит, сэкономить на процентах, уменьшить переплату, стратегии погашения кредита, рефинансирование"
        url="/blog/fast-loan-repayment"
        type="article"
        publishedTime="2025-08-16T00:00:00.000Z"
        section="Советы"
        tags={["кредиты", "досрочное погашение", "советы", "экономия", "проценты"]}
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
              <span className="text-gray-900">Как быстро погасить кредит и сэкономить на процентах</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-green-100 text-green-800">Советы</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>16 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>6 мин чтения</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Как быстро погасить кредит и сэкономить на процентах
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Многие заемщики хотят сократить срок выплат и уменьшить переплату. Это реально, если знать правильные стратегии. Рассмотрим, как быстро погасить кредит и при этом сэкономить на процентах, не перегружая семейный бюджет.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">

          <article className="prose prose-lg max-w-none bg-white">
            {/* Почему выгодно погасить кредит раньше срока */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="TrendingDown" size={32} className="text-green-600" />
                Почему выгодно погасить кредит раньше срока
              </h2>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <p className="text-slate-700 mb-6">Досрочное погашение помогает:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">сократить срок займа и быстрее избавиться от долговой нагрузки;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">снизить общую сумму переплаты по процентам;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">повысить кредитный рейтинг за счет хорошей кредитной истории.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Основные способы быстрее закрыть кредит */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="DollarSign" size={32} className="text-blue-600" />
                Основные способы быстрее закрыть кредит
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Вносите больше минимального платежа</h3>
                  <p className="text-slate-700">
                    Если банк разрешает, ежемесячно добавляйте к обязательному платежу даже небольшую сумму. За год это может сократить срок выплат на несколько месяцев.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Используйте частичное досрочное погашение</h3>
                  <p className="text-slate-700">
                    Большинство банков позволяют вносить дополнительные суммы, которые уменьшают либо срок кредита, либо размер ежемесячного платежа. Чтобы сэкономить на процентах, выбирайте сокращение срока.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Перенаправляйте дополнительные доходы</h3>
                  <p className="text-slate-700">
                    Бонусы, премии, подработки или налоговые вычеты можно направлять на досрочное погашение. Это поможет быстрее закрыть долг.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Избегайте просрочек</h3>
                  <p className="text-slate-700">
                    Каждая просрочка не только портит кредитную историю, но и увеличивает переплату из-за штрафов и пени.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">5. Рефинансируйте кредит</h3>
                  <p className="text-slate-700">
                    Если ставки в банках снизились, имеет смысл сделать рефинансирование. Это позволит снизить процент и быстрее погасить долг при сохранении прежних выплат.
                  </p>
                </div>
              </div>
            </section>

            {/* Как экономить на процентах */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="Percent" size={32} className="text-purple-600" />
                Как экономить на процентах по кредиту
              </h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</span>
                    <span><strong>Выбирайте оптимальный срок кредита.</strong> Короткий срок = меньше переплата, но выше ежемесячный платеж.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</span>
                    <span><strong>Вносите платежи в начале месяца.</strong> Чем раньше деньги поступают, тем меньше процентов начисляется.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</span>
                    <span><strong>Отказывайтесь от ненужных страховок</strong> и дополнительных услуг. Они увеличивают стоимость кредита.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">4</span>
                    <span><strong>Делайте платежи чаще.</strong> Например, раз в две недели вместо одного раза в месяц — так уменьшается база для начисления процентов.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Ошибки */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="AlertCircle" size={32} className="text-red-600" />
                Ошибки, которых стоит избегать
              </h2>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Досрочное погашение за счет новых кредитов или займов.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Игнорирование графика платежей.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>Отсутствие «финансовой подушки» — в случае непредвиденных расходов можно снова влезть в долги.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ: Частые вопросы о досрочном погашении кредита</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Что выгоднее при досрочном погашении кредита: уменьшить срок или платеж?
                  </h3>
                  <p className="text-slate-700">
                    Если цель — сэкономить на процентах, то лучше сокращать срок кредита. В этом случае вы быстрее закроете долг и переплатите банку меньше. Уменьшение платежа снижает нагрузку, но общая переплата остаётся выше.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Можно ли платить кредит чаще, чем раз в месяц?
                  </h3>
                  <p className="text-slate-700">
                    Да. Если банк не запрещает, лучше вносить платежи чаще: например, два раза в месяц. Так уменьшается база для начисления процентов, и итоговая сумма переплаты сокращается.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Как уменьшить переплату по кредиту без рефинансирования?
                  </h3>
                  <div className="text-slate-700">
                    <p className="mb-3">Для этого можно:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• вносить дополнительные суммы сверх обязательного платежа;</li>
                      <li>• платить раньше даты, указанной в графике;</li>
                      <li>• отказываться от навязанных страховок и услуг, если они не обязательны.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Стоит ли брать новый кредит для досрочного погашения старого?
                  </h3>
                  <p className="text-slate-700">
                    Нет. Такой подход только увеличит долговую нагрузку и риски. Исключение — рефинансирование, когда новый кредит оформляется под меньший процент в другом банке.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Можно ли полностью закрыть кредит раньше срока?
                  </h3>
                  <p className="text-slate-700">
                    Да, законодательство разрешает досрочно погасить кредит полностью или частично в любой момент. Нужно лишь уведомить банк (обычно за 1–5 дней) и подать заявление.
                  </p>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Icon name="CheckCircle" size={28} className="text-green-600" />
                  Заключение
                </h2>
                <p className="text-slate-700 text-lg">
                  Быстрое погашение кредита возможно при грамотном подходе: регулярные дополнительные взносы, рефинансирование и дисциплина в платежах позволяют значительно сократить переплату и быстрее освободиться от долгов.
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
                  <a href="/blog/mortgage-step-by-step" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о получении ипотеки">
                    Пошаговый план получения ипотеки — от заявки до договора
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Подробная инструкция по всем этапам оформления ипотеки.
                </p>
                <Button variant="outline" size="sm" asChild className="touch-manipulation w-full sm:w-auto">
                  <a href="/blog/mortgage-step-by-step" aria-label="Читать статью полностью">
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

export default FastLoanRepaymentPage;