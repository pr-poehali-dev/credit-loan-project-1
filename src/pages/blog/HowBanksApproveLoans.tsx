import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HowBanksApproveLoans = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 px-4 border-b">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Главная</a>
            <Icon name="ChevronRight" size={14} />
            <a href="/blog" className="hover:text-blue-600">Блог</a>
            <Icon name="ChevronRight" size={14} />
            <span className="text-gray-900">Как банки принимают решение о выдаче кредита</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-800">Кредиты</Badge>
            <div className="flex items-center text-gray-600 text-sm">
              <Icon name="Calendar" size={14} className="mr-1" />
              <span className="mr-4">13 августа 2025</span>
              <Icon name="Clock" size={14} className="mr-1" />
              <span>7 мин чтения</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Как банки принимают решение о выдаче кредита
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Узнайте, что влияет на одобрение кредита: ключевые факторы, роль кредитной истории, 
            кредитного скоринга и ПДН. Советы, как повысить шансы на положительное решение банка.
          </p>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Многие заемщики хотят понять, что влияет на одобрение кредита и как увеличить шансы на положительное решение. 
                Банки используют сложную систему проверки: анализируют кредитную историю, оценивают доход, считают показатель 
                долговой нагрузки (ПДН) и применяют кредитный скоринг. Разберём все факторы, которые влияют на банковское решение.
              </p>
            </div>

            {/* Main Factors */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Основные факторы одобрения кредита
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                При рассмотрении заявки банк оценивает не только сумму и срок займа, но и кредитоспособность клиента. 
                На итоговое решение влияет комбинация нескольких факторов.
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="TrendingUp" size={24} className="inline mr-2 text-blue-600" />
                    Уровень и стабильность дохода
                  </h3>
                  <p className="text-gray-700">
                    Чем выше и стабильнее доход, тем больше вероятность одобрения кредита. Банк анализирует зарплату, 
                    дополнительные источники дохода и рассчитывает ПДН — показатель долговой нагрузки. 
                    Если ПДН превышает 50–60%, шансы на кредит резко снижаются.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-green-500 bg-green-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="FileText" size={24} className="inline mr-2 text-green-600" />
                    Кредитная история
                  </h3>
                  <p className="text-gray-700">
                    Кредитная история — это финансовая репутация заемщика. Она содержит сведения обо всех займах, 
                    погашениях и просрочках. Даже небольшая задержка платежа может снизить доверие банка. 
                    Поэтому, если вы задаётесь вопросом, как улучшить кредитную историю, начните с дисциплинированных 
                    выплат и закрытия старых долгов.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500 bg-orange-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="CreditCard" size={24} className="inline mr-2 text-orange-600" />
                    Наличие действующих кредитов и займов
                  </h3>
                  <p className="text-gray-700">
                    Большое количество открытых кредитов увеличивает риск отказа. Перед подачей новой заявки 
                    желательно погасить хотя бы часть долгов, чтобы снизить ПДН.
                  </p>
                </Card>
              </div>
            </section>

            {/* Credit Scoring */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Что такое кредитный скоринг
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Кредитный скоринг — автоматизированная система, которая присваивает заемщику баллы. 
                Чем выше балл, тем выше шансы на одобрение кредита и получение выгодной процентной ставки.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Скоринг учитывает:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    возраст, семейное положение и образование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    стаж работы и профессию
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    регион проживания
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    наличие просрочек в прошлом
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    общий уровень долговой нагрузки
                  </li>
                </ul>
              </div>

              <p className="text-gray-700">
                Понимание того, как рассчитывается кредитный рейтинг, поможет заранее подготовиться к подаче заявки.
              </p>
            </section>

            {/* Why Banks Refuse */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Почему банк может отказать в кредите
              </h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-4">Причин отказа несколько:</h4>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    низкий или нестабильный доход
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    высокий ПДН
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    плохая кредитная история
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    слишком большое количество действующих кредитов
                  </li>
                  <li className="flex items-center">
                    <Icon name="X" size={16} className="text-red-600 mr-2" />
                    предоставление недостоверных данных
                  </li>
                </ul>
                <p className="mt-4 text-red-800">
                  Если банк отказал, стоит выяснить причину и устранить её — это лучший способ повысить шанс на кредит в будущем.
                </p>
              </div>
            </section>

            {/* How to Improve Chances */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Как повысить шансы на одобрение кредита
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    <Icon name="Shield" size={20} className="inline mr-2 text-green-600" />
                    Поддерживайте положительную кредитную историю
                  </h3>
                  <p className="text-gray-700">
                    Оплачивайте кредиты вовремя, не допускайте просрочек и не берите лишние займы.
                  </p>
                </Card>

                <Card className="p-6 bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    <Icon name="TrendingDown" size={20} className="inline mr-2 text-blue-600" />
                    Снижайте долговую нагрузку
                  </h3>
                  <p className="text-gray-700">
                    Погашайте часть долгов перед подачей заявки на новый кредит.
                  </p>
                </Card>

                <Card className="p-6 bg-purple-50 border-purple-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    <Icon name="FileCheck" size={20} className="inline mr-2 text-purple-600" />
                    Предоставляйте полную и честную информацию
                  </h3>
                  <p className="text-gray-700">
                    Банки проверяют сведения о доходах и месте работы. Несоответствие данных может привести к отказу.
                  </p>
                </Card>

                <Card className="p-6 bg-orange-50 border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    <Icon name="Building2" size={20} className="inline mr-2 text-orange-600" />
                    Пользуйтесь продуктами банка
                  </h3>
                  <p className="text-gray-700">
                    Если у вас уже есть зарплатная карта, вклад или дебетовая карта в этом же банке, вероятность одобрения выше.
                  </p>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-lg text-gray-700">
                  Банки принимают решение о выдаче кредита, исходя из совокупности факторов — от кредитной истории и 
                  скорингового балла до уровня дохода и долговой нагрузки. Понимая, что влияет на одобрение кредита, 
                  можно заранее подготовиться и увеличить шансы на положительное решение, а также получить более выгодные условия.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Готовы подать заявку на кредит?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Подберем лучшие предложения от надежных банков с высокой вероятностью одобрения
                </p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Подобрать кредит
                </Button>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 px-4 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Читайте также</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                <a href="/blog/improve-credit-history" className="hover:text-blue-600">
                  Как улучшить кредитную историю — 7 шагов
                </a>
              </h4>
              <p className="text-gray-600 mb-4">
                Пошаговое руководство по восстановлению кредитной истории и повышению кредитного рейтинга.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/blog/improve-credit-history">
                  Читать
                  <Icon name="ArrowRight" size={14} className="ml-1" />
                </a>
              </Button>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                <a href="/blog/why-bank-refused-loan" className="hover:text-blue-600">
                  Почему банк отказал в кредите
                </a>
              </h4>
              <p className="text-gray-600 mb-4">
                Разбираем основные причины отказов и даем практические советы по их устранению.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/blog/why-bank-refused-loan">
                  Читать
                  <Icon name="ArrowRight" size={14} className="ml-1" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowBanksApproveLoans;