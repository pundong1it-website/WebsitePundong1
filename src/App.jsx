import React, { useEffect } from 'react';
// Mengganti BrowserRouter dengan HashRouter untuk stabilitas hosting statis
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// --- IMPORT COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- IMPORT PAGES ---
import Home from './pages/Home';
import LayananPublik from './pages/LayananPublik';
import Umkm from './pages/Umkm';
import Potensi from './pages/Potensi';

import { setupLeafletMarkers } from './utils/leaflet-config';

const App = () => {
  // Inisialisasi marker Leaflet satu kali saat aplikasi dimuat
  useEffect(() => {
    setupLeafletMarkers();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFBF7] text-[#3E362E] font-sans">
        {/* Global CSS untuk Font dan Peta */}
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
            .font-serif { font-family: 'Lora', serif; }
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
            .leaflet-container { z-index: 1; }`}
        </style>

        {/* Navbar akan otomatis menyesuaikan link berdasarkan URL saat ini */}
        <Navbar />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<LayananPublik />} />
            <Route path="/umkm" element={<Umkm />} />
            <Route path="/potensi" element={<Potensi />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;