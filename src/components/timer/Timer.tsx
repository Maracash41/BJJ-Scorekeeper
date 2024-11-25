import React, { useEffect, useState } from "react";
import classes from "./timer.module.css";

interface ITimerProps {
  hasTimeLeftHandle: () => void;
}

const Timer: React.FC<ITimerProps> = ({ hasTimeLeftHandle }) => {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([5, 0]);

  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timerContorl = (): void => {
    if (paused || over) return;
    if (m === 0 && s === 0) {
      setOver(true);
      hasTimeLeftHandle();
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  const pauseControl = () => {
    setPaused(!paused);
  };

  const reset = () => {
    setOver(false);
    setTime([0, 0]);
    setPaused(false);
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
        >{`${paused ? "Start" : "Pause"}`}</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={openModal}>Set Timer</button>
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
              <button onClick={setTimer}>Set Timer</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Timer;
