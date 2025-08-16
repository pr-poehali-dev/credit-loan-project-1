import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MicroloansCTA = () => {
  const scrollToMFOGrid = () => {
    const mfoGrid = document.getElementById('mfo-grid');
    if (mfoGrid) {
      mfoGrid.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-blue-200">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Icon name="Target" size={32} className="text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Готовы получить микрозайм?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">Выбирайте лучшие предложения от надежных МФО с высокой вероятностью одобрения</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 text-green-600">
              <Icon name="CheckCircle" size={20} />
              <span className="font-medium">Быстрое одобрение</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Icon name="Shield" size={20} />
              <span className="font-medium">Надежные МФО</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <Icon name="Zap" size={20} />
              <span className="font-medium">За 15 минут</span>
            </div>
          </div>
          
          <Button
            onClick={scrollToMFOGrid}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="CreditCard" size={20} className="mr-2" />
            Выбрать МФО
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            ⭐ Более 23 проверенных МФО в нашем каталоге
          </p>
        </div>
      </div>
    </section>
  );
};

export default MicroloansCTA;