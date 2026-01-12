import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { FadeIn } from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-100/50 to-white -z-10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-brand-50 to-white -z-10 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex items-center space-x-2 text-brand-600 mb-6 font-medium text-sm tracking-wider uppercase">
              <span className="w-8 h-[1px] bg-brand-400"></span>
              <span>Estética Integrativa</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
              Estética integrativa para realçar sua beleza com <span className="italic text-brand-600">naturalidade</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Tratamentos faciais e corporais com atendimento individualizado, tecnologia e um plano pensado para você — do jeito que sua autoestima merece.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Protocolos personalizados, não procedimentos genéricos",
                "Foco em harmonia, pele e contorno",
                "Experiência acolhedora do início ao pós-tratamento"
              ].map((item, index) => (
                <div key={index} className="flex items-start text-slate-700">
                  <div className="min-w-6 mt-1 text-brand-500">
                    <ArrowRight size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={WHATSAPP_LINK} isExternal>
                Agendar avaliação pelo WhatsApp
              </Button>
              <Button variant="secondary" href="#treatments">
                Conhecer tratamentos
              </Button>
            </div>

            <div className="flex items-center text-slate-500 text-sm font-medium">
              <MapPin size={16} className="text-brand-500 mr-2" />
              Santa Inês – Belo Horizonte
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative Image */}
      <FadeIn direction="left" delay={300} className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4">
         <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800&h=1200" 
            alt="Hero Estética"
            className="w-full h-full object-cover rounded-l-3xl shadow-2xl opacity-90"
          />
      </FadeIn>
    </section>
  );
};

export default Hero;