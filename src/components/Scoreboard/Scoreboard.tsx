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
      <Scores
        player={playerOne}
        changeName={changeName}
        incrementScore={incrementScore}
      />
      <div className={classes.scoreboardButtons}>
        <button onClick={() => transferPoint()}>&#8596;</button>
        <button onClick={() => revertScore()}>&#8635;</button>
      </div>

      <Scores
        player={playerTwo}
        changeName={changeName}
        incrementScore={incrementScore}
      />
    </div>
  );
};

export default Scoreboard;
