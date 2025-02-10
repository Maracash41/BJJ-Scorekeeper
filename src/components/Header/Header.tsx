import React from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import classes from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerHeading}>
        <h1 className={classes.mainHeading}>BJJ Scorekeeper</h1>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
