import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import CropActions from './CropActions';

interface CropCardProps {
  id: string;
  name: string;
  type: string;
  area: string;
  status: string;
  nextAction: string;
  nextActionDate: string;
  image: string;
  onActionComplete: () => void;
}

export default function CropCard({
  id,
  name,
  type,
  area,
  status,
  nextAction,
  nextActionDate,
  image,
  onActionComplete
}: CropCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="flex">
        <div className="w-24 h-24 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {type} • {area}
              </p>
            </div>
            <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
              {status}
            </span>
          </div>

          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              <span>{nextActionDate}</span>
            </div>
          </div>
        </div>
      </div>

      <CropActions 
        cropId={id} 
        onActionComplete={onActionComplete}
      />
    </div>
  );
}