import aboutTranslations from "./aboutTranslations";
import languageSwitcherTranslations from "./languageSwitcherTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...languageSwitcherTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...languageSwitcherTranslations.ru,
  },
};

export default translations;
