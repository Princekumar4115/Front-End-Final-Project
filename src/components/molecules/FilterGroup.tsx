import React from 'react';
import { NumberInput } from '../atoms/NumberInput';
import { Typography } from '../atoms/Typography';

type FilterGroupProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

export const FilterGroup: React.FC<FilterGroupProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Typography variant="small">{label}</Typography>
      <NumberInput
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        min={0}
      />
    </div>
  );
};
