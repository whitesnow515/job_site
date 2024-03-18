export const customLanguageDetector = {
  type: "languageDetector",
  async: true,
  initImmediate: false,
  detect: async (callback) => {
    try {
      let lang = localStorage.getItem("language");
      if (!lang) {
        lang = "de"; //set default language
        localStorage.setItem("language", lang);
      }
      callback(lang);
    } catch (error) {
    }
  },
  init: () => { },
  cacheUserLanguage: () => { },
};