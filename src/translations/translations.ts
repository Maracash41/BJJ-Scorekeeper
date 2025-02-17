import aboutTranslations from "./aboutTranslations";
import scoreboardTranslations from "./scoreboardTranslations";
import timerTranslations from "./timerTranslations";
import modalTranslations from "./modalTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...scoreboardTranslations.en,
    ...timerTranslations.en,
    ...modalTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...scoreboardTranslations.ru,
    ...timerTranslations.ru,
    ...modalTranslations.ru,
  },
};

export default translations;
