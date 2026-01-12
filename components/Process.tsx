import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { FadeIn } from './ui/FadeIn';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
              Um processo claro. Resultados mais consistentes.
            </h2>
            <p className="text-brand-600 font-medium tracking-wide text-sm uppercase">
              Metodologia Inbelle
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 200} className="relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-50 text-brand-600 font-serif text-xl font-bold flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 group-hover:border-brand-100">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <FadeIn delay={600}>
            <p className="text-lg font-serif italic text-slate-500">
              "Sem promessas milagrosas. Apenas estética feita com critério, intenção e respeito."
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Process;