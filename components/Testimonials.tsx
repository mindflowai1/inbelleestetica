import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">
            Autoestima é quando o espelho começa a fazer sentido.
          </h2>
          
          <div className="bg-brand-50/50 p-10 rounded-3xl relative">
            <Quote className="absolute top-6 left-6 text-brand-200 w-12 h-12 -z-10" />
            
            <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed italic mb-8">
              "Cada pessoa chega com um objetivo diferente, mas sai com a mesma sensação: segurança, leveza e reconhecimento da própria beleza."
            </p>
            
            <div className="w-16 h-1 bg-brand-200 mx-auto rounded-full mb-6"></div>
            
            <p className="text-brand-700 font-medium">
              Naturalidade é um resultado que não precisa chamar atenção — ele simplesmente combina.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;