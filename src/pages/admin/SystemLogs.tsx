import React from 'react';
import { Terminal } from 'lucide-react';
import LogViewer from '../../components/admin/logs/LogViewer';
import LogStats from '../../components/admin/logs/LogStats';
import LogFilters from '../../components/admin/logs/LogFilters';
import Logo from '../../components/ui/Logo';

export default function SystemLogs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center space-x-2">
          <Terminal className="text-primary" size={24} />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Logs del Sistema
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Monitorización y diagnóstico
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <LogStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <LogFilters />
      </div>

      {/* Log Viewer */}
      <div className="px-4 pb-20">
        <LogViewer />
      </div>
    </div>
  );
}