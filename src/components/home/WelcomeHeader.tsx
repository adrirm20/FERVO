import React from 'react';
import { Menu } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import Logo from '../ui/Logo';
import SearchBar from './SearchBar';

interface WelcomeHeaderProps {
  onMenuClick: () => void;
}

export default function WelcomeHeader({ onMenuClick }: WelcomeHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark px-4 pt-8 pb-12">
      <div className="flex items-center justify-between mb-6">
        <Logo size="sm" className="w-24" />
        <button
          onClick={onMenuClick}
          className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">
        {t('common.welcome')}
      </h1>
      <p className="text-primary-light mb-6">
        {t('common.whatDoYouNeed')}
      </p>
      <SearchBar />
    </div>
  );
}