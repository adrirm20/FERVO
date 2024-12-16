import React from 'react';
import { MapPin, Phone, Star, Package, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../ui/Button';

interface DeliveryItem {
  name: string;
  quantity: number;
}

interface Driver {
  name: string;
  phone: string;
  rating: number;
}

interface DeliveryCardProps {
  id: string;
  orderNumber: string;
  status: string;
  estimatedDelivery: string;
  items: DeliveryItem[];
  driver?: Driver;
  origin: string;
  destination: string;
  currentLocation: string;
  trackingUrl?: string;
}

export default function DeliveryCard({
  orderNumber,
  status,
  estimatedDelivery,
  items,
  driver,
  origin,
  destination,
  currentLocation,
  trackingUrl
}: DeliveryCardProps) {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_transit':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'delivered':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'scheduled':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white">
              {orderNumber}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(estimatedDelivery).toLocaleString()}
            </p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
            {t(`deliveries.status.${status}`)}
          </span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start space-x-3">
            <MapPin size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{origin}</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">{destination}</p>
              <p className="text-sm text-primary mt-1">{currentLocation}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Package size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('deliveries.items')}:</p>
              <ul className="text-sm">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-800 dark:text-white">
                    {item.name} x{item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {driver && (
            <div className="flex items-start space-x-3">
              <Phone size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('deliveries.driver')}:</p>
                <p className="text-sm text-gray-800 dark:text-white">{driver.name}</p>
                <div className="flex items-center mt-1">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{driver.rating}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {trackingUrl && (
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open(trackingUrl, '_blank')}
          >
            <ExternalLink size={18} className="mr-2" />
            {t('deliveries.track')}
          </Button>
        )}
      </div>
    </div>
  );
}