import React, { useState } from "react";
import Scores from "../Scores/Scores";
import { IPlayer } from "../intefaces/interfaces";

interface ScoreboardProps {
  players: IPlayer[];
  changeName: (id: number, name: string) => void;
  incrementScore: (playerId: number, index: number, points: number) => void;
  revertScore: () => void;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  players,
  changeName,
  incrementScore,
  revertScore,
}) => {
  const playerOne = players[0];
  const playerTwo = players[1];

  return (
    <div className="scoreboard">
      <Scores
        player={playerOne}
        changeName={changeName}
        incrementScore={incrementScore}
      />
      <button onClick={() => revertScore()}>Restore Previous Score</button>
      <Scores
        player={playerTwo}
        changeName={changeName}
        incrementScore={incrementScore}
      />
    </div>
  );
};

export default Scoreboard;
