import Icon from '@/components/ui/icon';

const NoDownPaymentSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <Icon name="DollarSign" className="w-6 h-6 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Взять ипотеку без первоначального взноса: реальные возможности
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Можно ли взять ипотеку без первоначального взноса
        </h3>
        <p className="text-gray-700 mb-6">
          Традиционно банки требуют первоначальный взнос от 10-15%, однако существуют программы, позволяющие взять ипотеку без первоначального взноса:
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
            Семейная ипотека с господдержкой
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Percent" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Ставка от 6% годовых</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Возможность 100% финансирования</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Для семей с детьми</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
            Ипотека для молодых семей
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Льготные условия для граждан до 35 лет</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingDown" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Субсидирование первоначального взноса</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Building" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Специальные государственные программы</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
            Ипотека с материнским капиталом
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Baby" className="w-4 h-4 text-pink-500" />
              <span className="text-gray-700">Материнский капитал в качестве первоначального взноса</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Banknote" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Сумма в 2025 году составляет 630 380 рублей</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="Route" className="w-5 h-5 text-yellow-600 mr-2" />
          Как взять ипотеку без первоначального взноса
        </h3>
        <p className="text-gray-700 mb-4">
          Для получения ипотеки без первоначального взноса рассмотрите следующие варианты:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-3">
            <Icon name="Baby" className="w-4 h-4 text-pink-500" />
            <span className="text-gray-700">Использование материнского капитала</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Users" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Участие в программе молодой семьи</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Search" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Поиск банков с программами 100% финансирования</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="UserPlus" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Привлечение поручителей с недвижимостью в залог</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDownPaymentSection;