import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import UserList from '../../components/admin/users/UserList';
import UserStats from '../../components/admin/users/UserStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function UserManagement() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Gestión de Usuarios
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Administra usuarios y permisos
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <Plus size={20} className="mr-2" />
            Añadir Usuario
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <UserStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Todos
          </Button>
          <Button variant="outline" size="sm">
            Agricultores
          </Button>
          <Button variant="outline" size="sm">
            Proveedores
          </Button>
          <Button variant="outline" size="sm">
            Repartidores
          </Button>
        </div>
      </div>

      {/* User List */}
      <div className="px-4 pb-20">
        <UserList />
      </div>
    </div>
  );
}