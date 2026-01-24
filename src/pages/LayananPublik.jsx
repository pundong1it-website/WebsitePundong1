import React from 'react';
import MapSection from '../components/MapSection';
import { publicServices } from '../data/constants';

const LayananPublik = () => {
  return (
    <div className="container mx-auto px-6 py-12 animate-in slide-in-from-bottom-5 duration-500">
      <MapSection 
        title="Peta Layanan Publik" 
        description="Fasilitas Umum di sekitar titik pusat Pundong 1." 
        services={publicServices} 
      />
    </div>
  );
};

export default LayananPublik;