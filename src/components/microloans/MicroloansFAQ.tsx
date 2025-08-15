import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MicroloansFAQ = () => {
  const faqs = [
    {
      question: "Как быстро можно получить микрозайм онлайн?",
      answer: "Большинство МФО одобряют заявки в течение 5-15 минут. После одобрения деньги поступают на карту в течение 15 минут."
    },
    {
      question: "Можно ли получить микрозайм с плохой кредитной историей?",
      answer: "Да, многие МФО работают с клиентами с плохой кредитной историей. Они используют собственные системы скоринга и учитывают текущий доход."
    },
    {
      question: "Что нужно для получения первого займа без процентов?",
      answer: "Для получения беспроцентного займа нужно быть новым клиентом МФО, запросить сумму до 15 000 рублей на срок до 30 дней."
    },
    {
      question: "Какие документы нужны для оформления микрозайма?",
      answer: "Минимальный пакет: паспорт РФ, мобильный телефон и банковская карта. Некоторые МФО могут потребовать СНИЛС."
    },
    {
      question: "Безопасно ли брать микрозаймы онлайн?",
      answer: "Да, если обращаться в лицензированные МФО. Проверяйте лицензию на сайте Банка России и читайте отзывы клиентов."
    },
    {
      question: "На какую максимальную сумму можно взять микрозайм?",
      answer: "Большинство МФО выдают от 1 000 до 100 000 рублей. Новым клиентам обычно доступны суммы до 15 000-30 000 рублей."
    },
    {
      question: "Что будет, если не вернуть микрозайм вовремя?",
      answer: "При просрочке начисляются пени и штрафы. Важно своевременно связаться с МФО для реструктуризации долга."
    },
    {
      question: "Можно ли взять несколько микрозаймов одновременно?",
      answer: "Технически возможно, но не рекомендуется. Это увеличивает долговую нагрузку и риск просрочек."
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы о микрозаймах
          </h2>
          <p className="text-lg text-gray-600">
            Ответы на самые популярные вопросы о микрофинансировании
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="p-6 sm:p-8 bg-white hover:shadow-md transition-shadow"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start"
                itemProp="name"
              >
                <Icon name="HelpCircle" size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                {faq.question}
              </h3>
              <div 
                className="text-gray-700 leading-relaxed ml-8"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Answer Box */}
        <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-8">
          <div className="text-center">
            <Icon name="Zap" size={32} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Нужны деньги прямо сейчас?</h3>
            <p className="text-gray-700 mb-6">
              Получите микрозайм за 15 минут в надежной МФО с лицензией ЦБ РФ
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">15 мин</div>
                <div className="text-sm text-gray-600">Время одобрения</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">0%</div>
                <div className="text-sm text-gray-600">Первый займ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Онлайн процесс</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MicroloansFAQ;