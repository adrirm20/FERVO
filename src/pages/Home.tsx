import React, { useState } from 'react';
import WelcomeHeader from '../components/home/WelcomeHeader';
import CategoryGrid from '../components/home/CategoryGrid';
import CategoryMenu from '../components/home/CategoryMenu';
import FeaturedProducts from '../components/home/FeaturedProducts';
import SeasonalOffers from '../components/home/SeasonalOffers';
import QuickAccess from '../components/home/QuickAccess';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <WelcomeHeader onMenuClick={() => setIsMenuOpen(true)} />

      {/* Category Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sliding Category Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {t('categories.title')}
          </h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          <CategoryMenu />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
          <CategoryGrid />
        </div>

        <div className="space-y-6 pb-20">
          <FeaturedProducts />
          <SeasonalOffers />
          <QuickAccess />
        </div>
      </div>
    </div>
  );
}