import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import PaymentBalance from '../../components/farmer/payments/PaymentBalance';
import TransactionList from '../../components/farmer/payments/TransactionList';
import PaymentMethods from '../../components/farmer/payments/PaymentMethods';
import InvoiceList from '../../components/farmer/payments/InvoiceList';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function Payments() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t('payments.title')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('payments.subtitle')}
          </p>
        </div>
      </div>

      {/* Balance Card */}
      <div className="px-4 py-6">
        <PaymentBalance />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            {t('common.filters')}
          </Button>
          <Button variant="outline" size="sm">
            {t('payments.filters.all')}
          </Button>
          <Button variant="outline" size="sm">
            {t('payments.filters.payments')}
          </Button>
          <Button variant="outline" size="sm">
            {t('payments.filters.refunds')}
          </Button>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-4 mb-6">
        <TransactionList />
      </div>

      {/* Payment Methods */}
      <div className="px-4 mb-6">
        <PaymentMethods />
      </div>

      {/* Invoices */}
      <div className="px-4 pb-20">
        <InvoiceList />
      </div>
    </div>
  );
}