import React, { useState } from "react";
import classes from "./player.module.css";
import { IPlayer } from "../intefaces/interfaces";
import Modal from "../Modal/Modal";
import { useLanguage } from "../../utils/LanguageContext";

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
  const { getTranslation } = useLanguage();

  const setPlayerName = () => {
    if (!tempPlayerName.length) return;
    setCurrentPlayerName(tempPlayerName);
    changeName(player.id, tempPlayerName);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setPlayerName();
    toggleModal();
  };

  return (
    <div className={classes.player}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={classes.playerEditModalInputs}>
          <label className={classes.inputHeading}>
            {`${getTranslation("name")}:`}
            <input
              type="text"
              className={classes.playerName}
              onChange={(e) => setTempPlayerName(e.target.value)}
              placeholder={getTranslation("namePlaceholder")}
              maxLength={12}
            />
          </label>
        </div>
      </Modal>
      {isModalOpen && (
        <div className={classes.playerEditModal}>
          <div className={classes.playerEditModalContent}></div>
        </div>
      )}
      <div className={classes.playerContainer}>
        <p className={classes.playerName}>{currentPlayerName}</p>
        <button className={classes.playerEditButton} onClick={toggleModal}>
          &#9998;
        </button>
      </div>
    </div>
  );
};

export default Player;
