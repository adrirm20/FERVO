import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../ui/Button';

export default function PaymentBalance() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-primary/10 rounded-lg mr-3">
            <Wallet className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400">
              {t('payments.balance.title')}
            </h3>
            <p className="text-2xl font-semibold text-gray-800 dark:text-white">
              1.234,56 €
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <ArrowUpRight size={18} className="mr-1" />
            Enviar
          </Button>
          <Button variant="primary" size="sm">
            <ArrowDownRight size={18} className="mr-1" />
            Retirar
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('payments.balance.pending')}
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-white">
            234,50 €
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('payments.balance.available')}
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-white">
            1.000,06 €
          </p>
        </div>
      </div>
    </div>
  );
}