import React, { useState } from "react";
import classes from "./player.module.css";

interface PlayerProps {
  name: string;
}

const Player: React.FC<PlayerProps> = ({ name = "Anonimus" }) => {
  const [playerName, setPlayerName] = useState(name);
  const [playerTeam, setPlayerTeam] = useState("No Team");

  const changePlayerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerName(value);
  };

  const changePlayerTeamHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerTeam(value);
  };

  return (
    <div className={classes.player}>
      <input
        type="text"
        className={classes.playerName}
        onChange={changePlayerNameHandler}
        value={playerName}
      />
      <label className={classes.team}>
        Team:
        <input
          type="text"
          className={classes.playerTeam}
          onChange={changePlayerTeamHandler}
          value={playerTeam}
        />
      </label>
    </div>
  );
};

export default Player;

//ToDo: add Player logo
