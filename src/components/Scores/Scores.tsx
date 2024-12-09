import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import classes from "./scores.module.css";
import { IPlayer } from "../intefaces/interfaces";

interface ScoresProps {
  player: IPlayer;
  changeName: (id: number, name: string) => void;
  incrementScore: (playerId: number, index: number, points: number) => void;
}

const Scores: React.FC<ScoresProps> = ({
  player,
  changeName,
  incrementScore,
}) => {
  return (
    <div className={classes.scores}>
      <Player player={player} changeName={changeName} />
      <div className={classes.scoresTable}>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 0, 1)}
          >
            +1
          </button>
        </div>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 1, 2)}
          >
            +2
          </button>
        </div>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 2, 3)}
          >
            +3
          </button>
        </div>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 3, 4)}
          >
            +4
          </button>
        </div>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 4, 1)}
          >
            +P
          </button>
        </div>
        <div className={classes.scoresTableHeader}>
          <button
            className={classes.button}
            onClick={() => incrementScore(player.id, 5, 1)}
          >
            +A
          </button>
        </div>
        <div className={classes.scoresTableHeader}>Total</div>
        <div className={classes.scoresTableCell}></div>
        {player.currentScores.map((score, index) => (
          <div className={classes.scoresTableCell} key={index}>
            {score}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;
