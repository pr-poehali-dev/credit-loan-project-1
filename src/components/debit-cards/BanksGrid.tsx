import React from 'react';
import BankCard from './BankCard';
import { banksData, additionalBanksData } from './banksData';

const BanksGrid = () => {
  const allBanks = [...banksData, ...additionalBanksData];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allBanks.map((bank, index) => (
        <BankCard
          key={index}
          name={bank.name}
          logo={bank.logo}
          logoAlt={bank.logoAlt}
          description={bank.description}
          features={bank.features}
          buttonColor={bank.buttonColor}
          buttonHoverColor={bank.buttonHoverColor}
          href={bank.href}
          isPopular={bank.isPopular}
          logoBackground={bank.logoBackground}
        />
      ))}
    </div>
  );
};

export default BanksGrid;