
import { useEffect, useState, type ReactNode, type FC } from 'react';
import { LanguageContext, strings } from './locale';


// Provider component
export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    strings.setLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
