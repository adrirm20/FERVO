import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../ui/Button';

interface Invoice {
  id: string;
  number: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export default function InvoiceList() {
  const { t } = useTranslation();

  const invoices: Invoice[] = [
    {
      id: '1',
      number: 'INV-2024-001',
      date: '2024-03-15',
      amount: 234.50,
      status: 'paid'
    },
    {
      id: '2',
      number: 'INV-2024-002',
      date: '2024-03-14',
      amount: 189.99,
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'overdue':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-white">
        {t('payments.invoices.title')}
      </h3>

      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FileText className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {invoice.number}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(invoice.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-medium text-gray-800 dark:text-white">
                    {invoice.amount.toFixed(2)} €
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(invoice.status)}`}>
                    {t(`payments.invoices.status.${invoice.status}`)}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={16} className="mr-2" />
                  {t('payments.invoices.download')}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}