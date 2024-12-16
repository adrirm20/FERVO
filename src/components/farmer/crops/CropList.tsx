import React, { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import CropCard from './CropCard';

export default function CropList() {
  const { t } = useTranslation();
  const [refreshKey, setRefreshKey] = useState(0);

  const crops = [
    {
      id: '1',
      name: 'Trigo Duro',
      type: 'Cereal',
      area: '5 hectáreas',
      status: 'En crecimiento',
      nextAction: 'Riego programado',
      nextActionDate: '20/3/2024',
      image: 'https://images.unsplash.com/photo-1530267981375-f08e3f41d222?auto=format&fit=crop&q=80&w=240',
    },
    {
      id: '2',
      name: 'Tomates Cherry',
      type: 'Hortaliza',
      area: '0.5 hectáreas',
      status: 'Cosecha próxima',
      nextAction: 'Cosecha',
      nextActionDate: '25/3/2024',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=240',
    }
  ];

  const handleActionComplete = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="space-y-4">
      {crops.map((crop) => (
        <CropCard
          key={`${crop.id}-${refreshKey}`}
          {...crop}
          onActionComplete={handleActionComplete}
        />
      ))}
    </div>
  );
}