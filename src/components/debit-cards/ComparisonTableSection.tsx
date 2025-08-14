import React from 'react';

const ComparisonTableSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Сравнение дебетовых карт с кэшбэком
          </h2>
          <p className="text-xl text-gray-600">
            Программы кэшбэка становятся важным фактором выбора дебетовой карты
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Банк</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Максимальный кэшбэк</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Популярные категории</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Процент на остаток</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Бесплатное обслуживание</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Альфа-Банк</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 33%</td>
                <td className="px-6 py-4 text-sm text-gray-600">Рестораны, АЗС, супермаркеты</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 7%</td>
                <td className="px-6 py-4 text-sm text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Тинькофф</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 30%</td>
                <td className="px-6 py-4 text-sm text-gray-600">Категории на выбор</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 6%</td>
                <td className="px-6 py-4 text-sm text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">ВТБ</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 15%</td>
                <td className="px-6 py-4 text-sm text-gray-600">Транспорт, развлечения</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 5%</td>
                <td className="px-6 py-4 text-sm text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">ОТП Банк</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 20%</td>
                <td className="px-6 py-4 text-sm text-gray-600">Супермаркеты, аптеки</td>
                <td className="px-6 py-4 text-sm text-gray-600">До 8%</td>
                <td className="px-6 py-4 text-sm text-green-600">Да</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;