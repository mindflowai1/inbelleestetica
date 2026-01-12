import { Treatment, Step, FaqItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5531999812371";

export const TREATMENTS: Treatment[] = [
  {
    title: "Laser Lavieen",
    description: "Qualidade de pele, textura e viço com tecnologia e critério."
  },
  {
    title: "Lipo Enzimática",
    description: "Estratégia para contorno corporal com planejamento e acompanhamento."
  },
  {
    title: "PEIM",
    description: "Tratamento direcionado para vasinhos, respeitando as particularidades de cada caso."
  },
  {
    title: "Preenchimento",
    description: "Harmonia facial com naturalidade, respeitando traços e proporções."
  },
  {
    title: "Gluteomax",
    description: "Protocolo voltado para realce e contorno com planejamento individual."
  },
  {
    title: "Tratamento de Cicatriz",
    description: "Cuidado específico para melhorar textura e aparência da pele."
  },
  {
    title: "Criofrequência",
    description: "Tecnologia para firmeza e estímulo, integrada ao plano corporal."
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Avaliação e escuta",
    description: "Entendemos suas expectativas e prioridades."
  },
  {
    number: "02",
    title: "Plano personalizado",
    description: "Definição clara do caminho ideal para você."
  },
  {
    number: "03",
    title: "Tratamento acompanhado",
    description: "Cada sessão é ajustada conforme sua evolução."
  },
  {
    number: "04",
    title: "Pós e manutenção",
    description: "Cuidados para preservar e potencializar os resultados."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Preciso saber qual tratamento quero antes da avaliação?",
    answer: "Não. A avaliação existe para definir o melhor caminho."
  },
  {
    question: "Os tratamentos podem ser combinados?",
    answer: "Sim. Muitas vezes a integração gera resultados mais harmônicos."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Depende do objetivo e da resposta individual do corpo."
  },
  {
    question: "O atendimento é realmente personalizado?",
    answer: "Sim. Cada plano é construído para a pessoa, não para um padrão."
  }
];