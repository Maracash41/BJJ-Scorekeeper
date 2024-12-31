import React, { useEffect, useState } from "react";
import classes from "./player.module.css";
import { IPlayer } from "../intefaces/interfaces";

interface PlayerProps {
  player: IPlayer;
  changeName: (id: number, name: string) => void;
  team?: string;
  logo?: string;
}

const Player: React.FC<PlayerProps> = ({ player, changeName }) => {
  const [currentPlayerName, setCurrentPlayerName] = useState(player.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changePlayerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) return;
    setCurrentPlayerName(value);
  };

  const playerEditButtonHandler = () => {
    switchModalOpenClose();
  };

  const switchModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    changeName(player.id, currentPlayerName);
  }, [currentPlayerName]);

  return (
    <div className={classes.player}>
      {isModalOpen && (
        <div className={classes.playerEditModal}>
          <div className={classes.playerEditModalContent}>
            <div className={classes.playerEditModalInputs}>
              <label>
                Name:
                <input
                  type="text"
                  className={classes.playerName}
                  onChange={changePlayerNameHandler}
                  placeholder={"Name"}
                  maxLength={12}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      <div className={classes.playerContainer}>
        <p className={classes.playerName}>{currentPlayerName}</p>
        <button
          className={classes.playerEditButton}
          onClick={playerEditButtonHandler}
        >
          &#9998;
        </button>
      </div>
    </div>
  );
};

export default Player;
