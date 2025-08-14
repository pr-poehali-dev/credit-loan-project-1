import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" size={16} className="text-white" />
              </div>
              <span className="font-bold text-gray-900">ОДОБРЯЕМ</span>
            </div>
            <p className="text-gray-600 text-sm">
              Надёжные финансовые решения для вашего будущего
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/consumer-loan" className="hover:text-blue-600 transition-colors">Потребительские кредиты</a></li>
              <li><a href="/mortgage" className="hover:text-blue-600 transition-colors">Ипотечное кредитование</a></li>
              <li><a href="/auto-loan" className="hover:text-blue-600 transition-colors">Автокредитование</a></li>
              <li><a href="/debit-cards" className="hover:text-blue-600 transition-colors">Дебетовые карты</a></li>
              <li><a href="/blog" className="hover:text-blue-600 transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>+7 (800) 123-45-67</li>
              <li>info@premiumcredit.ru</li>
              <li>Москва, Тверская 1</li>
              <li>Пн-Пт: 9:00-18:00</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="p-2">
                <Icon name="MessageCircle" size={16} />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Icon name="Mail" size={16} />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Icon name="Phone" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col items-center space-y-4">
          <div className="text-center text-sm text-gray-600">© 2025 Одобряем. Все права защищены.</div>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;