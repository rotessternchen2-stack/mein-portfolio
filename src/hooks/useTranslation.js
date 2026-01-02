import { translations } from '@translations';
import { useLanguage } from '@contexts/LanguageContext';

export const useTranslation = () => {
  const { language, setLanguage } = useLanguage();

  const t = (key, options = {}) => {
    const keys = key.split('.');
    let value = translations[language]; 
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return options.returnObjects ? undefined : key; 
      }
    }
    
    // Wenn returnObjects: true, gib das Objekt/Array zurück
    if (options.returnObjects) {
      return value;
    }
    
    // Sonst nur Strings zurückgeben
    return typeof value === 'string' ? value : key;
  };

  return {
    t,
    language,
    currentLanguage: language,
    changeLanguage: setLanguage,
    availableLanguages: Object.keys(translations)
  };
};

