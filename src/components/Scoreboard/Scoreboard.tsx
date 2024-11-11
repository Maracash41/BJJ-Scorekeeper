import React from "react";
import Player from "../Player/Player";

interface ScoreboardProps {}

const Scoreboard: React.FC<ScoreboardProps> = () => {
  return (
    <>
      <div className="scoreboard">
        <div className="players">
          <div className="player-one">
            <Player name={"Player-1"} />
          </div>
          <div className="player-two">
            <Player name={"Player-2"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
