import Icon from '@/components/ui/icon';

const BankOffersSection = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-center mb-8">
        <div className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg">
          <Icon name="FileText" size={20} />
          <span className="font-semibold">Банки-партнёры</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Лучшие предложения банков</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* СберБанк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-green-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/bb273335-8717-461b-a405-dbab5e2bc82f.jpg" alt="СберБанк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">СберБанк</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Кредитный лимит до 1 млн рублей</li>
            <li>• Беспроцентный период на все покупки - 120 дней</li>
            <li>• Обслуживание и выпуск карты - бесплатно</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/CpNSOA4a?erid=2SDnje8KVjs" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* Т-Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-black/10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/625ac4f1-6c9c-492c-b049-349d3645cf9e.jpg" alt="Т-Банк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Т-Банк</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Кредитный лимит до 1 000 000 ₽</li>
            <li>• Беспроцентный период за покупки до 55 дней</li>
            <li>• Беспроцентный период за погашение кредитов 120 дней</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/qMN0f7EE?erid=2SDnjcyz7NY" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* ПСБ */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/a4d81d4e-da9a-4a0f-aa3d-62e21b98ec6d.jpg" alt="ПСБ" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">ПСБ</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Лимит кредитования до 1 000 000 ₽</li>
            <li>• Полная стоимость кредита 58,816%</li>
            <li>• Процентная ставка 59% годовых</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/yPYDohDR?erid=2SDnjcBdgG6" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* Уралсиб */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-purple-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/4809a2b6-fff8-42d2-9fcd-eb2c0dd32d6d.png" alt="Уралсиб" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Уралсиб</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• До 1 млн ₽ кредитный лимит</li>
            <li>• Бесплатное обслуживание навсегда</li>
            <li>• До 120 дней без процентов</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/K9fJiMd2?erid=2SDnjeTpMvR" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* Зенит Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-teal-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/c1bf3e98-cf91-46de-9232-941354fff010.png" alt="Зенит Банк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Зенит Банк</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Кредитный лимит до 2 000 000 ₽</li>
            <li>• Процентная ставка: 49,9% - 64%</li>
            <li>• ПСК: 48,836% - 62,847%</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/3JwviK95?erid=2SDnjcXHk4C" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* Совкомбанк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-red-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/2ea96d8a-10e8-409e-839d-dfdb05689917.jpg" alt="Совкомбанк" className="w-10 h-10 rounded" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Совкомбанк</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• ПСК - от 0% до 36,218%</li>
            <li>• Лимит кредитования - до 500 000 рублей</li>
            <li>• Период рассрочки - от 1 до 24 мес</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/pCgvSuoB?erid=Kra23XHz1" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>

        {/* Кредит Европа Банк */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-indigo-100 md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <Icon name="Globe" className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Кредит Европа Банк</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Оформление карты онлайн</li>
            <li>• Моментальный кешбек: 1,5% на все покупки</li>
            <li>• Рассрочка на 12 месяцев от 3000 рублей</li>
          </ul>
          <a 
            href="https://trk.ppdu.ru/click/0RVPn6bN?erid=Kra23qXrM" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
          >
            Оформить карту
          </a>
        </div>
      </div>
    </section>
  );
};

export default BankOffersSection;