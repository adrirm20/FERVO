import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function CategoryMenu() {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const categories = [
    {
      name: t('categories.seeds'),
      href: '/marketplace/seeds',
      subCategories: [
        { name: 'Hortalizas', href: '/marketplace/seeds/vegetables' },
        { name: 'Cereales', href: '/marketplace/seeds/cereals' },
        { name: 'Legumbres', href: '/marketplace/seeds/legumes' }
      ]
    },
    {
      name: t('categories.machinery'),
      href: '/marketplace/machinery',
      subCategories: [
        { name: 'Tractores', href: '/marketplace/machinery/tractors' },
        { name: 'Cosechadoras', href: '/marketplace/machinery/harvesters' },
        { name: 'Sembradoras', href: '/marketplace/machinery/seeders' }
      ]
    },
    {
      name: t('categories.tools'),
      href: '/marketplace/tools',
      subCategories: [
        { name: 'Manuales', href: '/marketplace/tools/manual' },
        { name: 'Eléctricas', href: '/marketplace/tools/electric' },
        { name: 'Riego', href: '/marketplace/tools/irrigation' }
      ]
    },
    {
      name: t('categories.feed'),
      href: '/marketplace/feed',
      subCategories: [
        { name: 'Ganado', href: '/marketplace/feed/livestock' },
        { name: 'Aves', href: '/marketplace/feed/poultry' },
        { name: 'Porcino', href: '/marketplace/feed/pigs' }
      ]
    }
  ];

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      {categories.map((category) => (
        <div key={category.name} className="border-b last:border-b-0 border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <span className="text-gray-800 dark:text-white font-medium">
              {category.name}
            </span>
            {openCategory === category.name ? (
              <ChevronDown size={20} className="text-gray-400" />
            ) : (
              <ChevronRight size={20} className="text-gray-400" />
            )}
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openCategory === category.name ? 'max-h-48' : 'max-h-0'
            }`}
          >
            <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-2">
              {category.subCategories.map((sub) => (
                <a
                  key={sub.href}
                  href={sub.href}
                  className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors rounded-lg"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}