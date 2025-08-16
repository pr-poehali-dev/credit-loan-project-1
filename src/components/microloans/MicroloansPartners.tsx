import React from 'react';
import MFOHeader from './MFOHeader';
import MFOGrid from './MFOGrid';

const MicroloansPartners = () => {
  return (
    <section id="mfo-partners" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <MFOHeader />
        <MFOGrid />
      </div>
    </section>
  );
};

export default MicroloansPartners;