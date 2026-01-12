import React from 'react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { MapPin, Instagram } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                  Pronta para cuidar de você com naturalidade?
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Converse com a Inbelle, tire suas dúvidas e agende sua avaliação.
                </p>
                
                <div className="space-y-6 mb-10">
                  <Button href={WHATSAPP_LINK} isExternal className="w-full sm:w-auto">
                    Agendar pelo WhatsApp
                  </Button>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-8">
                  <div className="flex items-start text-slate-600">
                    <MapPin className="text-brand-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <span>R. Contagem, 886 – Santa Inês – Belo Horizonte/MG</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Instagram className="text-brand-500 w-6 h-6 mr-3 flex-shrink-0" />
                    <span>@inbelle_estetica (Exemplo)</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder or Aesthetic Image */}
              <div className="bg-slate-200 h-96 lg:h-auto relative min-h-[400px]">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.469735496667!2d-43.91893392499252!3d-19.90467498147654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a4c8a8e1b3b%3A0x123456789abcdef!2sR.%20Contagem%2C%20886%20-%20Santa%20In%C3%AAs%2C%20Belo%20Horizonte%20-%20MG%2C%2031080-000!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localização da Clínica"
                ></iframe>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;