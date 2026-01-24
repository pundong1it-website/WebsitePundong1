import React from 'react';
import { MapPin, MessageCircle, Clock } from 'lucide-react';

const UmkmPage = ({ item }) => {
  return (
    <div className="max-w-[850px] mx-auto px-6 py-10 bg-white min-h-screen">
      
      {/* Header: Name and Phone Icon */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5B3E31]">
            {item.name}
          </h1>
          
          {/* Only render the WhatsApp icon if a phone number exists */}
          {item.phone && (
            <a 
              href={`https://wa.me/${item.phone}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-11 h-11 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all hover:scale-105 shadow-md shrink-0"
            >
              <MessageCircle size={24} fill="currentColor" />
            </a>
          )}
        </div>
        <div className="h-[1px] w-full bg-[#5B3E31] opacity-25"></div>
      </div>

      {/* Two Images Grid */}
      <div className={`mb-8 ${item.image2 ? 'grid grid-cols-2 gap-4 items-start' : 'flex justify-center'}`}>
  
        {/* Image 1: Always visible */}
        <div className={`rounded-xl overflow-hidden border border-gray-100 shadow-sm ${item.image2 ? 'w-full' : 'max-w-md w-full'}`}>
          <img 
            src={item.image1} 
            alt={`${item.name} 1`} 
            className={`w-full object-cover ${
              item.image2 
                ? 'h-72 md:h-[420px]' 
                /*w-full h-56 md:h-72 object-cover*/
                : 'h-64 md:h-80' // Reduced height for solo picture
            }`} 
          />
        </div>

        {/* Image 2: Only renders if data exists */}
        {item.image2 && (
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm w-full">
            <img 
              src={item.image2} 
              alt={`${item.name} 2`} 
              className="w-full h-72 md:h-[420px] object-cover" 
            />
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-10">
        <p className="text-[#6B5E4C] text-base md:text-lg leading-relaxed text-justify md:text-left font-light">
          {item.desc}
        </p>
      </div>

      {/* Info Section Container */}
      <div className="flex flex-col gap-4">
        {/* Location Section */}
        <div className="bg-[#FDFBF7] border border-[#F2E8DF] rounded-xl p-5 flex items-start gap-4">
          <div className="bg-white p-2.5 rounded-full shadow-sm border border-[#F2E8DF]">
            <MapPin size={22} className="text-[#D4A373] shrink-0" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#5B3E31] uppercase tracking-widest opacity-60 mb-1">
              Alamat Lengkap
            </span>
            <p className="text-[#6B5E4C] text-sm md:text-base leading-snug">
              {item.address}
            </p>
          </div>
        </div>

        {/* Operating Hours Section */}
        <div className="bg-[#FDFBF7] border border-[#F2E8DF] rounded-xl p-5 flex items-start gap-4">
          <div className="bg-white p-2.5 rounded-full shadow-sm border border-[#F2E8DF]">
            <Clock size={22} className="text-[#D4A373] shrink-0" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#5B3E31] uppercase tracking-widest opacity-60 mb-1">
              Jam Operasional
            </span>
            <p className="text-[#6B5E4C] text-sm md:text-base leading-snug">
              {item.hours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmkmPage;