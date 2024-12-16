import React from 'react';
import { Users, Package, Truck, TrendingUp, AlertCircle } from 'lucide-react';
import AdminStats from '../../components/admin/AdminStats';
import UserOverview from '../../components/admin/UserOverview';
import ActivityLog from '../../components/admin/ActivityLog';
import SystemStatus from '../../components/admin/SystemStatus';
import Logo from '../../components/ui/Logo';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Administrador
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Panel de Administración
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gestión y monitorización del sistema
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-4 py-6">
        <AdminStats />
      </div>

      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* User Overview */}
        <UserOverview />

        {/* System Status */}
        <SystemStatus />

        {/* Activity Log */}
        <div className="lg:col-span-2">
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}