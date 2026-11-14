import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import ml from '../locales/ml';
import ar from '../locales/ar';

const DICTIONARIES = { en, ml, ar };
const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('alwisal_lang') || 'en';
    }
    return 'en';
  });

  const setLanguage = (lang) => {
    if (!DICTIONARIES[lang]) return;
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('alwisal_lang', lang);
    }
  };

  useEffect(() => {
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    if (isArabic) {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  }, [language]);

  const t = (key) => {
    const dict = DICTIONARIES[language] || DICTIONARIES.en;
    return dict[key] || DICTIONARIES.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRtl: language === 'ar' }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      t: (key) => en[key] || key,
      language: 'en',
      setLanguage: () => {},
      isRtl: false
    };
  }
  return ctx;
}
