import i18n from "i18next";
import { createContext, useEffect, useState } from "react";
import transaltion_en from "../../utils/internationalization/en/en.json";
import transaltion_es from "../../utils/internationalization/es/es.json";
import transaltion_ita from "../../utils/internationalization/ita/ita.json";
import transaltion_fr from "../../utils/internationalization/fr/fr.json";
import { I18nextProvider } from "react-i18next";

interface InternationalizationProps {
  children: React.ReactNode;
}

export const InternationalizationContext = createContext<any>({});

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: transaltion_en,
    },
    es: {
      translation: transaltion_es,
    },
    ita: {
      translation: transaltion_ita,
    },
    fr: {
      translation: transaltion_fr,
    },
  },
});

export const InternationalizationContextProvider = ({
  children,
}: InternationalizationProps) => {
  const [language, setLanguage] = useState<string>("en");

  function changeLanguage(language: string) {
    setLanguage(language);
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <InternationalizationContext.Provider value={{ language, changeLanguage }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </InternationalizationContext.Provider>
  );
};
