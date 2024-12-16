import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder={t('common.search')}
        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-none bg-white dark:bg-gray-800 shadow-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;