import React from "react";
import Player from "../Player/Player";

const Scores: React.FC = () => {
  return (
    <>
      <div className="board">
        <div className="players">
          <div className="player-one">
            <Player name={"Player1"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Scores;
