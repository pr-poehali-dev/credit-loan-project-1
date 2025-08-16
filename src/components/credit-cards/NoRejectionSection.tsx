const NoRejectionSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Кредитные карты без отказа с плохой кредитной историей</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Кредитные карты без отказа: какие банки одобряют</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">Почта Банк</div>
              <div className="text-gray-600">Лояльные требования</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">Совкомбанк</div>
              <div className="text-gray-600">Упрощенное одобрение</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">Газпромбанк</div>
              <div className="text-gray-600">Гибкие критерии</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Оформить кредитную карту с плохой кредитной историей</h3>
          <p className="text-gray-600 mb-4">Даже с проблемной кредитной историей можно получить карту:</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">Хоум Кредит Банк</div>
              <div className="text-gray-600">Кредитная карта без отказа с плохой КИ</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">Русский Стандарт</div>
              <div className="text-gray-600">Специальные программы</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-900">МТС Банк</div>
              <div className="text-gray-600">Лояльный андеррайтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoRejectionSection;