import React from 'react';
import AnalyticsHeader from '../../components/supplier/analytics/AnalyticsHeader';
import AnalyticsContent from '../../components/supplier/analytics/AnalyticsContent';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnalyticsHeader />
      <AnalyticsContent />
    </div>
  );
}