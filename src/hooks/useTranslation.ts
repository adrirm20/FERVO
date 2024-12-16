import { translations } from '../i18n';

export function useTranslation() {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations.es;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t };
}