import React, { useState } from "react";
import Scores from "../Scores/Scores";
import { IPlayer } from "../intefaces/interfaces";
import classes from "./scoreboard.module.css";

interface ScoreboardProps {
  players: IPlayer[];
  changeName: (id: number, name: string) => void;
  incrementScore: (playerId: number, index: number, points: number) => void;
  revertScore: () => void;
  transferPoint: () => void;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  players,
  changeName,
  incrementScore,
  revertScore,
  transferPoint,
}) => {
  const playerOne = players[0];
  const playerTwo = players[1];

  return (
    <div className={classes.scoreboard}>
      <div className={classes.scoresPlayerOne}>
        <Scores
          player={playerOne}
          changeName={changeName}
          incrementScore={incrementScore}
        />
      </div>
      <div className={classes.scoreboardButtons}>
        <button
          className={classes.scoreboardButton + " " + classes.button}
          onClick={() => transferPoint()}
        >
          <span className={classes.scoreboardButtonIcon}>&#8596;</span> Transfer
          point
        </button>
        <button
          className={classes.scoreboardButton + " " + classes.button}
          onClick={() => revertScore()}
        >
          <span className={classes.scoreboardButtonIcon}>&#8635;</span> Revert
          score
        </button>
      </div>
      <div className={classes.scoresPlayerTwo}>
        <Scores
          player={playerTwo}
          changeName={changeName}
          incrementScore={incrementScore}
        />
      </div>
    </div>
  );
};

export default Scoreboard;
