import React, { useEffect, useState } from "react";
import classes from "./timer.module.css";

const Timer: React.FC = () => {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([5, 0]);

  const timerContorl = (): void => {
    if (paused || over) return;
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  const reset = () => {
    setOver(false);
    setTime([0, 0]);
    setPaused(false);
  };

  useEffect(() => {
    const actveTimer = setInterval(() => timerContorl(), 1000);
    return () => clearInterval(actveTimer);
  });
  return (
    <>
      <div className={classes.timer}>
        <p>{`${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}</p>
        <button onClick={() => setPaused(!paused)}>Pause</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
