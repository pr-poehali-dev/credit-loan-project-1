import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Icon name="CreditCard" size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">ОДОБРЯЕМ</div>
              <p className="text-xs text-gray-500">Финансовые решения</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#loans" className="text-gray-600 hover:text-blue-600 transition-colors">Кредиты</a>
            <a href="#mortgage" className="text-gray-600 hover:text-blue-600 transition-colors">Ипотека</a>
            <a href="#auto" className="text-gray-600 hover:text-blue-600 transition-colors">Автокредит</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors">Калькулятор</a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Подать заявку
            </Button>
          </nav>

          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;