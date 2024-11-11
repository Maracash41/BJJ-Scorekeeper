import React, { useState } from "react";
import Scores from "../Scores/Scores";
import classes from "./player.module.css";

interface PlayerProps {
  name: string;
}

const Player: React.FC<PlayerProps> = ({ name = "Anonimus" }) => {
  const [playerName, setPlayerName] = useState(name);

  const changePlayerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerName(value);
  };
  return (
    <div className={classes.player}>
      <h3 className={classes.playerHeading}>Player name:</h3>
      <input
        type="text"
        className={classes.playerName}
        onChange={changePlayerNameHandler}
        value={playerName}
      />
    </div>
  );
};

export default Player;

//ToDo: add Player logo
