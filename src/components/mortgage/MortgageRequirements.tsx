import Icon from '@/components/ui/icon';

const MortgageRequirements = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
          <Icon name="Home" className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Можно ли взять ипотеку в 2025 году: актуальные условия
        </h2>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="UserCheck" className="w-5 h-5 text-emerald-600 mr-2" />
          Основные требования для получения ипотеки
        </h3>
        <p className="text-gray-700 mb-4">
          Чтобы взять ипотеку в банке, необходимо соответствовать базовым критериям:
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Calendar" className="w-4 h-4 text-emerald-500" />
            <span className="text-gray-700">Возраст: от 21 года до 65-75 лет (в зависимости от банка)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Flag" className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">Гражданство: РФ с постоянной регистрацией</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Briefcase" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Стаж работы: минимум 3-6 месяцев на текущем месте</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="TrendingUp" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Доход: подтвержденный официальный доход</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="History" className="w-4 h-4 text-orange-500" />
            <span className="text-gray-700">Кредитная история: положительная или нейтральная</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="FileText" className="w-5 h-5 text-blue-600 mr-2" />
          Документы для оформления ипотеки
        </h3>
        <p className="text-gray-700 mb-4">
          Базовый пакет документов включает:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center space-x-3">
            <Icon name="CreditCard" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Паспорт гражданина РФ</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Receipt" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Справка о доходах (2-НДФЛ или по форме банка)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="BookOpen" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Трудовая книжка или трудовой договор</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Home" className="w-4 h-4 text-orange-500" />
            <span className="text-gray-700">Документы на приобретаемую недвижимость</span>
          </div>
          <div className="flex items-center space-x-3 md:col-span-2">
            <Icon name="Shield" className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">Справка об отсутствии задолженностей</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageRequirements;