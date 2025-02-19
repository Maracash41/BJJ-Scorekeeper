import aboutTranslations from "./aboutTranslations";
import scoreboardTranslations from "./scoreboardTranslations";
import timerTranslations from "./timerTranslations";
import modalTranslations from "./modalTranslations";
import footerTranslations from "./footerTranslations";
import playerTranslations from "./playerTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...scoreboardTranslations.en,
    ...timerTranslations.en,
    ...modalTranslations.en,
    ...playerTranslations.en,
    ...footerTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...scoreboardTranslations.ru,
    ...timerTranslations.ru,
    ...modalTranslations.ru,
    ...playerTranslations.ru,
    ...footerTranslations.ru,
  },
};

export default translations;
