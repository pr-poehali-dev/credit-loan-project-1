import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const NotFoundPage = () => {
  useEffect(() => {
    // Установить HTTP статус 404 для поисковых роботов
    document.title = '404 - Страница не найдена | Одобрили Кредит';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Страница не найдена
            </h1>
            <p className="text-muted-foreground mb-8">
              К сожалению, запрашиваемая страница не существует или была перемещена.
              Возможно, вы перешли по неправильной ссылке.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/">
                <Icon name="Home" size={20} className="mr-2" />
                Вернуться на главную
              </Link>
            </Button>
            
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" asChild>
                <Link to="/consumer-loan">
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Потребительский кредит
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Полезные статьи
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/mortgage">
                  <Icon name="Home" size={16} className="mr-2" />
                  Ипотека
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
            <p>
              Если вы считаете, что это ошибка, пожалуйста, 
              <Link to="/blog" className="text-primary hover:underline ml-1">
                посетите наш блог
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;