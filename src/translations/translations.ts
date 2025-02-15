import aboutTranslations from "./aboutTranslations";
import scoreboardTranslations from "./scoreboardTranslations";
import timerTranslations from "./timerTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...scoreboardTranslations.en,
    ...timerTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...scoreboardTranslations.ru,
    ...timerTranslations.ru,
  },
};

export default translations;
