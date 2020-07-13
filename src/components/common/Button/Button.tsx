import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`generic-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
