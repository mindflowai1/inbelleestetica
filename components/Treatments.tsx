import React from 'react';
import { TREATMENTS, WHATSAPP_LINK } from '../constants';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

const Treatments: React.FC = () => {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              Tratamentos que a Inbelle domina — com protocolo personalizado.
            </h2>
            <p className="text-slate-600 text-lg">
              Cada tratamento é indicado após avaliação. Em muitos casos, a combinação inteligente de técnicas gera resultados mais naturais e duradouros.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TREATMENTS.map((treatment, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <FadeIn delay={400}>
            <Button href={WHATSAPP_LINK} isExternal>
              Me ajude a escolher o tratamento ideal
            </Button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Treatments;