import React from 'react';
import { Database } from 'lucide-react';
import DatabaseStats from '../../components/admin/database/DatabaseStats';
import DatabaseHealth from '../../components/admin/database/DatabaseHealth';
import QueryMonitor from '../../components/admin/database/QueryMonitor';
import BackupStatus from '../../components/admin/database/BackupStatus';
import Logo from '../../components/ui/Logo';

export default function Database() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Base de Datos
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monitorización y gestión de la base de datos
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <DatabaseStats />
      </div>

      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* Database Health */}
        <DatabaseHealth />

        {/* Backup Status */}
        <BackupStatus />

        {/* Query Monitor */}
        <div className="lg:col-span-2">
          <QueryMonitor />
        </div>
      </div>
    </div>
  );
}