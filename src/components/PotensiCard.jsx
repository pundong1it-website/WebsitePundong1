import React from 'react';

const PotensiCard = ({ data }) => {
  return (
    <div className="bg-white p-10 rounded-[2rem] border-t-8 border-[#5B3E31] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 flex flex-col items-center text-center h-full">
      
      {/* Icon Container */}
      <div className="text-[#D4A373] bg-[#FDFBF7] p-4 rounded-full mb-6">
        {data.icon}
      </div>

      <h3 className="text-2xl font-serif font-bold mb-4 text-[#5B3E31]">
        {data.title}
      </h3>
      
      <p className="text-[#6B5E4C] leading-relaxed text-sm md:text-base">
        {data.desc}
      </p>
    </div>
  );
};

export default PotensiCard;