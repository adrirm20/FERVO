import React from 'react';
import { Shield } from 'lucide-react';
import SecurityOverview from '../../components/admin/security/SecurityOverview';
import AccessControl from '../../components/admin/security/AccessControl';
import AuditLog from '../../components/admin/security/AuditLog';
import Logo from '../../components/ui/Logo';

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="text-primary" size={24} />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Seguridad
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configuración y auditoría de seguridad
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-4 py-6">
        <SecurityOverview />
      </div>

      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* Access Control */}
        <AccessControl />

        {/* Audit Log */}
        <div className="lg:col-span-2">
          <AuditLog />
        </div>
      </div>
    </div>
  );
}