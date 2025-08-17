import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEOHead from '@/components/SEOHead';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Что нужно знать о страховках при ипотеке и автокредите — обязательные и добровольные условия",
      description: "Разбираем, какие страховки обязательны при ипотеке и автокредите, сколько они стоят, как отказаться и когда можно вернуть деньги.",
      slug: "loan-insurance-guide",
      date: "17 августа 2025",
      readTime: "9 мин",
      category: "Страхование",
      image: "/img/fd1e3d36-d633-4a66-9fd7-88dd9e294553.jpg"
    },
    {
      id: 2,
      title: "Ипотека или аренда: что выгоднее в 2025 году? Полный разбор",
      description: "Разбираем, что выбрать в 2025 году — ипотеку или аренду. Сравниваем платежи, ставки, плюсы и минусы. Советы, когда выгоднее ипотека, а когда аренда.",
      slug: "mortgage-vs-rent-2025",
      date: "17 августа 2025",
      readTime: "8 мин",
      category: "Ипотека",
      image: "/img/736d7b86-b983-4e00-8341-0087543d3f46.jpg"
    },
    {
      id: 3,
      title: "Как взять автокредит и не переплатить — пошаговый гид",
      description: "Подробный план, как выгодно взять автокредит и не переплатить: выбор банка, господдержка, страховка, досрочное погашение. Советы заемщикам.",
      slug: "auto-loan-guide",
      date: "17 августа 2025",
      readTime: "7 мин",
      category: "Автокредиты",
      image: "/img/87dab4fb-7f18-4a04-83bc-0be14b31086c.jpg"
    },
    {
      id: 4,
      title: "Рефинансирование кредита: когда это выгодно",
      description: "Разбираем, когда выгодно рефинансировать кредит: снижение ставки, объединение займов, сокращение переплаты. Советы и подводные камни.",
      slug: "credit-refinancing",
      date: "16 августа 2025",
      readTime: "7 мин",
      category: "Кредиты",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Как быстро погасить кредит и сэкономить на процентах",
      description: "Рассказываем, как быстро погасить кредит и снизить переплату: советы по досрочному погашению, правильному выбору срока и экономии на процентах.",
      slug: "fast-loan-repayment",
      date: "16 августа 2025",
      readTime: "6 мин",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Пошаговый план получения ипотеки — от заявки до договора",
      description: "Подробная инструкция по получению ипотеки: заявка в банк, проверка, документы, выбор квартиры, оценка и подписание договора.",
      slug: "mortgage-step-by-step",
      date: "16 августа 2025",
      readTime: "8 мин",
      category: "Ипотека",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Как банки принимают решение о выдаче кредита",
      description: "Узнайте, что влияет на одобрение кредита: ключевые факторы, роль кредитной истории, кредитного скоринга и ПДН.",
      slug: "how-banks-approve-loans",
      date: "13 августа 2025",
      readTime: "7 мин",
      category: "Кредиты",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Как улучшить кредитную историю — 7 шагов",
      description: "Пошаговое руководство, как улучшить кредитную историю, повысить кредитный рейтинг и увеличить шансы на одобрение займа.",
      slug: "improve-credit-history",
      date: "13 августа 2025",
      readTime: "5 мин",
      category: "Кредитная история",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Почему банк отказал в кредите — причины и решения",
      description: "Разбираем, почему банк может отказать в кредите: ключевые причины, роль кредитной истории, ПДН и скоринга.",
      slug: "why-bank-refused-loan",
      date: "13 августа 2025", 
      readTime: "6 мин",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=400&fit=crop"
    }
  ];

  return (
    <>
      <SEOHead
        title="Блог о кредитах и финансах — Экспертные советы и обзоры банков"
        description="Полезные статьи о кредитах, банках, советы по получению кредитов и улучшению кредитной истории"
        keywords="блог о кредитах, финансовые советы, банковские продукты, кредитная история, одобрение кредита, банки России, потребительские кредиты, ипотека, автокредиты, скоринг банка, ПДН"
        url="/blog"
        type="website"
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Блог о кредитах и финансах",
            "description": "Полезные статьи о кредитах, банках, советы по получению кредитов и улучшению кредитной истории",
            "url": "https://odobrilicredit.ru/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Одобрили Кредит",
              "url": "https://odobrilicredit.ru"
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Рефинансирование кредита: когда это выгодно",
                "description": "Разбираем, когда выгодно рефинансировать кредит: снижение ставки, объединение займов, сокращение переплаты. Советы и подводные камни.",
                "url": "https://odobrilicredit.ru/blog/credit-refinancing",
                "datePublished": "2025-08-16T00:00:00.000Z",
                "dateModified": "2025-08-16T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по кредитам"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Как быстро погасить кредит и сэкономить на процентах",
                "description": "Рассказываем, как быстро погасить кредит и снизить переплату: советы по досрочному погашению, правильному выбору срока и экономии на процентах.",
                "url": "https://odobrilicredit.ru/blog/fast-loan-repayment",
                "datePublished": "2025-08-16T00:00:00.000Z",
                "dateModified": "2025-08-16T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по кредитам"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Пошаговый план получения ипотеки — от заявки до договора",
                "description": "Подробная инструкция по получению ипотеки: заявка в банк, проверка, документы, выбор квартиры, оценка и подписание договора.",
                "url": "https://odobrilicredit.ru/blog/mortgage-step-by-step",
                "datePublished": "2025-08-16T00:00:00.000Z",
                "dateModified": "2025-08-16T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по ипотеке"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Как банки принимают решение о выдаче кредита",
                "description": "Узнайте, что влияет на одобрение кредита: ключевые факторы, роль кредитной истории, кредитного скоринга и ПДН.",
                "url": "https://odobrilicredit.ru/blog/how-banks-approve-loans",
                "datePublished": "2025-08-13T00:00:00.000Z",
                "dateModified": "2025-08-13T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по кредитам"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Как улучшить кредитную историю — 7 шагов",
                "description": "Пошаговое руководство, как улучшить кредитную историю, повысить кредитный рейтинг и увеличить шансы на одобрение займа.",
                "url": "https://odobrilicredit.ru/blog/improve-credit-history",
                "datePublished": "2025-08-13T00:00:00.000Z",
                "dateModified": "2025-08-13T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по кредитам"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Почему банк отказал в кредите — причины и решения",
                "description": "Разбираем, почему банк может отказать в кредите: ключевые причины, роль кредитной истории, ПДН и скоринга.",
                "url": "https://odobrilicredit.ru/blog/why-bank-refused-loan",
                "datePublished": "2025-08-13T00:00:00.000Z",
                "dateModified": "2025-08-13T00:00:00.000Z",
                "author": {
                  "@type": "Person",
                  "name": "Эксперт по кредитам"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Одобрили Кредит"
                }
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" itemScope itemType="https://schema.org/Blog">
        <Header />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 sm:py-4 px-4 border-b">
        <div className="max-w-6xl mx-auto px-2">
          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 flex-wrap" aria-label="Хлебные крошки">
            <a href="/" className="hover:text-blue-600 touch-manipulation" aria-label="Перейти на главную страницу">Главная</a>
            <Icon name="ChevronRight" size={12} className="sm:size-4" />
            <span className="text-gray-900">Блог</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 px-4" itemProp="about">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 px-6 py-2 text-base">
            <Icon name="BookOpen" size={16} className="mr-2" />
            Финансовый блог
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="name">
            Полезные статьи о кредитах и финансах
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Экспертные советы, разборы банковских продуктов и практические рекомендации 
            для успешного получения кредитов
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Актуальные статьи о кредитах
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" itemScope itemType="https://schema.org/ItemList">
            {articles.map((article, index) => (
              <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white touch-manipulation" itemScope itemType="https://schema.org/BlogPosting" itemProp="itemListElement">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    itemProp="image"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    <span className="mr-4">{article.date}</span>
                    <Icon name="Clock" size={14} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors" itemProp="headline">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3" itemProp="description">
                    {article.description}
                  </CardDescription>
                  
                  {/* Hidden structured data */}
                  <meta itemProp="url" content={`https://odobrilicredit.ru/blog/${article.slug}`} />
                  <meta itemProp="datePublished" content="2025-08-13T00:00:00.000Z" />
                  <meta itemProp="dateModified" content="2025-08-13T00:00:00.000Z" />
                  <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{display: 'none'}}>
                    <meta itemProp="name" content="Эксперт по кредитам" />
                  </div>
                  <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{display: 'none'}}>
                    <meta itemProp="name" content="Одобрили Кредит" />
                    <meta itemProp="url" content="https://odobrilicredit.ru" />
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white touch-manipulation"
                  >
                    <a href={`/blog/${article.slug}`} aria-label={`Читать статью: ${article.title}`}>
                      Читать статью
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Нужен кредит прямо сейчас?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Подберем лучшие предложения от проверенных банков
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 touch-manipulation" asChild>
            <a href="/consumer-loan#banks-partners" aria-label="Перейти к банкам-партнёрам для подбора потребительского кредита">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Подобрать кредит
            </a>
          </Button>
        </div>
      </section>
      
      {/* SEO Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Экспертные статьи о кредитах и банках</h2>
            <p className="text-gray-700 mb-4">
              Наш финансовый блог содержит актуальную информацию о банковских продуктах, 
              кредитных программах и практические советы по улучшению финансового состояния. 
              Эксперты регулярно публикуют обзоры банков, анализ условий кредитования и 
              рекомендации по выбору оптимальных предложений.
            </p>
            <p className="text-gray-700 mb-4">
              Здесь вы найдете подробные руководства по улучшению кредитной истории, 
              разборы причин отказов в кредитах и способы их устранения. Мы помогаем 
              разобраться в особенностях банковского скоринга и требованиях к заемщикам.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Популярные темы блога:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Как получить одобрение кредита в банке</li>
              <li>Способы улучшения кредитной истории</li>
              <li>Анализ причин отказов в кредитах</li>
              <li>Обзоры банковских продуктов и условий</li>
              <li>Советы по снижению процентных ставок</li>
              <li>Особенности ипотечного кредитования</li>
              <li>Потребительские кредиты: выбор и оформление</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
};

export default BlogPage;