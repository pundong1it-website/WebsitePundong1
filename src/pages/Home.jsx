import React from 'react';
import Hero from '../components/Hero';
import MapSection from '../components/MapSection';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <section className="container mx-auto px-6 py-20">
        <MapSection 
          title="Lokasi" 
          description="Dusun Pundong 1 terletak di kelurahan Tirtoadi, Kecamatan Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta. Dusun ini terdari dari 2 RW dan 6 RT." 
        />
      </section>
    </div>
  );
};

export default Home;