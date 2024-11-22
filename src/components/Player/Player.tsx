import React, { useEffect, useState } from "react";
import classes from "./player.module.css";

interface PlayerProps {
  name: string;
  team?: string;
  logo?: string;
}

const Player: React.FC<PlayerProps> = ({ name = "Anonimus", team = "" }) => {
  const [playerName, setPlayerName] = useState(name);
  const [playerTeam, setPlayerTeam] = useState("No Team");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const changePlayerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerName(value);
  };

  const changePlayerTeamHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerTeam(value);
  };

  const fileLogoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files ? e.target.files[0] : null;

    if (file) {
      const blobUrl: string = URL.createObjectURL(file);
      setImageSrc(blobUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc]);

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

      <label className={classes.teamLogo}>
        Logo:
        <input
          type="file"
          accept="image/*"
          className={classes.playerTeam}
          onChange={fileLogoHandler}
        />
      </label>
      {imageSrc && <img src={imageSrc} />}
    </div>
  );
};

export default Player;

//ToDo: add Player logo
