import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSelector({ onClose }: { onClose: () => void }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Seleccionar Idioma</h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full p-3 flex items-center space-x-3 rounded-lg ${
                language === lang.code ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {language === lang.code && (
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              )}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full mt-4 p-3 text-center text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}