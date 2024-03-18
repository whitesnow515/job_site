import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lang_en from "./languages/english.js";
import lang_de from "./languages/german.js";
import { customLanguageDetector } from "./customLanguageDetector.js";

const resources = {
  en: { translation: lang_en },
  de: { translation: lang_de },
};

i18n
  .use(customLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
