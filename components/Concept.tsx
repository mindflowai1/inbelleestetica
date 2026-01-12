import React from 'react';
import { Heart, Sparkles, Activity } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6 leading-snug">
                Quando estética é sobre você — não sobre tendências.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Na Inbelle, estética integrativa significa olhar além do procedimento. Cada atendimento começa com escuta, avaliação e entendimento do seu objetivo, da sua rotina e do seu momento.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Aqui, o tratamento não é imposto — ele é construído junto com você, respeitando seu corpo, sua pele e sua identidade.
              </p>
              
              <div className="space-y-8 mb-10">
                {[
                  {
                    icon: <Activity className="w-6 h-6 text-brand-600" />,
                    title: "Diagnóstico com propósito",
                    desc: "Avaliação detalhada para entender o que realmente faz sentido para você."
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 text-brand-600" />,
                    title: "Plano facial e corporal integrado",
                    desc: "Tratamentos que conversam entre si, buscando equilíbrio e harmonia."
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-brand-600" />,
                    title: "Acompanhamento e cuidado contínuo",
                    desc: "Orientações claras e atenção ao pós para preservar resultados com segurança."
                  }
                ].map((feature, idx) => (
                  <FadeIn key={idx} delay={idx * 150}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-slate-600">{feature.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <Button variant="secondary" href="https://wa.me/5531999812371" isExternal>
                Quero conversar com a Inbelle
              </Button>
            </FadeIn>
          </div>

          {/* Visual Block */}
          <div className="order-1 lg:order-2 relative">
             <div className="grid grid-cols-2 gap-4">
                <FadeIn delay={200} direction="right">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600&h=800" 
                    alt="Ambiente relaxante e produtos de spa" 
                    className="rounded-2xl shadow-lg mt-12 w-full h-80 object-cover"
                  />
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600&h=800" 
                    alt="Mulher recebendo cuidados com a pele" 
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </FadeIn>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-100 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concept;