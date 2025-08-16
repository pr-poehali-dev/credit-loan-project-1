import Icon from '@/components/ui/icon';

const ApplicationGuideSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как оформить кредитную карту: пошаговое руководство</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Как оформить кредитную карту онлайн</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Icon name="Globe" className="text-blue-600 mr-3" size={20} />
              <span>Оформить кредитную карту онлайн — самый быстрый способ</span>
            </div>
            <div className="flex items-center">
              <Icon name="Building" className="text-green-600 mr-3" size={20} />
              <span>В отделении банка с консультацией специалиста</span>
            </div>
            <div className="flex items-center">
              <Icon name="Smartphone" className="text-purple-600 mr-3" size={20} />
              <span>Через мобильное приложение банка</span>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" className="text-orange-600 mr-3" size={20} />
              <span>По телефону горячей линии</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Какие документы нужны для оформления кредитной карты</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Icon name="FileText" className="text-blue-600 mr-3" size={20} />
              <span>Паспорт гражданина РФ</span>
            </div>
            <div className="flex items-center">
              <Icon name="Receipt" className="text-green-600 mr-3" size={20} />
              <span>Справка о доходах (не всегда требуется)</span>
            </div>
            <div className="flex items-center">
              <Icon name="FolderOpen" className="text-purple-600 mr-3" size={20} />
              <span>Дополнительные документы по требованию банка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuideSection;