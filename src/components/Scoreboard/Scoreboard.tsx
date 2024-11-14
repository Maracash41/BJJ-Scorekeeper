import React from "react";
import Scores from "../Scores/Scores";

interface ScoreboardProps {}

const Scoreboard: React.FC<ScoreboardProps> = () => {
  return (
    <div className="scoreboard">
      <Scores />
    </div>
  );
};

export default Scoreboard;
