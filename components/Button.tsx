import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = "button",
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-salmon focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-md";
  
  const variants = {
    primary: "bg-salmon text-white hover:bg-salmonHover shadow-sm",
    outline: "border-2 border-slate-200 text-slate-900 hover:border-salmon hover:text-salmon bg-transparent",
    text: "text-salmon hover:text-salmonHover px-0 py-0 bg-transparent underline-offset-4 hover:underline"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;