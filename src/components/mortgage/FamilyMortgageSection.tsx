import Icon from '@/components/ui/icon';

const FamilyMortgageSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
          <Icon name="Heart" className="w-6 h-6 text-rose-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Семейная ипотека: как взять и кому доступна
        </h2>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="CheckCircle2" className="w-5 h-5 text-rose-600 mr-2" />
          Можно ли взять семейную ипотеку в 2025 году
        </h3>
        <p className="text-gray-700 mb-4">
          Семейная ипотека – одна из самых выгодных программ господдержки. Условия в 2025 году:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
            <span className="text-gray-600">Процентная ставка:</span>
            <span className="font-semibold text-rose-600">6% годовых</span>
          </div>
          <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
            <span className="text-gray-600">Максимальная сумма:</span>
            <span className="font-semibold">до 12 млн рублей</span>
          </div>
          <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
            <span className="text-gray-600">Срок кредитования:</span>
            <span className="font-semibold">до 30 лет</span>
          </div>
          <div className="flex justify-between bg-white/60 rounded-lg p-3 border border-rose-100">
            <span className="text-gray-600">Первоначальный взнос:</span>
            <span className="font-semibold">от 15%</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="Users" className="w-5 h-5 text-blue-600 mr-2" />
            Кто может взять семейную ипотеку
          </h3>
          <p className="text-gray-700 mb-4">Право на семейную ипотеку имеют:</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="Baby" className="w-4 h-4 text-pink-500" />
              <span className="text-gray-700 text-sm">Семьи с детьми, рожденными с 1 января 2018 года</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Heart" className="w-4 h-4 text-red-500" />
              <span className="text-gray-700 text-sm">Семьи, усыновившие детей после 1 января 2018 года</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700 text-sm">Семьи с детьми-инвалидами (независимо от даты рождения)</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Icon name="Home" className="w-5 h-5 text-green-600 mr-2" />
            Можно ли взять семейную ипотеку на вторичное жилье
          </h3>
          <p className="text-gray-700 mb-4">Семейную ипотеку можно взять на:</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" className="w-4 h-4 text-green-500" />
              <span className="text-gray-700 text-sm">Новостройки от аккредитованных застройщиков</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Home" className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700 text-sm">Вторичное жилье (с 2024 года)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="TreePine" className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-700 text-sm">Частные дома с земельными участками</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Building" className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700 text-sm">Апартаменты в жилых комплексах</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyMortgageSection;