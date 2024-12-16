import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

interface Transaction {
  id: string;
  type: 'payment' | 'refund' | 'withdrawal';
  amount: number;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'failed';
}

export default function TransactionList() {
  const { t } = useTranslation();

  const transactions: Transaction[] = [
    {
      id: 'TRX001',
      type: 'payment',
      amount: 234.50,
      date: '2024-03-15',
      description: 'Pago por Pedido #ORD123',
      status: 'completed'
    },
    {
      id: 'TRX002',
      type: 'refund',
      amount: 45.00,
      date: '2024-03-14',
      description: 'Reembolso Pedido #ORD120',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
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
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-white">
        {t('payments.transactions.title')}
      </h3>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'payment'
                    ? 'bg-red-50 dark:bg-red-900/20'
                    : 'bg-green-50 dark:bg-green-900/20'
                }`}>
                  {transaction.type === 'payment' ? (
                    <ArrowUpRight className={
                      transaction.type === 'payment'
                        ? 'text-red-600'
                        : 'text-green-600'
                    } size={20} />
                  ) : (
                    <ArrowDownRight className={
                      transaction.type === 'payment'
                        ? 'text-red-600'
                        : 'text-green-600'
                    } size={20} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'payment'
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}>
                  {transaction.type === 'payment' ? '-' : '+'}
                  {transaction.amount.toFixed(2)} €
                </p>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                  {t(`payments.transactions.status.${transaction.status}`)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}