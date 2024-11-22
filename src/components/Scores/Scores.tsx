import React from "react";
import Player from "../Player/Player";
import classes from "./scores.module.css";

const Scores: React.FC = () => {
  return (
    <div className={classes.scores}>
      <div className={classes.scoresTable}>
        <div className={classes.scoresTableHeader}>Player</div>
        <div className={classes.scoresTableHeader}>1</div>
        <div className={classes.scoresTableHeader}>2</div>
        <div className={classes.scoresTableHeader}>3</div>
        <div className={classes.scoresTableHeader}>4</div>
        <div className={classes.scoresTableHeader}>Total</div>
        <div className={classes.scoresTableHeader}>P</div>
        <div className={classes.scoresTableHeader}>A</div>
        <div className={classes.scoresTableCell}>
          {<Player name={"Player-1"} />}
        </div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
        <div className={classes.scoresTableCell}>0</div>
      </div>
    </div>
  );
};

export default Scores;
