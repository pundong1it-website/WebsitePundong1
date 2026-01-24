import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import { PUNDONG_CENTER } from '../data/constants';

const MapSection = ({ title, description, services = [] }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-[#5B3E31] mb-4 uppercase tracking-wider">{title}</h2>
        <div className="h-1.5 w-24 bg-[#D4A373] mx-auto rounded-full mb-6"></div>
        <p className="text-[#6B5E4C] text-lg">{description}</p>
      </div>

      <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[500px] relative z-0">
        <MapContainer 
          center={PUNDONG_CENTER} 
          zoom={17} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          {/* If no services provided, show center marker (Home view) */}
          {services.length === 0 ? (
            <Marker position={PUNDONG_CENTER}>
              <Popup>
                <div className="text-center font-sans">
                  <strong className="text-[#5B3E31]">Dusun Pundong 1</strong><br/>
                  Tirtoadi, Mlati, Sleman
                </div>
              </Popup>
            </Marker>
          ) : (
            // If services provided, map through them (Layanan view)
            services.map((service) => (
              <Marker key={service.id} position={service.coords}>
                <Popup>
                  <div className="p-2 text-center">
                    <strong className="text-[#5B3E31] text-lg">{service.name}</strong><br/>
                    <span className="text-xs text-[#D4A373] uppercase font-bold tracking-widest">{service.type}</span>
                  </div>
                </Popup>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>
      
      {services.length === 0 && (
        <div className="mt-8 text-center bg-white p-6 rounded-2xl shadow-sm border border-[#F2E8DF]">
          <div className="flex items-center justify-center gap-2 text-[#5B3E31] font-bold">
            <MapPin size={20} className="text-[#D4A373]" />
            <span>Dusun Pundong 1, Desa Tirtoadi, Sleman, DI Yogyakarta</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSection;