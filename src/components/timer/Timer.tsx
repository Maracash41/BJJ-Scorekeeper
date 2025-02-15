import React, { useEffect, useState } from "react";
import classes from "./timer.module.css";
import Modal from "../Modal/Modal";
import { useLanguage } from "../../utils/LanguageContext";

interface ITimerProps {
  hasTimeLeftHandle: () => void;
  hasTimeLeft: boolean;
  resetCurrentScores: () => void;
}

const Timer: React.FC<ITimerProps> = ({
  hasTimeLeftHandle,
  hasTimeLeft,
  resetCurrentScores,
}) => {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [defaultTime, setDefaultTime] = useState([5, 0]);
  const [[m, s], setTime] = useState(defaultTime);

  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTranslation } = useLanguage();

  const timerContorl = (): void => {
    if (paused || over) return;
    if (m === 0 && s === 0) {
      setOver(true);
      if (hasTimeLeft) hasTimeLeftHandle();
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  const pauseControl = () => {
    if (m === 0 && s === 0) return;
    setPaused(!paused);
    if (!paused) {
      if (!hasTimeLeft) hasTimeLeftHandle();
    }
  };

  const reset = () => {
    setOver(false);
    setTime(defaultTime);
    setPaused(true);
    resetCurrentScores();
    if (!hasTimeLeft) hasTimeLeftHandle();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const setTimer = () => {
    if (inputMinutes > 0 || inputSeconds > 0) {
      setTime([inputMinutes, inputSeconds]);
      setDefaultTime([inputMinutes, inputSeconds]);
      setPaused(false);
      setOver(false);
      resetCurrentScores();
      if (!hasTimeLeft) hasTimeLeftHandle();
    }
  };

  const closeModal = () => {
    setTimer();
    setIsModalOpen(false);
  };

  useEffect(() => {
    const actveTimer = setInterval(() => timerContorl(), 1000);
    return () => clearInterval(actveTimer);
  });
  return (
    <>
      <div className={classes.timer}>
        <p
          className={classes.timerTime}
        >{`${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}</p>
        <div className={classes.timerControlButtons}>
          <button
            onClick={() => pauseControl()}
            className={classes.button + " " + classes.timerButton}
          >{`${paused ? `${getTranslation("start")}` : `${getTranslation("pause")}`}`}</button>
          <button
            className={classes.button + " " + classes.timerButton}
            onClick={() => reset()}
          >
            {getTranslation("reset")}
          </button>
          <button
            className={classes.button + " " + classes.timerButton}
            onClick={openModal}
          >
            {getTranslation("setTimer")}
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className={classes.modalHeading}>{getTranslation("setTimer")}</h2>
          <div className={classes.modalInputs}>
            <label className={classes.modalLabel}>
              {getTranslation("minutes")}:
              <input
                type="number"
                className={classes.modalInput}
                value={inputMinutes}
                onChange={(e) => setInputMinutes(parseInt(e.target.value))}
              />
            </label>
            <label className={classes.modalLabel}>
              {getTranslation("seconds")}:
              <input
                type="number"
                className={classes.modalInput}
                value={inputSeconds}
                onChange={(e) => setInputSeconds(parseInt(e.target.value))}
              />
            </label>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Timer;
