import React from "react";
import Scores from "../Scores/Scores";
import { IPlayer } from "../intefaces/interfaces";

interface ScoreboardProps {
  players: IPlayer[];
  changeName: (id: number, name: string) => void;
  hasTimeLeft: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  players,
  changeName,
  hasTimeLeft,
}) => {
  const playerOne = players[0];
  const playerTwo = players[1];
  return (
    <div className="scoreboard">
      <Scores
        player={playerOne}
        changeName={changeName}
        hasTimeLeft={hasTimeLeft}
      />
      <Scores
        player={playerTwo}
        changeName={changeName}
        hasTimeLeft={hasTimeLeft}
      />
    </div>
  );
};

export default Scoreboard;
