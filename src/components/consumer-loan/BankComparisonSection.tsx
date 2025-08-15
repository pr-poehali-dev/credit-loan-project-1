import React from 'react';
import Icon from '@/components/ui/icon';

const BankComparisonSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
          <Icon name="Building2" className="w-6 h-6 text-violet-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Потребительские кредиты в банках: сравнение предложений
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Топ-7 банков с выгодными условиями
        </h3>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
            Сбербанк
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Надежность и репутация</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Широкая сеть отделений</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Льготы для зарплатных клиентов</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
            ВТБ
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Высокие суммы кредитования</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Гибкие условия</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Программы лояльности</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
            Банк ЗЕНИТ
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Выгодные ставки</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Персональный подход</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Надежность и стабильность</span>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://trk.ppdu.ru/click/XlIaQimB?erid=2SDnjdKGNEg" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
              Оформить в Банке ЗЕНИТ
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
            Альфа-Банк
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Быстрое рассмотрение заявок</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="User" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Индивидуальный подход</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Удобное мобильное приложение</span>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://trk.ppdu.ru/click/bFoELgmK?erid=2SDnjeBUY44" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
              Оформить в Альфа-Банке
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
            Совкомбанк
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Percent" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Конкурентные ставки</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Программы рассрочки</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Gift" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Специальные предложения</span>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://trk.ppdu.ru/click/TH2PKq63?erid=Kra246d9e" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
              Оформить в Совкомбанке
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
            <span className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 font-bold">6</span>
            Т-Банк
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-200">Инновационные решения</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-200">100% цифровой банк</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-200">Лучшие условия онлайн</span>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://trk.ppdu.ru/click/bwRIjaIG?erid=Kra23b5bW" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
              Оформить в Т-Банке
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">7</span>
            Региональные банки
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Более лояльные условия</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Учет местных особенностей</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Персональный сервис</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankComparisonSection;