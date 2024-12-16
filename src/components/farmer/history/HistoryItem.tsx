import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

interface HistoryItemProps {
  type: 'order' | 'crop_action';
  title: string;
  description: string;
  date: string;
  amount?: string;
  icon: LucideIcon;
  status: string;
}

export default function HistoryItem({
  type,
  title,
  description,
  date,
  amount,
  icon: Icon,
  status
}: HistoryItemProps) {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'success':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'failed':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="text-primary" size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
            {amount && (
              <span className="font-medium text-gray-800 dark:text-white">
                {amount}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString()}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(status)}`}>
              {t(`history.status.${status}`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}