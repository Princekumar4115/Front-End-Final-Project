import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-sm rounded-lg p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
};
