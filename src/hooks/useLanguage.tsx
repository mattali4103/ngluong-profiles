import { useContext } from "react";
import { LanguageContext } from "../localization/locale";

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error();
  }
  return context;
};