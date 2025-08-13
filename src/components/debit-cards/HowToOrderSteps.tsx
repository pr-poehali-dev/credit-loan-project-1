import React from 'react';

const HowToOrderSteps = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Как заказать дебетовую карту: пошаговая инструкция
          </h2>
          <p className="text-xl text-gray-600">
            Простой алгоритм получения дебетовой карты от выбора банка до получения карты
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Выберите банк</h3>
            <p className="text-gray-600">Сравните предложения банков и выберите карту с подходящими условиями</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Подайте онлайн-заявку</h3>
            <p className="text-gray-600">Заполните заявку на сайте банка за 5-10 минут</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Получите одобрение</h3>
            <p className="text-gray-600">Дождитесь решения банка в течение 5-15 минут</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Получите карту</h3>
            <p className="text-gray-600">Получите карту курьером на дом или в отделении банка</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSteps;