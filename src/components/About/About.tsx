import React from "react";
import classes from "./about.module.css";
import logo from "../../assets/orunov_team_logo.svg";
import { useLanguage } from "../../utils/LanguageContext";

const About: React.FC = () => {
  const { getTranslation } = useLanguage();
  return (
    <section className={classes.about}>
      <div className={classes.aboutContent}>
        <h3 className={classes.aboutHeading}>
          {getTranslation("aboutHeading")}
        </h3>
        <div className={classes.aboutDescription}>
          <p className={classes.aboutText}>{getTranslation("aboutText1")}</p>
          <p className={classes.aboutText}>{getTranslation("aboutText2")}</p>
          <img className={classes.aboutLogo} src={logo} alt="orunov team" />
        </div>
        <div className={classes.aboutContacts}>
          <h4 className={classes.aboutHeading}>{getTranslation("writeMe")}</h4>
          <p className={classes.aboutText}>{getTranslation("questions")}</p>
          <ul className={classes.aboutContactsLinksList}>
            <li className={classes.aboutContactsLinksItem}>
              <div className={classes.aboutContactsLinksItemContainer}>
                <p className={classes.itemContainerLabel}>
                  {getTranslation("email")}
                </p>
                <a
                  className={classes.itemContainerLink}
                  href="mailto: 9531945@gmail.com"
                >
                  9531945@gmail.com
                </a>
              </div>
            </li>
            <li className={classes.aboutContactsLinksItem}>
              <div className={classes.aboutContactsLinksItemContainer}>
                <p className={classes.itemContainerLabel}>
                  {getTranslation("telegram")}
                </p>
                <a
                  className={classes.itemContainerLink}
                  href="https://t.me/mcash41"
                >
                  @mcash41
                </a>
              </div>
            </li>
            <li className={classes.aboutContactsLinksItem}>
              <div className={classes.aboutContactsLinksItemContainer}>
                <p className={classes.itemContainerLabel}>
                  {getTranslation("linkedIn")}
                </p>
                <a
                  className={classes.itemContainerLink}
                  href="https://linkedin.com/in/mcash41"
                >
                  Andrey Akimov
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
