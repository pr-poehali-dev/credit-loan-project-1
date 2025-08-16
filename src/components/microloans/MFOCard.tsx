import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface MFOData {
  name: string;
  logo: string;
  subtitle: string;
  amount: string;
  rate?: string;
  term: string;
  feature?: string;
  featureValue?: string;
  iconName: string;
  iconText: string;
  url: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}

interface MFOCardProps {
  mfo: MFOData;
}

const MFOCard: React.FC<MFOCardProps> = ({ mfo }) => {
  return (
    <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 ${mfo.borderColor} bg-white`}>
      <div className={`absolute top-0 right-0 w-32 h-32 ${mfo.bgColor} rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      <div className="relative text-center p-6">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg border-2 border-gray-100">
          {mfo.logo ? (
            <img 
              src={mfo.logo} 
              alt={`${mfo.name} - микрозайм`} 
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
          ) : (
            <span className={`font-bold text-lg ${mfo.textColor}`}>
              {mfo.name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{mfo.name}</h3>
        <p className={`text-base md:text-lg font-medium ${mfo.textColor} mb-6`}>{mfo.subtitle}</p>
        
        <div className="space-y-4 mb-8">
          <div className={`${mfo.bgColor.replace('bg-', 'bg-').replace('-500', '-50')} rounded-lg p-4`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm md:text-base text-gray-600">Сумма:</span>
              <span className="font-bold text-base md:text-lg">{mfo.amount}</span>
            </div>
            {mfo.rate && (
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base text-gray-600">Ставка:</span>
                <span className={`font-bold text-base md:text-lg ${mfo.textColor}`}>{mfo.rate}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base text-gray-600">{mfo.feature || 'Срок'}:</span>
              <span className={`font-bold text-base md:text-lg ${mfo.featureValue ? mfo.textColor : ''}`}>
                {mfo.featureValue || mfo.term}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Icon name={mfo.iconName as any} size={16} />
            <span>{mfo.iconText}</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className={`w-full ${mfo.buttonColor} ${mfo.buttonHoverColor} text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
          asChild
        >
          <a 
            href={mfo.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >Оформить займ</a>
        </Button>
        
        <p className="text-xs text-gray-500 mt-3">
          * Условия могут изменяться МФО
        </p>
      </div>
    </Card>
  );
};

export default MFOCard;