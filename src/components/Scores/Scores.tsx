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
    <div className={classes.scoresTable}>
      <div className={classes.scoresTableHeader}>Player Name</div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 0, 1)}
      >
        1
      </div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 1, 2)}
      >
        2
      </div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 2, 3)}
      >
        3
      </div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 3, 4)}
      >
        4
      </div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 4, 1)}
      >
        P
      </div>
      <div
        className={classes.scoresTableHeader}
        onClick={() => incrementScore(player.id, 5, 1)}
      >
        A
      </div>
      <div className={classes.scoresTableHeader}>Total</div>
      <div className={classes.scoresTableCell}>
        <Player player={player} changeName={changeName} />
      </div>
      {player.currentScores.map((score, index) => (
        <div className={classes.scoresTableCell} key={index}>
          {score}
        </div>
      ))}
    </div>
  );
};

export default Scores;
