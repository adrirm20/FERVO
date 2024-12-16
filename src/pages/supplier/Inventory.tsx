import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import InventoryList from '../../components/supplier/inventory/InventoryList';
import InventoryStats from '../../components/supplier/inventory/InventoryStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function Inventory() {
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
              Inventario
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gestiona tu stock y productos
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <Plus size={20} className="mr-2" />
            Añadir Producto
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <InventoryStats />
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
            Stock Bajo
          </Button>
          <Button variant="outline" size="sm">
            Sin Stock
          </Button>
          <Button variant="outline" size="sm">
            Categoría
          </Button>
        </div>
      </div>

      {/* Inventory List */}
      <div className="px-4 pb-20">
        <InventoryList />
      </div>
    </div>
  );
}