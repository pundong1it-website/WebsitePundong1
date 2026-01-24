import React from 'react';
import UmkmCard from '../components/UmkmCard';
import MapSection from '../components/MapSection';
import { umkmData } from '../data/constants';

const Umkm = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B3E31]">
          Galeri UMKM Pundong 1
        </h2>
        <div className="h-1.5 w-24 bg-[#D4A373] mx-auto mt-4 mb-4"></div>
        <p className="text-[#6B5E4C]">Sekilas Mengenai UMKM-UMKM yang berada di Pundong 1</p>
      </div>

      <div className="flex flex-col gap-12 animate-in slide-in-from-bottom-5 duration-500 mb-20">
        {umkmData.map(item => (
          <UmkmCard key={item.id} item={item} />
        ))}
      </div>

      <div className="pt-10 border-t border-[#F2E8DF] mt-20">
        <MapSection 
          title="Peta Lokasi UMKM" 
          description="Temukan lokasi unit usaha warga Pundong 1 melalui peta interaktif berikut." 
          services={umkmData} 
        />
      </div>
    </div>
  );
};

export default Umkm;