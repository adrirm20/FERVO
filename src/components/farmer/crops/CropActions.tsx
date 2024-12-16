import React, { useState } from 'react';
import { Droplet, Sun, Sprout } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { CropService } from '../../../services/cropService';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';

interface CropActionsProps {
  cropId: string;
  onActionComplete: () => void;
}

export default function CropActions({ cropId, onActionComplete }: CropActionsProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<string | null>(null);

  const handleAction = async (actionType: 'water' | 'fertilize' | 'harvest') => {
    setLoading(actionType);
    
    try {
      const success = await CropService.performAction({
        type: actionType,
        cropId,
        timestamp: new Date()
      });

      if (success) {
        toast.success(t(`farmer.crops.actions.${actionType}Success`));
        onActionComplete();
      } else {
        toast.error(t(`farmer.crops.actions.${actionType}Error`));
      }
    } catch (error) {
      toast.error(t('common.error'));
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex justify-between">
      <Button
        variant="outline"
        size="sm"
        className="flex-1 mx-1"
        onClick={() => handleAction('water')}
        disabled={loading === 'water'}
      >
        <Droplet size={16} className="mr-2" />
        {loading === 'water' ? t('common.loading') : t('farmer.crops.actions.water')}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="flex-1 mx-1"
        onClick={() => handleAction('fertilize')}
        disabled={loading === 'fertilize'}
      >
        <Sun size={16} className="mr-2" />
        {loading === 'fertilize' ? t('common.loading') : t('farmer.crops.actions.fertilize')}
      </Button>
      
      <Button
        variant="primary"
        size="sm"
        className="flex-1 mx-1"
        onClick={() => handleAction('harvest')}
        disabled={loading === 'harvest'}
      >
        <Sprout size={16} className="mr-2" />
        {loading === 'harvest' ? t('common.loading') : t('farmer.crops.actions.harvest')}
      </Button>
    </div>
  );
}