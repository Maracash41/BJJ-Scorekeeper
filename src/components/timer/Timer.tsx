import React, { useEffect, useState } from "react";
import classes from "./timer.module.css";

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setTimer = () => {
    setTime([inputMinutes, inputSeconds]);
    setPaused(false);
    setOver(false);
    closeModal();
    resetCurrentScores();
    if (!hasTimeLeft) hasTimeLeftHandle();
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
          onClick={() => pauseControl()}
        >{`${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}</p>
        <button
          onClick={() => pauseControl()}
          className={classes.button}
        >{`${paused ? "Start" : "Pause"}`}</button>
        <button className={classes.button} onClick={() => reset()}>
          Reset
        </button>
        <button className={classes.button} onClick={openModal}>
          Set Timer
        </button>
        {isModalOpen && (
          <div className={classes.modal}>
            <div className={classes.modalContent}>
              <h2 className={classes.modalHeading}>Set Timer</h2>
              <label>
                Minutes:
                <input
                  type="number"
                  value={inputMinutes}
                  onChange={(e) => setInputMinutes(parseInt(e.target.value))}
                />
              </label>
              <label>
                Seconds:
                <input
                  type="number"
                  value={inputSeconds}
                  onChange={(e) => setInputSeconds(parseInt(e.target.value))}
                />
              </label>
              <button className={classes.button} onClick={setTimer}>
                Set Timer
              </button>
              <button className={classes.button} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Timer;
