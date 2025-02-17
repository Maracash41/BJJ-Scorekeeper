import { aboutTranslationsKeys } from "./aboutTranslations";
import { footerTranslationsKeys } from "./footerTranslations";
import { modalTranslationsKeys } from "./modalTranslations";
import { scoreboardTranslationsKeys } from "./scoreboardTranslations";
import { timerTranslationsKeys } from "./timerTranslations";

export type translationsKeys =
  | aboutTranslationsKeys
  | scoreboardTranslationsKeys
  | timerTranslationsKeys
  | modalTranslationsKeys
  | footerTranslationsKeys;
