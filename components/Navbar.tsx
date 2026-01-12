import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que é', href: '#concept' },
    { name: 'Tratamentos', href: '#treatments' },
    { name: 'Como Funciona', href: '#process' },
    { name: 'Sobre', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20estetica.png";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 md:gap-4 group">
              <img 
                src={logoUrl} 
                alt="INBELLE" 
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`} 
              />
              <div className={`flex flex-col transition-all duration-300 ${isScrolled ? 'opacity-90 scale-95' : 'opacity-100'}`}>
                <span className="font-serif text-xl md:text-2xl font-semibold text-slate-900 tracking-tight leading-none">INBELLE</span>
                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-brand-600 font-bold mt-1">Estética Integrativa</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm"
            >
              Agendar Avaliação
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-brand-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="block w-full text-center mt-4 px-3 py-3 rounded-md text-base font-medium bg-brand-600 text-white"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;