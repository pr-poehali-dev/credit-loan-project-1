import Icon from '@/components/ui/icon';

const ConclusionSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center">
          <Icon name="CheckCircle2" className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Заключение
          </h2>
          <p className="text-gray-600">Ключевые принципы получения ипотеки в 2025 году</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-gray-700 leading-relaxed">
            Взять ипотеку в 2025 году стало проще благодаря разнообразным программам господдержки. Семейная ипотека под 6% годовых, возможность использования материнского капитала и программы без первоначального взноса делают недвижимость доступнее для широкого круга заемщиков.
          </p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-gray-700 leading-relaxed">
            При выборе ипотечной программы важно учитывать не только процентную ставку, но и полную стоимость кредита, включая все комиссии и дополнительные расходы. Тщательная подготовка документов, улучшение кредитной истории и правильный выбор банка помогут получить наиболее выгодные условия.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" className="w-6 h-6 text-blue-600 mt-0.5" />
            <p className="text-gray-800 font-medium leading-relaxed">
              Помните, что ипотека – это долгосрочное обязательство, поэтому реалистично оценивайте свои финансовые возможности и не забывайте о необходимости создания финансовой подушки безопасности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;