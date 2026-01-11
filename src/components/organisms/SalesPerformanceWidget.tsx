'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { mockSalesData } from '@/data/mockSalesData';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { ChartToggle } from '../molecules/ChartToggle';
import { FilterGroup } from '../molecules/FilterGroup';

type ChartType = 'Bar' | 'Line' | 'Pie';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const SalesPerformanceWidget: React.FC = () => {
  const [chartType, setChartType] = useState<ChartType>('Bar');
  const [threshold, setThreshold] = useState(0);

  const filteredData = mockSalesData.filter(d => d.sales2024 > threshold);

  const renderChart = () => {
    switch (chartType) {
      case 'Bar':
        return (
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales2022" fill="#8884d8" />
            <Bar dataKey="sales2023" fill="#82ca9d" />
            <Bar dataKey="sales2024" fill="#ffc658" />
          </BarChart>
        );
      case 'Line':
        return (
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales2022" stroke="#8884d8" />
            <Line type="monotone" dataKey="sales2023" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sales2024" stroke="#ffc658" />
          </LineChart>
        );
      case 'Pie':
        return (
          <PieChart>
            <Pie data={filteredData} dataKey="sales2024" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <Typography variant="h2">Sales Performance</Typography>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <FilterGroup label="Min Sales" value={threshold} onChange={setThreshold} />
          <ChartToggle chartType={chartType} onChartTypeChange={setChartType} />
        </div>
      </div>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
