import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Как банки принимают решение о выдаче кредита",
      description: "Узнайте, что влияет на одобрение кредита: ключевые факторы, роль кредитной истории, кредитного скоринга и ПДН.",
      slug: "how-banks-approve-loans",
      date: "13 августа 2025",
      readTime: "7 мин",
      category: "Кредиты",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Как улучшить кредитную историю — 7 шагов",
      description: "Пошаговое руководство, как улучшить кредитную историю, повысить кредитный рейтинг и увеличить шансы на одобрение займа.",
      slug: "improve-credit-history",
      date: "13 августа 2025",
      readTime: "5 мин",
      category: "Кредитная история",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
    },
    {
      id: 3,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 px-6 py-2 text-base">
            <Icon name="BookOpen" size={16} className="mr-2" />
            Финансовый блог
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Полезные статьи о кредитах и финансах
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Экспертные советы, разборы банковских продуктов и практические рекомендации 
            для успешного получения кредитов
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href={`/blog/${article.slug}`}>
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
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Icon name="CreditCard" size={20} className="mr-2" />
            Подобрать кредит
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;