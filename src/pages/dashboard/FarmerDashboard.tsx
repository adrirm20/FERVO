import React from 'react';
import { Bell } from 'lucide-react';
import FarmerStats from '../../components/farmer/FarmerStats';
import Card from '../../components/ui/Card';
import { useTranslation } from '../../hooks/useTranslation';

export default function FarmerDashboard() {
  const { t } = useTranslation();

  const recentOrders = [
    {
      id: '#ORD123',
      status: t('stats.farmer.orders.inProgress'),
      date: '15 Mar 2024',
      total: '234.50€'
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Panel de Control</h1>
        <button className="relative">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </button>
      </div>

      <FarmerStats />

      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-4">{t('stats.farmer.orders.label')}</h2>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">{order.total}</p>
                  <p className="text-sm text-gray-600">{order.status}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}