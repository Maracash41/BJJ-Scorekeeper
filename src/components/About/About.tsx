import React from "react";
import classes from "./about.module.css";
import logo from "../../assets/orunov_team_logo.svg";

const About: React.FC = () => {
  return (
    <section className={classes.about}>
      <div className={classes.aboutContent}>
        <h3 className={classes.aboutHeading}>About</h3>
        <div className={classes.aboutDescription}>
          <p className={classes.aboutText}>
            This application was created for Brazilian Jiu-Jitsu competitions or
            any other events where similar scoring can be applied.
          </p>
          <p className={classes.aboutText}>
            The creation of this application was inspired by the training
            sessions in BJJ at the Orunov Academy of Jiu-Jitsu.
          </p>
          <img className={classes.aboutLogo} src={logo} alt="orunov team" />
        </div>
        <div className={classes.aboutContacts}>
          <h4 className={classes.aboutHeading}>Write me</h4>
          <p className={classes.aboutText}>
            If you have any questions or suggestions on how we can improve this
            app, please let me know.
          </p>
          <ul className={classes.aboutContactsLinksList}>
            <li className={classes.aboutContactsLinksItem}>
              <div className={classes.aboutContactsLinksItemContainer}>
                <p className={classes.itemContainerLabel}>E-maiL: </p>
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
                <p className={classes.itemContainerLabel}>Telegram: </p>
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
                <p className={classes.itemContainerLabel}>LinkedIn: </p>
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
