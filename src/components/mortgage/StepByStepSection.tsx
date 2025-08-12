import Icon from '@/components/ui/icon';

const StepByStepSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
          <Icon name="Route" className="w-6 h-6 text-cyan-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Взять ипотеку на квартиру: пошаговый алгоритм
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Как взять квартиру в ипотеку
        </h3>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
            Определение бюджета
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Рассчитайте максимальную сумму кредита</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Учтите ежемесячный доход и расходы</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="PiggyBank" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Заложите резерв на дополнительные расходы</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
            Выбор банка и программы
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Search" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Сравните условия разных банков</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="FileText" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Изучите требования к заемщикам</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Подберите подходящую программу</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
            Подача заявки
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Edit" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Заполните анкету онлайн или в отделении</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="FileStack" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">Приложите необходимые документы</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Дождитесь предварительного одобрения</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepSection;