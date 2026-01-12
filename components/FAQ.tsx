import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';
import { FadeIn } from './ui/FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="font-serif text-3xl text-slate-900">Dúvidas Frequentes</h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`border border-slate-200 rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-brand-50/50 border-brand-200 shadow-sm' : 'bg-white hover:border-brand-200'}`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span className={`font-medium text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-brand-600" />
                  ) : (
                    <ChevronDown className="text-slate-400" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;