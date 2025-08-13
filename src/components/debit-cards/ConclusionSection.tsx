import React from 'react';

const ConclusionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Заключение и рекомендации
          </h2>
          <p className="text-xl text-gray-600">
            Выбор дебетовой карты в 2025 году требует комплексного подхода
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            💡 Главный совет
          </h3>
          <p className="text-blue-700">
            Перед тем как заказать дебетовую карту, обязательно изучите актуальные условия на официальном сайте банка, так как тарифы и программы лояльности могут изменяться. Не стесняйтесь обращаться в службу поддержки банка для уточнения всех интересующих вас вопросов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;