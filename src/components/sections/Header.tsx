import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Закрываем меню при смене страницы
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Закрываем меню при клике на ссылку
  const handleMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Icon name="CreditCard" size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">ОДОБРЯЕМ</div>
              <p className="text-xs text-gray-500">Финансовые решения</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/consumer-loan" className="text-gray-600 hover:text-blue-600 transition-colors">Потребительский кредит</a>
            <a href="/mortgage" className="text-gray-600 hover:text-blue-600 transition-colors">Ипотека</a>
            <a href="/auto-loan" className="text-gray-600 hover:text-blue-600 transition-colors">Автокредит</a>
            <a href="/debit-cards" className="text-gray-600 hover:text-blue-600 transition-colors">Дебетовые карты</a>
            <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Блог</a>
          </nav>

          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="/consumer-loan" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="CreditCard" size={20} className="mr-3" />
                Потребительский кредит
              </a>
              <a 
                href="/mortgage" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="Building" size={20} className="mr-3" />
                Ипотека
              </a>
              <a 
                href="/auto-loan" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="Car" size={20} className="mr-3" />
                Автокредит
              </a>
              <a 
                href="/microloans" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="Zap" size={20} className="mr-3" />
                Микрозаймы
              </a>
              <a 
                href="/debit-cards" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="Wallet" size={20} className="mr-3" />
                Дебетовые карты
              </a>
              <a 
                href="/blog" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={handleMenuLinkClick}
              >
                <Icon name="BookOpen" size={20} className="mr-3" />
                Блог
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;