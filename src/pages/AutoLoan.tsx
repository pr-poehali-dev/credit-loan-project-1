import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const AutoLoan = () => {
  useEffect(() => {
    document.title = "Взять автокредит в 2025 году — лучшие банки, условия и советы";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Где выгодно взять автокредит в 2025 году. Банки, автосалоны, автокредит без первоначального взноса и с плохой кредитной историей.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Где выгодно взять автокредит в 2025 году. Банки, автосалоны, автокредит без первоначального взноса и с плохой кредитной историей.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-purple-600 hover:text-purple-700"
          onClick={() => window.history.back()}
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к кредитам
        </Button>

        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full mb-6">
              <Icon name="Car" size={24} />
              <span className="font-semibold">Автокредит 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Взять автокредит в 2025 году — полный гид
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Автокредит в 2025 году остаётся одним из самых популярных способов покупки автомобиля, будь то новая или подержанная машина. Возможность взять автокредит есть почти в каждом банке, а автосалоны предлагают программы в сотрудничестве с кредитными организациями.
            </p>
          </div>

          <Card className="border-l-4 border-l-purple-500 shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Ниже разберём, где взять автокредит, какие условия предлагают банки, возможно ли оформить его без первоначального взноса или с плохой кредитной историей, а также дадим практические советы по выгодному оформлению.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Где можно взять автокредит</h2>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Выбор места оформления зависит от того, что для вас важнее — минимальная ставка, скорость одобрения или отсутствие строгих требований.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Icon name="Building2" size={20} className="text-purple-600" />
                    Банки с выгодными условиями
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Если вы хотите взять автокредит в банке, обратите внимание на крупные федеральные организации — они предлагают:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>ставки от 4–5% по госпрограммам («Первый автомобиль», «Семейный автомобиль»);</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>специальные условия при покупке у партнёрских дилеров;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>возможность подать заявку онлайн.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    В каком банке взять автокредит — зависит от ваших параметров: дохода, кредитной истории, региона. Среди популярных вариантов: Сбербанк, ВТБ, Газпромбанк, Тинькофф, Россельхозбанк.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Icon name="Store" size={20} className="text-blue-600" />
                    Автосалоны и партнёрские программы
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Взять автокредит в автосалоне удобно: можно оформить всё за один визит. Но ставка может быть выше, чем в банке напрямую. Иногда дилеры предлагают скидки по проценту, если оформлять кредит у их партнёра.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Icon name="Target" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Какой автокредит выбрать</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">Перед тем как взять автокредит, нужно определиться:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Icon name="Circle" size={8} className="text-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Новый автомобиль или подержанный</strong> — условия и ставки могут различаться;</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Circle" size={8} className="text-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Срок кредита</strong> — чем дольше срок, тем ниже ежемесячный платёж, но выше переплата;</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Circle" size={8} className="text-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Размер первоначального взноса</strong> — влияет на ставку и вероятность одобрения.</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Icon name="Wallet" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Взять автокредит без первоначального взноса</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Многих интересует, можно ли взять автокредит без первоначального взноса. Это реально, но банк компенсирует риск повышенной ставкой.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Где можно оформить кредит без первого взноса</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                    <span>банки с программами «0% первый взнос»;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                    <span>автосалоны, субсидирующие ставку;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                    <span>кредиты под залог недвижимости или другого автомобиля.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <p className="text-gray-700 mb-3 font-semibold">Чтобы повысить шансы на одобрение:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Подайте заявку в несколько банков;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Предоставьте справки о доходах;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Рассмотрите более короткий срок кредита.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Взять автокредит с плохой кредитной историей</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Взять автокредит с плохой кредитной историей сложнее, но возможно.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Как банки одобряют кредит при испорченной истории</h3>
                <p className="text-gray-700 mb-4">Обычно требуют:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>первоначальный взнос от 30%;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>обязательное КАСКО;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-red-600 mt-1 flex-shrink-0" />
                    <span>поручителя или созаёмщика.</span>
                  </li>
                </ul>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-gray-800">
                    <strong>Совет:</strong> если вы недавно погасили просрочку, оформите небольшой потребительский кредит и выплатите его вовремя — это повысит рейтинг.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon name="Car" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Автокредит на новый и подержанный автомобиль</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-green-600" />
                    Новый автомобиль
                  </h3>
                  <p className="text-gray-700">
                    ниже ставка, больше предложений с господдержкой, но выше стоимость авто.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Icon name="RefreshCw" size={20} className="text-blue-600" />
                    Подержанный автомобиль
                  </h3>
                  <p className="text-gray-700">
                    ставка немного выше, но стартовая цена меньше. Можно взять автокредит на подержанный автомобиль у банка или в салоне.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Как подать заявку и повысить шансы одобрения</h2>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                  <Icon name="Search" size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Сравните условия не менее чем в 5 банках.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                  <Icon name="Calculator" size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Рассчитайте полную стоимость кредита, включая страховку и комиссии.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                  <Icon name="Smartphone" size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Используйте онлайн-калькуляторы автокредита.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                  <Icon name="MapPin" size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Подавайте заявки в банки с программами для вашего региона.</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Советы, как выгодно оформить автокредит</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                  <Icon name="Tag" size={20} className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Ищите акции дилеров и банков: иногда скидка по ставке достигает 2–3%.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                  <Icon name="TrendingUp" size={20} className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Старайтесь внести хотя бы минимальный первоначальный взнос.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                  <Icon name="Calendar" size={20} className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Рассмотрите возможность досрочного погашения без штрафов.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                  <Icon name="Scale" size={20} className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Если есть сомнения, что лучше — кредит или автокредит, посчитайте переплату в обоих случаях.</span>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">Итог</h2>
              </div>
              <p className="text-purple-100 leading-relaxed text-lg">
                В 2025 году можно взять автокредит под разные условия: от льготных программ с низким процентом до кредитов без первоначального взноса и с плохой кредитной историей. Главное — сравнить предложения, подготовить документы и подать заявки в несколько банков.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLoan;