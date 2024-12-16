import React from 'react';
import { CreditCard, Building2, Plus } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../ui/Button';

export default function PaymentMethods() {
  const { t } = useTranslation();

  const paymentMethods = [
    {
      id: '1',
      type: 'card',
      name: 'Visa terminada en 4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: '2',
      type: 'bank',
      name: 'Cuenta Bancaria',
      number: 'ES91 2100 0418 4502 0005 1332',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          {t('payments.methods.title')}
        </h3>
        <Button variant="outline" size="sm">
          <Plus size={16} className="mr-2" />
          {t('payments.methods.addNew')}
        </Button>
      </div>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {method.type === 'card' ? (
                  <CreditCard className="text-gray-600" size={20} />
                ) : (
                  <Building2 className="text-gray-600" size={20} />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  {method.name}
                </p>
                <p className="text-sm text-gray-500">
                  {method.type === 'card' ? `Expira: ${method.expiry}` : method.number}
                </p>
              </div>
              {method.isDefault && (
                <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Principal
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}