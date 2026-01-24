import React from 'react';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    <section className="bg-[#5B3E31] py-32 px-6 text-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10"></div>
      
      <div className="relative z-10 animate-in fade-in zoom-in duration-700">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">
          Selamat Datang di Website Pundong 1
        </h2>
        
        <div className="h-1 w-24 bg-[#D4A373] mx-auto mb-8 rounded-full"></div>
        
        <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Gerbang digital dan sekilas informasi mengenai dusun Pundong 1, Tirtoadi.
        </p>

        {/* --- BUTTON GROUP --- */}
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          
          {/* Button 1: UMKM */}
          <Link 
            to="/umkm"
            className="px-10 py-4 bg-[#D4A373] text-white rounded-2xl font-bold hover:bg-[#B68D5D] transition-all shadow-xl hover:-translate-y-1"
          >
            Galeri UMKM
          </Link>

          {/* Button 2: Potensi (Now same color as UMKM) */}
          <Link 
            to="/potensi"
            className="px-10 py-4 bg-[#D4A373] text-white rounded-2xl font-bold hover:bg-[#B68D5D] transition-all shadow-xl hover:-translate-y-1"
          >
            Aktivitas & Potensi
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;