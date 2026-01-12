import React from 'react';
import { WHATSAPP_LINK } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  isExternal = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-lg",
    secondary: "bg-white text-brand-700 border border-brand-200 hover:border-brand-400 shadow-sm hover:shadow-md",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-600"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export const WhatsAppButton: React.FC<{text?: string, className?: string}> = ({ text = "Agendar pelo WhatsApp", className = "" }) => (
  <Button href={WHATSAPP_LINK} isExternal className={className}>
    <span className="mr-2">💬</span> {text}
  </Button>
);