import React from 'react';
import ProductPerformance from './ProductPerformance';
import CustomerInsights from './CustomerInsights';

export default function PerformanceInsights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ProductPerformance />
      <CustomerInsights />
    </div>
  );
}