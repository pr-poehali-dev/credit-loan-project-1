import Icon from '@/components/ui/icon';

const TipsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как правильно пользоваться кредитной картой</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Icon name="CheckCircle" className="text-green-600 mr-3" size={24} />
            Как максимально использовать льготный период кредитной карты
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Изучите условия льготного периода</li>
            <li>• Ведите учет трат и платежей</li>
            <li>• Погашайте полную задолженность вовремя</li>
            <li>• Используйте автоплатежи</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Icon name="AlertTriangle" className="text-red-600 mr-3" size={24} />
            Ошибки при использовании кредитной карты
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Снятие наличных в льготном периоде</li>
            <li>• Просрочка платежей</li>
            <li>• Превышение кредитного лимита</li>
            <li>• Игнорирование комиссий</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;