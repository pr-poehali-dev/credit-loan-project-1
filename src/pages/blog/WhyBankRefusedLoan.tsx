import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyBankRefusedLoan = () => {
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
            <span className="text-gray-900">Почему банк отказал в кредите</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-red-100 text-red-800">Советы</Badge>
            <div className="flex items-center text-gray-600 text-sm">
              <Icon name="Calendar" size={14} className="mr-1" />
              <span className="mr-4">13 августа 2025</span>
              <Icon name="Clock" size={14} className="mr-1" />
              <span>6 мин чтения</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему банк отказал в кредите — причины и что делать, чтобы одобрили
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Разбираем, почему банк может отказать в кредите: ключевые причины, роль кредитной истории, 
            ПДН и скоринга. Даем советы, как повысить шанс на одобрение.
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
                Многие заемщики сталкиваются с неожиданной ситуацией: банк отказывает в выдаче кредита, 
                хотя кажется, что все условия выполнены. На самом деле каждая заявка проходит комплексную проверку, 
                и даже небольшой негативный фактор может повлиять на итоговое решение.
              </p>
            </div>

            {/* Main Reasons */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Основные причины отказа в кредите
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Рассмотрим, что чаще всего влияет на отрицательное решение банка.
              </p>

              <div className="space-y-6">
                {/* High PDN */}
                <Card className="p-6 border-l-4 border-red-500 bg-red-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="TrendingUp" size={24} className="inline mr-2 text-red-600" />
                    Высокий показатель долговой нагрузки (ПДН)
                  </h3>
                  <p className="text-gray-700">
                    Если ежемесячные платежи по кредитам составляют более 50–60% дохода, банк может посчитать 
                    вас финансово перегруженным и отказать в новом займе.
                  </p>
                </Card>

                {/* Bad Credit History */}
                <Card className="p-6 border-l-4 border-orange-500 bg-orange-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="FileText" size={24} className="inline mr-2 text-orange-600" />
                    Плохая кредитная история
                  </h3>
                  <p className="text-gray-700">
                    Просрочки, невыплаченные долги, частые реструктуризации — всё это сигнализирует банку о рисках. 
                    Если вы задаётесь вопросом, как улучшить кредитную историю, начните с закрытия просроченных 
                    платежей и аккуратного пользования кредитными продуктами.
                  </p>
                </Card>

                {/* False Data */}
                <Card className="p-6 border-l-4 border-purple-500 bg-purple-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="AlertTriangle" size={24} className="inline mr-2 text-purple-600" />
                    Недостоверные или неполные данные
                  </h3>
                  <p className="text-gray-700">
                    Банки проверяют информацию о доходах, месте работы и имуществе. Несоответствие заявленных 
                    данных реальным может привести к отказу.
                  </p>
                </Card>

                {/* Many Credits */}
                <Card className="p-6 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="CreditCard" size={24} className="inline mr-2 text-blue-600" />
                    Большое количество открытых кредитов
                  </h3>
                  <p className="text-gray-700">
                    Даже при хорошем доходе банк может посчитать, что ваша долговая нагрузка слишком велика.
                  </p>
                </Card>

                {/* Low Scoring */}
                <Card className="p-6 border-l-4 border-green-500 bg-green-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <Icon name="BarChart" size={24} className="inline mr-2 text-green-600" />
                    Низкий скоринговый балл
                  </h3>
                  <p className="text-gray-700">
                    Система скоринга оценивает десятки факторов: возраст, профессию, регион проживания, 
                    семейное положение. Если итоговый балл ниже минимального порога, заявка будет отклонена.
                  </p>
                </Card>
              </div>
            </section>

            {/* What to Do After Rejection */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Что делать после отказа
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Отказ в кредите — это не конец, а сигнал, что нужно улучшить свои финансовые показатели.
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Узнайте причину отказа</h4>
                    <p className="text-gray-700">
                      Банк обязан сообщить, по какому параметру заявка не прошла.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Снизьте ПДН</h4>
                    <p className="text-gray-700">
                      Погасите часть долгов или увеличьте официальный доход.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Исправьте кредитную историю</h4>
                    <p className="text-gray-700">
                      Закройте просрочки, оформите небольшой кредит и погасите его вовремя.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Проверьте документы</h4>
                    <p className="text-gray-700">
                      Убедитесь, что вся информация, подаваемая в банк, корректна.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Попробуйте другой банк</h4>
                    <p className="text-gray-700">
                      У разных банков разные скоринговые модели, поэтому условия могут отличаться.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Improve Future Chances */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Как повысить шанс на одобрение в будущем
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-start">
                    <Icon name="Building2" size={24} className="text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Пользуйтесь банковскими продуктами</h4>
                      <p className="text-gray-700 text-sm">
                        Дебетовые карты, вклады, зарплатные проекты повышают лояльность банка
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-start">
                    <Icon name="Clock" size={24} className="text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Избегайте частых заявок</h4>
                      <p className="text-gray-700 text-sm">
                        Много кредитных заявок подряд негативно влияет на скоринг
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <div className="flex items-start">
                    <Icon name="TrendingUp" size={24} className="text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Поддерживайте стабильный доход</h4>
                      <p className="text-gray-700 text-sm">
                        Официальное трудоустройство и регулярные поступления
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <div className="flex items-start">
                    <Icon name="Shield" size={24} className="text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Сохраняйте кредитную историю</h4>
                      <p className="text-gray-700 text-sm">
                        Своевременные платежи и отсутствие просрочек
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Important Note */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Icon name="Lightbulb" size={24} className="text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Важно помнить</h4>
                    <p className="text-gray-700">
                      Отказ в одном банке не означает, что вам откажут везде. Разные финансовые учреждения 
                      используют различные критерии оценки, и то, что не подходит одному банку, 
                      может быть приемлемо для другого.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-lg text-gray-700">
                  Банковский отказ в кредите чаще всего связан с высокой долговой нагрузкой, плохой кредитной историей 
                  или низким скоринговым баллом. Зная эти факторы и устранив их, можно значительно увеличить шансы 
                  на положительное решение при следующей заявке.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Получили отказ? Не отчаивайтесь!</h3>
                <p className="text-lg mb-6 opacity-90">
                  Поможем найти банк, который одобрит кредит именно вам
                </p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать банк
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
                <a href="/blog/how-banks-approve-loans" className="hover:text-blue-600">
                  Как банки принимают решение о выдаче кредита
                </a>
              </h4>
              <p className="text-gray-600 mb-4">
                Полный разбор факторов одобрения: скоринг, ПДН, кредитная история и требования банков.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/blog/how-banks-approve-loans">
                  Читать
                  <Icon name="ArrowRight" size={14} className="ml-1" />
                </a>
              </Button>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                <a href="/blog/improve-credit-history" className="hover:text-blue-600">
                  Как улучшить кредитную историю — 7 шагов
                </a>
              </h4>
              <p className="text-gray-600 mb-4">
                Практическое руководство по восстановлению кредитной репутации и повышению рейтинга.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/blog/improve-credit-history">
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

export default WhyBankRefusedLoan;