import aboutTranslations from "./aboutTranslations";
import scoreboardTranslations from "./scoreboardTranslations";
import timerTranslations from "./timerTranslations";
import modalTranslations from "./modalTranslations";
import footerTranslations from "./footerTranslations";

const translations = {
  en: {
    ...aboutTranslations.en,
    ...scoreboardTranslations.en,
    ...timerTranslations.en,
    ...modalTranslations.en,
    ...footerTranslations.en,
  },
  ru: {
    ...aboutTranslations.ru,
    ...scoreboardTranslations.ru,
    ...timerTranslations.ru,
    ...modalTranslations.ru,
    ...footerTranslations.ru,
  },
};

export default translations;
