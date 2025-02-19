import { aboutTranslationsKeys } from "./aboutTranslations";
import { footerTranslationsKeys } from "./footerTranslations";
import { modalTranslationsKeys } from "./modalTranslations";
import { playerTranslationsKeys } from "./playerTranslations";
import { scoreboardTranslationsKeys } from "./scoreboardTranslations";
import { timerTranslationsKeys } from "./timerTranslations";

export type translationsKeys =
  | aboutTranslationsKeys
  | scoreboardTranslationsKeys
  | timerTranslationsKeys
  | modalTranslationsKeys
  | playerTranslationsKeys
  | footerTranslationsKeys;
