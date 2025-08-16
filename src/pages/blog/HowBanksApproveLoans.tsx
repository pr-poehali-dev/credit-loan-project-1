import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const HowBanksApproveLoans = () => {
  return (
    <>
      <SEOHead
        title="Как банки принимают решение о выдаче кредита — факторы одобрения 2024"
        description="Узнайте, как банки оценивают заявки на кредит: скоринг, ПДН, кредитная история, доходы. Советы по повышению шансов одобрения."
        keywords="одобрение кредита, скоринг банк, ПДН, кредитная история, как получить кредит, факторы одобрения"
        url="/blog/how-banks-approve-loans"
        type="article"
        publishedTime="2025-08-13T00:00:00.000Z"
        section="Кредиты"
        tags={["кредиты", "банки", "одобрение", "скоринг", "ПДН"]}
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
              <span className="text-gray-900">Как банки принимают решение о выдаче кредита</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800">Кредиты</Badge>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <Icon name="Calendar" size={12} className="sm:size-4 mr-1" />
                  <span>13 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>7 мин чтения</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Как банки принимают решение о выдаче кредита
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Узнайте, что влияет на одобрение кредита: ключевые факторы, роль кредитной истории, 
              кредитного скоринга и ПДН. Советы, как повысить шансы на положительное решение банка.
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
                  Многие заемщики хотят понять, что влияет на одобрение кредита и как увеличить шансы на положительное решение. 
                  Банки используют сложную систему проверки: анализируют кредитную историю, оценивают доход, считают показатель 
                  долговой нагрузки (ПДН) и применяют кредитный скоринг. Разберём все факторы, которые влияют на банковское решение.
                </p>
              </div>

              {/* Main Factors */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Основные факторы одобрения кредита
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  При рассмотрении заявки банк оценивает не только сумму и срок займа, но и кредитоспособность клиента. 
                  На итоговое решение влияет комбинация нескольких факторов.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <Card className="p-4 sm:p-6 border-l-4 border-blue-500 bg-blue-50 touch-manipulation">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="TrendingUp" size={20} className="sm:size-6 inline mr-2 text-blue-600" />
                      Уровень и стабильность дохода
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Чем выше и стабильнее доход, тем больше вероятность одобрения кредита. Банк анализирует зарплату, 
                      дополнительные источники дохода и рассчитывает ПДН — показатель долговой нагрузки. 
                      Если ПДН превышает 50–60%, шансы на кредит резко снижаются.
                    </p>
                  </Card>

                  <Card className="p-4 sm:p-6 border-l-4 border-green-500 bg-green-50 touch-manipulation">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="FileText" size={20} className="sm:size-6 inline mr-2 text-green-600" />
                      Кредитная история
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Кредитная история — это финансовая репутация заемщика. Она содержит сведения обо всех займах, 
                      погашениях и просрочках. Даже небольшая задержка платежа может снизить доверие банка. 
                      Поэтому, если вы задаётесь вопросом, как улучшить кредитную историю, начните с дисциплинированных 
                      выплат и закрытия старых долгов.
                    </p>
                  </Card>

                  <Card className="p-4 sm:p-6 border-l-4 border-orange-500 bg-orange-50 touch-manipulation">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Icon name="CreditCard" size={20} className="sm:size-6 inline mr-2 text-orange-600" />
                      Наличие действующих кредитов и займов
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Большое количество открытых кредитов увеличивает риск отказа. Перед подачей новой заявки 
                      желательно погасить хотя бы часть долгов, чтобы снизить ПДН.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Credit Scoring */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Что такое кредитный скоринг
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  Кредитный скоринг — автоматизированная система, которая присваивает заемщику баллы. 
                  Чем выше балл, тем выше шансы на одобрение кредита и получение выгодной процентной ставки.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Скоринг учитывает:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="sm:size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">возраст, семейное положение и образование</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="sm:size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">стаж работы и профессию</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="sm:size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">регион проживания</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="sm:size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">наличие просрочек в прошлом</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="sm:size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">общий уровень долговой нагрузки</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base text-gray-700">
                  Понимание того, как рассчитывается кредитный рейтинг, поможет заранее подготовиться к подаче заявки.
                </p>
              </section>

              {/* Why Banks Refuse */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Почему банк может отказать в кредите
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
                  <h4 className="font-bold text-red-900 mb-3 sm:mb-4 text-sm sm:text-base">Причин отказа несколько:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-red-800">
                    <li className="flex items-center">
                      <Icon name="X" size={14} className="sm:size-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">низкий или нестабильный доход</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={14} className="sm:size-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">высокий ПДН</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={14} className="sm:size-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">плохая кредитная история</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={14} className="sm:size-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">слишком большое количество действующих кредитов</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={14} className="sm:size-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">предоставление недостоверных данных</span>
                    </li>
                  </ul>
                  <p className="mt-3 sm:mt-4 text-red-800 text-xs sm:text-sm">
                    Если банк отказал, стоит выяснить причину и устранить её — это лучший способ повысить шанс на кредит в будущем.
                  </p>
                </div>
              </section>

              {/* How to Improve Chances */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Как повысить шансы на одобрение кредита
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="p-4 sm:p-6 bg-green-50 border-green-200 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      <Icon name="Shield" size={16} className="sm:size-5 inline mr-2 text-green-600" />
                      Поддерживайте положительную кредитную историю
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Оплачивайте кредиты вовремя, не допускайте просрочек и не берите лишние займы.
                    </p>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-blue-50 border-blue-200 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      <Icon name="TrendingDown" size={16} className="sm:size-5 inline mr-2 text-blue-600" />
                      Снижайте долговую нагрузку
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Погашайте часть долгов перед подачей заявки на новый кредит.
                    </p>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-purple-50 border-purple-200 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      <Icon name="FileCheck" size={16} className="sm:size-5 inline mr-2 text-purple-600" />
                      Предоставляйте полную и честную информацию
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Банки проверяют сведения о доходах и месте работы. Несоответствие данных может привести к отказу.
                    </p>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-orange-50 border-orange-200 touch-manipulation hover:shadow-md transition-shadow">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      <Icon name="Building2" size={16} className="sm:size-5 inline mr-2 text-orange-600" />
                      Пользуйтесь продуктами банка
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Если у вас уже есть зарплатная карта, вклад или дебетовая карта в этом же банке, вероятность одобрения выше.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8 sm:mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Заключение</h2>
                  <p className="text-sm sm:text-lg text-gray-700">
                    Банки принимают решение о выдаче кредита, исходя из совокупности факторов — от кредитной истории и 
                    скорингового балла до уровня дохода и долговой нагрузки. Понимая, что влияет на одобрение кредита, 
                    можно заранее подготовиться и увеличить шансы на положительное решение, а также получить более выгодные условия.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Готовы подать заявку на кредит?</h3>
                  <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
                    Подберем лучшие предложения от надежных банков с высокой вероятностью одобрения
                  </p>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 touch-manipulation w-full sm:w-auto" asChild>
                    <a href="/microloans#mfo-partners" aria-label="Перейти к МФО-партнёрам для получения микрозайма">
                      <Icon name="CreditCard" size={16} className="sm:size-5 mr-2" />
                      Подобрать кредит
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
                  <a href="/blog/improve-credit-history" className="hover:text-blue-600 touch-manipulation" aria-label="Читать статью о том, как улучшить кредитную историю">
                    Как улучшить кредитную историю — 7 шагов
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Пошаговое руководство по восстановлению кредитной истории и повышению кредитного рейтинга.
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
                    Почему банк отказал в кредите
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Разбираем основные причины отказов и даем практические советы по их устранению.
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

export default HowBanksApproveLoans;