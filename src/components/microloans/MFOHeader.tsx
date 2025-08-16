import React from 'react';
import Icon from "@/components/ui/icon";

const MFOHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6">
        <Icon name="Building2" size={24} />
        <span className="font-semibold">МФО-партнёры</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Микрозаймы от проверенных МФО</h2>
      <p className="text-lg text-gray-600">Быстрое одобрение и выгодные условия</p>
    </div>
  );
};

export default MFOHeader;