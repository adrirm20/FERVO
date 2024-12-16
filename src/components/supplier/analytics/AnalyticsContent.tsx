import React from 'react';
import MetricsGrid from './MetricsGrid';
import SalesOverview from './SalesOverview';
import PerformanceInsights from './PerformanceInsights';

export default function AnalyticsContent() {
  return (
    <div className="p-4 space-y-6">
      <MetricsGrid />
      <SalesOverview />
      <PerformanceInsights />
    </div>
  );
}