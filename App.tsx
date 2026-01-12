import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Treatments from './components/Treatments';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

const Footer: React.FC = () => {
  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20estetica.png";
  
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6 group cursor-default">
          <img 
            src={logoUrl} 
            alt="INBELLE" 
            className="h-16 w-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl font-semibold text-slate-800 tracking-tight leading-none group-hover:text-slate-900 transition-colors">INBELLE</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-600 font-bold mt-1">Estética Integrativa</span>
          </div>
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Inbelle Estética Integrativa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-700 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Treatments />
        <Process />
        <Testimonials />
        <Results />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;