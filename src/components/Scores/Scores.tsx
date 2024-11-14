import React from "react";
import Player from "../Player/Player";

const Scores: React.FC = () => {
  return (
    <div className="scores">
      <div className="scoresTable">
        <div className="scoresTableHeader">Player</div>
        <div className="scoresTableHeader">1</div>
        <div className="scoresTableHeader">2</div>
        <div className="scoresTableHeader">3</div>
        <div className="scoresTableHeader">4</div>
        <div className="scoresTableHeader">Total</div>
        <div className="scoresTableHeader">P</div>
        <div className="scoresTableHeader">A</div>
        <div className="scoresTableCell">{<Player name={"Player-1"} />}</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
        <div className="scoresTableCell">0</div>
      </div>
    </div>
  );
};

export default Scores;
