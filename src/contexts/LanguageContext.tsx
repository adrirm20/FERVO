import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Set Spanish as default language
  const [language, setLanguageState] = useState('es');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'es';
    setLanguageState(storedLang);
    setIsRTL(['ar', 'he'].includes(storedLang));
    document.documentElement.lang = storedLang;
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    setIsRTL(['ar', 'he'].includes(lang));
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';
    // Force reload to apply translations immediately
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}