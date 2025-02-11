import React, { createContext, useContext } from "react";
import translations from "../translations/translations";
import { translationsKeys } from "../translations/translationsKeys";
import useLocalStorage from "./useLocalStorage";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  updLanguage: (newLang: Language) => void;
  getTranslation: (key: translationsKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useLocalStorage<Language>("language", "en");

  const updLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

  const getTranslation = (key: translationsKeys): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, updLanguage, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
