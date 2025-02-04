import React from "react";
import classes from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerHeading}>
        <h1 className={classes.mainHeading}>BJJ Scorekeeper</h1>
      </div>
    </header>
  );
};

export default Header;
