import React from "react";
import classes from "./footer.module.css";
import githubLogo from "../../assets/github_logo.png";
const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerAuthor}>
          <a
            href="https://github.com/Maracash41"
            className={classes.footerAuthorLink}
          >
            <img src={githubLogo} alt="" className={classes.footerAuthorIcon} />
          </a>
        </div>
        <div className={classes.footerAboutApp}>
          <p className={classes.footerAboutAppName}>BJJ-Scorekeeper</p>
          <p className={classes.footerAboutAppVersion}>v1.0.0</p>
          <p className={classes.footerAboutAppYear}>2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
