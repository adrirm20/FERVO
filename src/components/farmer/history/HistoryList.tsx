import React from 'react';
import { Package, Sprout, Droplet, Sun } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import HistoryItem from './HistoryItem';

export default function HistoryList() {
  const { t } = useTranslation();

  const history = [
    {
      id: '1',
      type: 'order',
      title: 'Pedido #ORD123',
      description: 'Pienso Premium x2, Fertilizante x1',
      date: '2024-03-15',
      amount: '234.50€',
      icon: Package,
      status: 'completed'
    },
    {
      id: '2',
      type: 'crop_action',
      title: 'Riego - Trigo Duro',
      description: 'Parcela Norte - 5 hectáreas',
      date: '2024-03-14',
      icon: Droplet,
      status: 'success'
    },
    {
      id: '3',
      type: 'crop_action',
      title: 'Fertilización - Tomates',
      description: 'Invernadero 2 - 0.5 hectáreas',
      date: '2024-03-13',
      icon: Sun,
      status: 'success'
    }
  ];

  return (
    <div className="space-y-4">
      {history.map((item) => (
        <HistoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}