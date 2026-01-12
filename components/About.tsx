import React from 'react';
import { FadeIn } from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-brand-50 rounded-3xl p-8 md:p-12">
          
          <div className="w-full md:w-1/2">
            <FadeIn>
              <h2 className="font-serif text-3xl text-slate-900 mb-6">
                Inbelle: estética com acolhimento, técnica e intenção.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A Inbelle é uma clínica de estética integrativa em Belo Horizonte, focada em tratamentos faciais e corporais com atendimento individualizado.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Cada detalhe do atendimento foi pensado para oferecer conforto, confiança e resultados naturais, respeitando quem você é.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Atendimento individualizado",
                  "Estética facial e corporal",
                  "Foco em naturalidade",
                  "Santa Inês – BH"
                ].map((tag, idx) => (
                  <span key={idx} className="bg-white text-brand-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-brand-100">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 relative">
             <FadeIn delay={200} direction="left">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600" 
                    alt="Interior da clínica Inbelle" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
               </div>
             </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;