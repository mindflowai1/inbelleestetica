import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group flex items-center"
      aria-label="Falar com a Inbelle no WhatsApp"
    >
      {/* Tooltip Label */}
      <span className="mr-3 bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-soft border border-brand-50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block">
        Fale conosco
      </span>
      
      {/* Button Circle */}
      <div className="bg-brand-600 text-white p-4 rounded-full shadow-xl shadow-brand-200/40 hover:bg-brand-700 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      </div>
      
      {/* Pulse Effect for visibility */}
      <span className="absolute inset-0 rounded-full bg-brand-400 opacity-20 animate-ping -z-10 group-hover:hidden"></span>
    </a>
  );
};