import React from 'react';
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
          <p className="text-gray-600">Ключевые принципы выбора потребительского кредита</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-gray-700 leading-relaxed">
            Потребительский кредит в 2025 году остается актуальным финансовым инструментом для решения различных задач. При выборе кредита важно учитывать не только процентную ставку, но и полную стоимость кредита, условия досрочного погашения и репутацию банка.
          </p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-gray-700 leading-relaxed">
            Используйте кредитные калькуляторы для расчета платежей, сравнивайте предложения разных банков и внимательно читайте условия договора. Помните, что ответственный подход к выбору и обслуживанию кредита поможет вам не только решить финансовые задачи, но и улучшить кредитную историю для будущих займов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;