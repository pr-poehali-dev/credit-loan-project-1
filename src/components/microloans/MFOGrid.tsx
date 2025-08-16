import React from 'react';
import MFOCard from './MFOCard';
import { mfoList } from './MFOData';

const MFOGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mfoList.map((mfo, index) => (
        <MFOCard key={index} mfo={mfo} />
      ))}
    </div>
  );
};

export default MFOGrid;