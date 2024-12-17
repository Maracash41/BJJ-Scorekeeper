import React from "react";
import classes from "./header.module.css";
import logo from "../../assets/orunov_team_logo.svg";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerHeading}>
        <img className={classes.headerLogo} src={logo} alt="orunov team" />
        <h1 className={classes.mainHeading}>
          The competition of the Orunov Team in Brazilian Jiu-Jitsu.
        </h1>
      </div>
    </header>
  );
};

export default Header;
