import React from 'react';
import { Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminProfile from '../components/profile/AdminProfile';
import FarmerProfile from '../components/profile/FarmerProfile';
import SupplierProfile from '../components/profile/SupplierProfile';
import DriverProfile from '../components/profile/DriverProfile';

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'FARMER';

  const getRoleTitle = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return 'Administrador';
      case 'FARMER':
        return 'Agricultor/Ganadero';
      case 'SUPPLIER':
        return 'Proveedor';
      case 'DRIVER':
        return 'Repartidor';
      default:
        return 'Usuario';
    }
  };

  const renderProfilePanel = () => {
    switch (role) {
      case 'ADMIN':
        return <AdminProfile />;
      case 'FARMER':
        return <FarmerProfile />;
      case 'SUPPLIER':
        return <SupplierProfile />;
      case 'DRIVER':
        return <DriverProfile />;
      default:
        return <FarmerProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-primary">Fervo</h1>
          <button
            onClick={() => navigate('/settings')}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <Settings size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {user?.name || 'Usuario'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {getRoleTitle(role)}
            </p>
          </div>
        </div>
      </div>

      {/* Role-specific Profile Panel */}
      <div className="px-4 py-6">
        {renderProfilePanel()}
      </div>
    </div>
  );
}