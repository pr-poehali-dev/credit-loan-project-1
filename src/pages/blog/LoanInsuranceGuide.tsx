import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';

const LoanInsuranceGuide = () => {
  return (
    <>
      <SEOHead
        title="Страховки при ипотеке и автокредите 2025: обязательные и добровольные"
        description="🛡️ Полный гид по страховкам при кредитах: что обязательно, стоимость, как отказаться от навязанных услуг и вернуть деньги. Права заемщика."
        keywords="страховка при ипотеке 2025, КАСКО автокредит обязательно, страхование жизни кредит, как отказаться от страховки, период охлаждения страховка, навязанная страховка банк, возврат страховки при досрочном погашении, титульное страхование, ОСАГО автокредит, права заемщика страхование"
        url="/blog/loan-insurance-guide"
        type="article"
        publishedTime="2025-08-17T00:00:00.000Z"
        modifiedTime="2025-08-17T00:00:00.000Z"
        section="Страхование"
        tags={["страхование", "ипотека", "автокредит", "КАСКО", "права заемщика", "период охлаждения", "возврат страховки"]}
        image="/img/fd1e3d36-d633-4a66-9fd7-88dd9e294553.jpg"
        author="Эксперты по страхованию"
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Страховки при ипотеке и автокредите 2025: обязательные и добровольные",
            "description": "Полный гид по страховкам при кредитах: что обязательно, стоимость, как отказаться от навязанных услуг и вернуть деньги. Права заемщика.",
            "image": "https://odobrilicredit.ru/img/fd1e3d36-d633-4a66-9fd7-88dd9e294553.jpg",
            "author": {
              "@type": "Organization",
              "name": "Одобрили Кредит",
              "url": "https://odobrilicredit.ru"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Одобрили Кредит",
              "logo": {
                "@type": "ImageObject",
                "url": "https://odobrilicredit.ru/logo.png"
              }
            },
            "datePublished": "2025-08-17T00:00:00.000Z",
            "dateModified": "2025-08-17T00:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odobrilicredit.ru/blog/loan-insurance-guide"
            },
            "articleSection": "Страхование",
            "keywords": ["страхование", "ипотека", "автокредит", "КАСКО", "права заемщика"],
            "about": [
              {
                "@type": "Thing",
                "name": "Страхование при кредитах",
                "description": "Различные виды страховок при оформлении кредитов"
              },
              {
                "@type": "Thing", 
                "name": "КАСКО",
                "description": "Добровольное страхование автомобиля"
              },
              {
                "@type": "Thing", 
                "name": "Права заемщика",
                "description": "Законные права заемщиков при оформлении страховок"
              }
            ],
            "mentions": [
              {
                "@type": "Service",
                "name": "Страхование недвижимости",
                "description": "Обязательное страхование залоговой недвижимости при ипотеке"
              },
              {
                "@type": "Service",
                "name": "КАСКО",
                "description": "Добровольное комплексное автострахование"
              }
            ]
          })
        }}
      />
      
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-3 sm:py-4 px-4 border-b">
          <div className="max-w-4xl mx-auto px-2">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Блог", href: "/blog" },
                { label: "Страховки при ипотеке и автокредите" }
              ]}
              className="text-xs sm:text-sm"
            />
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
                  <span>17 августа 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={12} className="sm:size-4 mr-1" />
                  <span>9 мин чтения</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Что нужно знать о страховках при ипотеке и автокредите
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              При оформлении кредита на жильё или автомобиль банки почти всегда требуют страховку. Но не каждая из них обязательна. Знание правил страхования поможет сэкономить и избежать навязанных услуг.
            </p>
          </div>
        </header>

        {/* Article Image */}
        <div className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/img/fd1e3d36-d633-4a66-9fd7-88dd9e294553.jpg" 
              alt="Страхование при кредитах - защита и безопасность" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <main className="py-8 sm:py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Страховка при ипотеке */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Страховка при ипотеке — что обязательно, а что нет</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Обязательное страхование недвижимости</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <Icon name="AlertCircle" size={24} className="text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Обязательно по закону</h4>
                      <p className="text-red-700">
                        Закон требует застраховать предмет залога — квартиру или дом. Это защита банка: если жильё пострадает (пожар, затопление, катастрофа), страховая выплатит компенсацию.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Страхование жизни и здоровья</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <Icon name="User" size={24} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Добровольное</h4>
                      <p className="text-yellow-700">
                        Не является обязательным по закону, но банки включают его в договор, снижая ставку. При отказе ставка может быть выше на 1–3%.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Титульное страхование</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Icon name="FileText" size={24} className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Рекомендуемое</h4>
                      <p className="text-blue-700">
                        Актуально при покупке жилья на вторичном рынке. Оно защищает от риска утраты права собственности (например, если объявится наследник).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Страховка при автокредите */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Страховка при автокредите</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">КАСКО — почти всегда обязательно</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <Icon name="Car" size={24} className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Требование банка</h4>
                      <p className="text-orange-700">
                        При покупке автомобиля в кредит банк требует оформить КАСКО. Это защита залогового авто от угона или аварий.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">ОСАГО — обязательный полис для всех</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <Icon name="Shield" size={24} className="text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Обязательно по закону</h4>
                      <p className="text-red-700">
                        Даже без кредита ОСАГО обязателен по закону. Для банка это вторичная защита, но для водителя — требование ГИБДД.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Дополнительные страховки</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Icon name="Plus" size={24} className="text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Добровольные</h4>
                      <p className="text-green-700">
                        Некоторые банки предлагают страхование жизни, здоровья или от потери работы. Они добровольные, и от них можно отказаться.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Стоимость */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Сколько стоит страховка при ипотеке и автокредите</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-blue-200 bg-blue-50">
                    <div className="flex items-center mb-4">
                      <Icon name="Home" className="text-blue-600 mr-3" size={28} />
                      <h3 className="text-lg font-semibold text-blue-900">Ипотека</h3>
                    </div>
                    <p className="text-blue-800 mb-3">
                      Стоимость страхового полиса ~0,3–1% от остатка долга в год.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <p className="text-blue-900 font-medium">
                        Например: при сумме кредита 5 млн ₽ страховка обойдётся в 15–40 тыс. ₽ в год
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 border-orange-200 bg-orange-50">
                    <div className="flex items-center mb-4">
                      <Icon name="Car" className="text-orange-600 mr-3" size={28} />
                      <h3 className="text-lg font-semibold text-orange-900">Автокредит</h3>
                    </div>
                    <p className="text-orange-800 mb-3">
                      КАСКО стоит ~5–8% от стоимости автомобиля в год.
                    </p>
                    <div className="bg-orange-100 rounded-lg p-4">
                      <p className="text-orange-900 font-medium">
                        Например: машина за 2 млн ₽ = полис на 100–150 тыс. ₽ в год
                      </p>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Отказ от страховки */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Можно ли отказаться от страховки?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                    <Icon name="X" size={24} className="text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800">От страхования недвижимости при ипотеке отказаться нельзя.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Icon name="AlertTriangle" size={24} className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-orange-800">От КАСКО при автокредите — редко, только у отдельных банков.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                    <Icon name="CheckCircle" size={24} className="text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800">От страховки жизни, здоровья, потери работы — можно. Для этого используется «период охлаждения» (5–14 дней после оформления).</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Возврат денег */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Как вернуть деньги за страховку при кредите</h2>
                
                <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="Clock" size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Обратитесь в банк или страховую с заявлением в течение «периода охлаждения».</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CreditCard" size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Если досрочно закрыли кредит, можно вернуть часть премии за неиспользованный период.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="AlertCircle" size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">В случае навязанной страховки можно пожаловаться в Банк России.</p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Советы */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Советы заемщикам, чтобы не переплачивать</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800">Всегда уточняйте, какие страховки обязательны по закону, а какие — инициатива банка.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800">Сравнивайте предложения страховых компаний: вы вправе выбрать полис не только в банке.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800">Читайте условия возврата премии при досрочном погашении.</p>
                    </div>
                    <div className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800">Не бойтесь писать заявление на отказ от добровольной страховки.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">FAQ: Частые вопросы о страховках при ипотеке и автокредите</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Страховка при ипотеке обязательна или нет?</h3>
                    <p className="text-gray-700">
                      Обязательно только страхование предмета залога — квартиры или дома. Все остальные виды (жизнь, здоровье, титульное страхование) — добровольные. Банк может повысить ставку, если отказаться, но закон не обязывает брать эти полисы.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Страховка при автокредите обязательна или нет?</h3>
                    <p className="text-gray-700">
                      Обязателен только полис ОСАГО, так как это требование закона. КАСКО при автокредите чаще всего навязывают банки, чтобы защитить залоговый автомобиль. Формально оно добровольное, но без него банк может отказать в кредите или повысить ставку.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Можно ли вернуть страховку при досрочном погашении кредита?</h3>
                    <p className="text-gray-700">
                      Да, можно. При полном досрочном погашении кредита заемщик имеет право на возврат части страховой премии за неиспользованный период. Для этого нужно подать заявление в страховую компанию.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Обязательно ли страхование жизни при ипотеке?</h3>
                    <p className="text-gray-700">
                      Нет, закон не требует страховать жизнь и здоровье при ипотеке. Это дополнительный продукт. Банк предлагает его для снижения рисков и может давать скидку по ставке.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Что такое "период охлаждения" и как им воспользоваться?</h3>
                    <p className="text-gray-700">
                      Это срок (обычно 5–14 дней), в течение которого заемщик может отказаться от добровольной страховки и вернуть всю уплаченную сумму. Для этого подается заявление в страховую компанию.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Заключение */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6">
                  <p className="text-gray-900 text-lg leading-relaxed mb-0">
                    Страхование при ипотеке и автокредите защищает интересы банка, но не всегда выгодно заемщику. Обязательно страхуется только залог — недвижимость или автомобиль. Все остальные полисы — добровольные, от них можно отказаться или вернуть часть денег. Зная правила, вы сможете сэкономить десятки тысяч рублей.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center py-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Нужен кредит с выгодными условиями страхования?
                </h3>
                <p className="text-gray-600 mb-6">
                  Сравните предложения банков и выберите наиболее выгодный вариант
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                    asChild
                  >
                    <a href="/mortgage">
                      <Icon name="Home" className="mr-2" size={20} />
                      Ипотека
                    </a>
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                    asChild
                  >
                    <a href="/auto-loan">
                      <Icon name="Car" className="mr-2" size={20} />
                      Автокредит
                    </a>
                  </Button>
                </div>
              </section>

            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LoanInsuranceGuide;