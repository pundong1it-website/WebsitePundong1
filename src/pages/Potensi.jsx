import React from 'react';
import PotensiCard from '../components/PotensiCard';
import { potensiData, galleryData } from '../data/constants';

const Potensi = () => {
  return (
    <div className="container mx-auto px-6 py-12 animate-in slide-in-from-bottom-5 duration-500">
      
      {/* --- SECTION 1: HEADER & CARDS --- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#5B3E31]">Potensi Dusun Pundong 1</h2>
        <div className="h-1 w-20 bg-[#D4A373] mx-auto mt-4 mb-2"></div>
        <p className="text-[#6B5E4C]">Sekilas mengenai Aktivitas dan Potensi Masyarakat Pundong 1.</p>
      </div>

      {/* Grid for Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {potensiData.map((p) => (
          <PotensiCard key={p.id} data={p} />
        ))}
      </div>

      {/* --- SECTION 2: GALLERY --- */}
      <div className="border-t border-[#E8E1D9] pt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-[#5B3E31]">Dokumentasi Kegiatan</h3>
          <p className="text-[#8C7E6F] mt-2">Rekam jejak aktivitas warga dalam membangun potensi desa.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
              {/* Image */}
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#D4A373] text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <p className="text-white font-serif text-lg">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Potensi;