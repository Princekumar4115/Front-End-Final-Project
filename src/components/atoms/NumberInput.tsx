import React from 'react';

type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  return (
    <input
      type="number"
      {...props}
      className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    />
  );
};
