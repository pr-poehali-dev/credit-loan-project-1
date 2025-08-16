import Icon from '@/components/ui/icon';

const InterestRatesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Льготные периоды кредитных карт: без процентов до 365 дней</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <Icon name="Calendar" className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-bold text-gray-900">Кредитные карты без процентов в 2025 году</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• 120 дней без процентов — стандартный период</li>
            <li>• 365 дней — максимальный льготный период</li>
            <li>• Условия сохранения льготного периода</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <Icon name="Percent" className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-bold text-gray-900">Процентные ставки по кредитным картам в 2025 году</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Минимальная ставка: от 11,9% годовых</li>
            <li>• Средняя по рынку: 25-35% годовых</li>
            <li>• Максимальная: до 49,9% годовых</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <Icon name="Banknote" className="text-purple-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-bold text-gray-900">Как снять наличные с кредитной карты</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• В своих банкоматах: 0-3%</li>
            <li>• В чужих банкоматах: 3-6%</li>
            <li>• За границей: 4-8%</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InterestRatesSection;