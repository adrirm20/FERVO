import React from 'react';
import { Package, TrendingUp, Users, BarChart2, ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AnalyticsChart from '../../components/supplier/AnalyticsChart';
import TopProducts from '../../components/supplier/TopProducts';
import CustomerMetrics from '../../components/supplier/CustomerMetrics';
import { useTranslation } from '../../hooks/useTranslation';

export default function SupplierDashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      label: 'Ventas Hoy',
      value: '1.234€',
      trend: '+15%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      label: 'Productos',
      value: '45',
      trend: '+3',
      isPositive: true,
      icon: Package
    },
    {
      label: 'Clientes',
      value: '89',
      trend: '+12%',
      isPositive: true,
      icon: Users
    },
    {
      label: 'Conversión',
      value: '8.5%',
      trend: '-2%',
      isPositive: false,
      icon: BarChart2
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Panel de Proveedor</h1>
        <Button variant="primary" size="sm">
          Añadir Producto
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
                <div className={`flex items-center mt-2 ${
                  stat.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.isPositive ? (
                    <ArrowUp size={16} className="mr-1" />
                  ) : (
                    <ArrowDown size={16} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="text-primary" size={20} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Analytics Chart */}
      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Análisis de Ventas</h2>
          <select className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm">
            <option>Últimos 7 días</option>
            <option>Último mes</option>
            <option>Último año</option>
          </select>
        </div>
        <AnalyticsChart />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <TopProducts />

        {/* Customer Metrics */}
        <CustomerMetrics />
      </div>
    </div>
  );
}