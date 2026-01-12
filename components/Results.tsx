import React from 'react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { CheckCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Results: React.FC = () => {
  const categories = ["Pele e textura", "Harmonia facial", "Contorno corporal", "Cicatriz"];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Resultados construídos com cuidado e equilíbrio.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Cada corpo e cada pele respondem de forma única. Por isso, os resultados na Inbelle são pensados em etapas, respeitando limites e priorizando aparência saudável.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10">
                    <CheckCircle className="text-brand-400 w-5 h-5" />
                    <span className="font-medium">{cat}</span>
                  </div>
                ))}
              </div>

              <Button href={WHATSAPP_LINK} isExternal variant="primary" className="w-full sm:w-auto">
                Quero entender qual é o meu plano ideal
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {/* Aesthetic Shots */}
             <div className="space-y-4">
               <FadeIn delay={200} direction="up">
                  <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=500" alt="Cuidado com a pele - textura" className="rounded-2xl opacity-90 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
               </FadeIn>
               <FadeIn delay={400} direction="up">
                  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=300" alt="Cuidado corporal - bem estar" className="rounded-2xl opacity-90 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
               </FadeIn>
             </div>
             <div className="space-y-4 pt-8">
               <FadeIn delay={300} direction="up">
                  <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300" alt="Harmonia facial - perfil" className="rounded-2xl opacity-90 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
               </FadeIn>
               <FadeIn delay={500} direction="up">
                  <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400&h=500" alt="Textura de creme estética" className="rounded-2xl opacity-90 hover:opacity-100 transition-opacity w-full h-auto object-cover" />
               </FadeIn>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;