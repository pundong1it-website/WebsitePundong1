import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect (adds shadow when scrolling down)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Helper to check if a link is active
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-[#D4A373] font-bold" 
      : "text-[#3E362E] hover:text-[#D4A373] transition-colors";
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-[#FDFBF7] py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-serif font-bold text-[#5B3E31]">
          Pundong<span className="text-[#D4A373]"> 1</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/" className={isActive('/')}>Beranda</Link>
          <Link to="/layanan" className={isActive('/layanan')}>Layanan Publik dan Fasilitas Umum</Link>
          <Link to="/umkm" className={isActive('/umkm')}>UMKM</Link>
          <Link to="/potensi" className={isActive('/potensi')}>Aktivitas & Potensi</Link>
        </div>

        {/* MOBILE MENU BUTTON (Hamburger) */}
        <button 
          className="md:hidden text-[#3E362E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 border-t border-gray-100">
          <Link to="/" className={isActive('/')}>Beranda</Link>
          <Link to="/layanan" className={isActive('/layanan')}>Layanan Publik</Link>
          <Link to="/umkm" className={isActive('/umkm')}>UMKM</Link>
          <Link to="/potensi" className={isActive('/potensi')}>Potensi</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;