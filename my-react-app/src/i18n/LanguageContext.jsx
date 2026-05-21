import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const normalizeLanguage = (value) => {
  if (value === 'zh' || value === '中文') return 'zh';
  return 'en';
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => normalizeLanguage(localStorage.getItem('siteLanguage')));

  const setLanguage = (nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);
    setLanguageState(normalized);
    localStorage.setItem('siteLanguage', normalized);
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    isChinese: language === 'zh',
    languageLabel: language === 'zh' ? '中文' : 'EN',
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
