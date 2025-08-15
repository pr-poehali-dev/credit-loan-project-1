import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const BankComparisonSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <Icon name="Building2" className="w-6 h-6 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Где взять ипотеку: сравнение банков и условий
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          В каком банке взять ипотеку выгоднее
        </h3>
      </div>

      {/* Секция с банками-партнерами */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full mb-4">
            <Icon name="Building2" size={20} />
            <span className="font-semibold">Банки-партнёры</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Ипотека от ведущих банков</h3>
          <p className="text-gray-600">Выгодные условия и быстрое одобрение</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Альфа-Банк */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-red-200 bg-white p-6">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md border border-gray-200">
                <span className="text-red-600 font-bold text-xl">А</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Альфа-Банк</h4>
              <p className="text-sm font-medium text-red-700 mb-4">Ипотека</p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 100 млн ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-red-600">от 16%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-bold">до 30 лет</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-600">
                  <Icon name="Zap" size={14} />
                  <span>Быстрое онлайн-одобрение</span>
                </div>
                
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-600">
                  <Icon name="User" size={14} />
                  <span>Индивидуальный подход</span>
                </div>
              </div>
              
              <Button 
                size="sm" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a 
                  href="https://trk.ppdu.ru/click/NxlG4ZJ2?erid=2SDnjeCspbN"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Icon name="ExternalLink" className="mr-1" size={16} />
                  Оформить ипотеку
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-2">
                * Условия могут изменяться банком
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">С</span>
            </div>
            Сбербанк
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Percent" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Ставка от 6% по семейной ипотеке</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Широкая сеть отделений</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Быстрое рассмотрение заявок</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">В</span>
            </div>
            ВТБ
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingDown" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Конкурентные ставки</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Гибкие условия по доходам</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Программы для зарплатных клиентов</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">Г</span>
            </div>
            Газпромбанк
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Специальные предложения для бюджетников</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Льготы для участников программ господдержки</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">А</span>
            </div>
            Альфа-Банк
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Быстрое онлайн-оформление</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="User" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Индивидуальный подход к заемщикам</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="Percent" className="w-5 h-5 text-amber-600 mr-2" />
          Процентные ставки по ипотеке в 2025 году
        </h3>
        <p className="text-gray-700 mb-4">Актуальные ставки по основным программам:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-medium">Базовая ипотека:</span>
              <span className="font-bold">от 16-20%</span>
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-medium">Семейная ипотека:</span>
              <span className="font-bold text-green-600">6%</span>
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-medium">Льготная ипотека:</span>
              <span className="font-bold">от 8%</span>
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-medium">Ипотека на вторичное жилье:</span>
              <span className="font-bold">от 18-22%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankComparisonSection;