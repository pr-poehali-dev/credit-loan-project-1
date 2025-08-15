import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MicroloansInternalLinks = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Другие финансовые продукты
          </h2>
          <p className="text-lg text-gray-600">
            Изучите наши предложения по кредитам, картам и ипотеке
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="CreditCard" size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Потребительские кредиты
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Кредиты до 5 млн рублей на любые цели. Ставка от 4.5% годовых.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="/consumer-loan" aria-label="Подробнее о потребительских кредитах">
                Подробнее
                <Icon name="ArrowRight" size={14} className="ml-1" />
              </a>
            </Button>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Building" size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Ипотечные кредиты
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ипотека на покупку жилья. Ставка от 7% годовых, первый взнос от 10%.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="/mortgage" aria-label="Подробнее об ипотечных кредитах">
                Подробнее
                <Icon name="ArrowRight" size={14} className="ml-1" />
              </a>
            </Button>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Car" size={24} className="text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Автокредиты
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Кредиты на покупку автомобиля. Ставка от 6% годовых, срок до 7 лет.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="/auto-loan" aria-label="Подробнее об автокредитах">
                Подробнее
                <Icon name="ArrowRight" size={14} className="ml-1" />
              </a>
            </Button>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Wallet" size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Дебетовые карты
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Карты с кэшбэком до 30% и бесплатным обслуживанием.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="/debit-cards" aria-label="Подробнее о дебетовых картах">
                Подробнее
                <Icon name="ArrowRight" size={14} className="ml-1" />
              </a>
            </Button>
          </Card>
        </div>

        {/* Related Blog Articles */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Полезные статьи о кредитах
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <a href="/blog/how-banks-approve-loans" className="hover:text-blue-600" aria-label="Как банки одобряют кредиты">
                  Как банки принимают решение о выдаче кредита
                </a>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Узнайте, что влияет на одобрение: скоринг, ПДН, кредитная история и доходы.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="/blog/how-banks-approve-loans" aria-label="Читать статью полностью">
                  Читать статью
                  <Icon name="ArrowRight" size={12} className="ml-1" />
                </a>
              </Button>
            </Card>

            <Card className="p-6 bg-white hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <a href="/blog/improve-credit-history" className="hover:text-blue-600" aria-label="Как улучшить кредитную историю">
                  Как улучшить кредитную историю — 7 шагов
                </a>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Пошаговое руководство по восстановлению кредитной истории и повышению рейтинга.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="/blog/improve-credit-history" aria-label="Читать статью полностью">
                  Читать статью
                  <Icon name="ArrowRight" size={12} className="ml-1" />
                </a>
              </Button>
            </Card>

            <Card className="p-6 bg-white hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                <a href="/blog/why-bank-refused-loan" className="hover:text-blue-600" aria-label="Почему банк отказал в кредите">
                  Почему банк отказал в кредите
                </a>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Основные причины отказов и практические советы по их устранению.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="/blog/why-bank-refused-loan" aria-label="Читать статью полностью">
                  Читать статью
                  <Icon name="ArrowRight" size={12} className="ml-1" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroloansInternalLinks;