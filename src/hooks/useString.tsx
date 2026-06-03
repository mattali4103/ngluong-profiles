import { useMemo } from "react";
import { useLanguage } from "./useLanguage";
import strings from "../localization/locale";


export const useStrings = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    strings.setLanguage(language);
    return strings;
  }, [language]);
};