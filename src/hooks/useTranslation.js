import { translations } from '@translations';
import { useLanguage } from '@contexts/LanguageContext';

export const useTranslation = () => {
  const { language, setLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language]; 
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; 
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return {
    t,
    currentLanguage: language,
    changeLanguage: setLanguage,
    availableLanguages: Object.keys(translations)
  };
};
console.log('Translations:', translations);
