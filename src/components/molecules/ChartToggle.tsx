'use client';
import React from 'react';
import { Button } from '../atoms/Button';

type ChartToggleProps = {
  chartType: 'Bar' | 'Line' | 'Pie';
  onChartTypeChange: (type: 'Bar' | 'Line' | 'Pie') => void;
};

export const ChartToggle: React.FC<ChartToggleProps> = ({ chartType, onChartTypeChange }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant={chartType === 'Bar' ? 'primary' : 'secondary'}
        onClick={() => onChartTypeChange('Bar')}
      >
        Bar
      </Button>
      <Button
        variant={chartType === 'Line' ? 'primary' : 'secondary'}
        onClick={() => onChartTypeChange('Line')}
      >
        Line
      </Button>
      <Button
        variant={chartType === 'Pie' ? 'primary' : 'secondary'}
        onClick={() => onChartTypeChange('Pie')}
      >
        Pie
      </Button>
    </div>
  );
};
