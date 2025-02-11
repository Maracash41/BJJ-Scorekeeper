import React from "react";
import classes from "./languageSwitcher.module.css";
import { useLanguage } from "../../utils/LanguageContext";
import flagRf from "../../assets/flag_rf.png";
import flagEn from "../../assets/flag_en.png";

const LanguageSwitcher: React.FC = () => {
  const context = useLanguage();
  const setLang = (lang: string) => {
    if (lang === "ru") context.updLanguage("ru");
    if (lang === "en") context.updLanguage("en");
  };
  return (
    <div className={classes.languageSwitcher}>
      <p className={classes.languageSwitcherText}>
        {context.getTranslation("language")}
      </p>
      <div className={classes.languageSwitcherBtns}>
        <button
          className={classes.languageSwitcherBtn}
          onClick={() => setLang("ru")}
        >
          <img
            src={flagRf}
            className={classes.languageSwitcherBtnImg}
            alt="русский язык"
          />
        </button>
        <button
          className={classes.languageSwitcherBtn}
          onClick={() => setLang("en")}
        >
          <img
            src={flagEn}
            alt="english language"
            className={classes.languageSwitcherBtnImg}
          />
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
