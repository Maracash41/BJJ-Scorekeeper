import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import classes from "./scores.module.css";
import { IPlayer } from "../intefaces/interfaces";

interface ScoresProps {
  player: IPlayer;
  changeName: (id: number, name: string) => void;
  hasTimeLeft: boolean;
}

const Scores: React.FC<ScoresProps> = ({ player, changeName, hasTimeLeft }) => {
  const [lastScore, setLastScore] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0]);

  const incrementScore = (index: number, points: number) => {
    if (!hasTimeLeft) return;
    const newScores = [...scores];
    newScores[index] += points;
    if (index !== 5 && index !== 4) {
      newScores[newScores.length - 1] += points;
    }
    setScores(newScores);
  };

  return (
    <div className={classes.scores}>
      <div className={classes.scoresTable}>
        <div
          className={classes.scoresTableHeader}
          onClick={() => alert(hasTimeLeft)}
        >
          Player
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(0, 1)}
        >
          1
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(1, 2)}
        >
          2
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(2, 3)}
        >
          3
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(3, 4)}
        >
          4
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(4, 1)}
        >
          P
        </div>
        <div
          className={classes.scoresTableHeader}
          onClick={() => incrementScore(5, 1)}
        >
          A
        </div>
        <div className={classes.scoresTableHeader}>Total</div>
        <div className={classes.scoresTableCell}>
          <Player player={player} changeName={changeName} />
        </div>
        {scores.map((score, index) => (
          <div className={classes.scoresTableCell} key={index}>
            {score}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;

//ToDo сделать проверку при клике добавления очков, на проверку есть ли еще время используя hasTimeLeft
