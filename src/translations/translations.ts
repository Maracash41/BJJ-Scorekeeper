import aboutTranslations from "./aboutTranslations";
import scoreboardTranslations from "./scoreboardTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...scoreboardTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...scoreboardTranslations.ru,
  },
};

export default translations;
