import React, { useEffect, useRef, useState } from "react";
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
  const [tempPlayerName, setTempPlayerName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playerEditButtonHandler = () => {
    switchModalOpenClose();
  };

  const switchModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setPlayerName = () => {
    if (tempPlayerName.length === 0 || tempPlayerName.length === 1) return;
    setCurrentPlayerName(tempPlayerName);
    changeName(player.id, currentPlayerName);
  };

  const changePlayerNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) return;
    setTempPlayerName(value);
  };

  const closeButton = () => {
    setPlayerName();
    switchModalOpenClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    console.log("Enter was pressed", tempPlayerName);

    closeButton();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div className={classes.player}>
      {isModalOpen && (
        <div
          className={classes.playerEditModal}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className={classes.playerEditModalContent}>
            <div className={classes.playerEditModalInputs}>
              <label className={classes.playerEditModalLabel}>
                Name:
                <input
                  type="text"
                  className={classes.playerEditModalInput}
                  placeholder={"Type your name"}
                  maxLength={12}
                  onChange={changePlayerNameHandler}
                  ref={inputRef}
                />
              </label>
            </div>
            <div className={classes.playerEditModalButtons}>
              <button
                className={classes.button + " " + classes.playerEditModalButton}
                onClick={closeButton}
                onKeyDown={handleKeyDown}
              >
                Close
              </button>
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
