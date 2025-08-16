import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BankFeature {
  text: string;
}

interface BankCardProps {
  name: string;
  logo: string;
  logoAlt: string;
  description: string;
  features: BankFeature[];
  buttonColor: string;
  buttonHoverColor: string;
  href?: string;
  isPopular?: boolean;
  logoBackground?: string;
}

const BankCard: React.FC<BankCardProps> = ({
  name,
  logo,
  logoAlt,
  description,
  features,
  buttonColor,
  buttonHoverColor,
  href,
  isPopular = false,
  logoBackground = "bg-white"
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      {isPopular && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Популярный
        </div>
      )}
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${logoBackground} rounded-lg flex items-center justify-center mr-4 overflow-hidden`}>
          <img 
            src={logo} 
            alt={logoAlt} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <Icon name="Check" size={16} className="text-green-500 mr-2" />
            {feature.text}
          </div>
        ))}
      </div>
      {href ? (
        <Button 
          className={`w-full ${buttonColor} ${buttonHoverColor}`}
          asChild
        >
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Оформить карту
          </a>
        </Button>
      ) : (
        <Button className={`w-full ${buttonColor} ${buttonHoverColor}`}>
          Оформить карту
        </Button>
      )}
    </div>
  );
};

export default BankCard;