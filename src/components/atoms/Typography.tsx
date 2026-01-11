import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-bold tracking-tight text-gray-900';
      case 'h2':
        return 'text-2xl font-semibold text-gray-900';
      case 'h3':
        return 'text-xl font-semibold text-gray-900';
      case 'h4':
        return 'text-lg font-medium text-gray-900';
      case 'p':
        return 'text-base text-gray-700';
      case 'small':
        return 'text-sm text-gray-500';
      default:
        return 'text-base text-gray-700';
    }
  };

  const Tag = variant === 'p' ? 'p' : variant;

  return (
    <Tag className={`${getVariantClass()} ${className}`}>
      {children}
    </Tag>
  );
};
