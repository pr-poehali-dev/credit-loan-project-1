import Icon from '@/components/ui/icon';

const TopBanksSection = () => {
  return (
    <section className="mb-16" itemScope itemType="https://schema.org/Article">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Топ-5 банков с лучшими кредитными картами</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Альфа-Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-green-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/bb273335-8717-461b-a405-dbab5e2bc82f.jpg" alt="СберБанк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900" itemProp="name">Кредитная карта Альфа-Банк: лидер по популярности</h3>
          </div>
          <p className="text-gray-600 mb-4" itemProp="description">Кредитная карта Альфа-Банк — самый популярный выбор среди россиян в 2025 году.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Льготный период до 365 дней без процентов</li>
            <li>• Оформление онлайн за 5 минут</li>
            <li>• Одобрение даже с плохой КИ</li>
            <li>• Кредитный лимит до 3 000 000 ₽</li>
          </ul>
        </div>

        {/* Сбербанк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-green-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/bb273335-8717-461b-a405-dbab5e2bc82f.jpg" alt="СберБанк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Сбербанк</h3>
          </div>
          <p className="text-gray-600 mb-4">Кредитная карта Сбербанк остается выбором консерваторов.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Оформление в отделении или онлайн</li>
            <li>• Льготный период до 120 дней</li>
            <li>• Интеграция с экосистемой Сбера</li>
            <li>• Снятие без комиссии в банкоматах</li>
          </ul>
        </div>

        {/* Т-Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-black/10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/625ac4f1-6c9c-492c-b049-349d3645cf9e.jpg" alt="Т-Банк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Т-Банк</h3>
          </div>
          <p className="text-gray-600 mb-4">Кредитная карта Т-Банк Платинум для продвинутых пользователей.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 365 дней без процентов</li>
            <li>• Cashback до 30% в категориях</li>
            <li>• Бесплатная доставка на дом</li>
            <li>• Полностью цифровое обслуживание</li>
          </ul>
        </div>

        {/* ВТБ */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Icon name="Building" className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">ВТБ</h3>
          </div>
          <p className="text-gray-600 mb-4">ВТБ кредитная карта с привлекательными условиями.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Льготный период до 180 дней</li>
            <li>• Низкая ставка от 11,9% годовых</li>
            <li>• Снятие наличных без комиссии</li>
            <li>• Программа лояльности</li>
          </ul>
        </div>

        {/* Озон Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-purple-100">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Icon name="ShoppingBag" className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Озон Банк</h3>
          </div>
          <p className="text-gray-600 mb-4">Кредитная карта Озон идеально подходит для онлайн-шопинга.</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Повышенный cashback на Озон до 25%</li>
            <li>• Бесплатная доставка Озон</li>
            <li>• Льготный период 120 дней</li>
            <li>• Мгновенное одобрение онлайн</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopBanksSection;