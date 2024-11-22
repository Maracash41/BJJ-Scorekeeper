import { useEffect, useState } from "react";
import "./styles/main.css";
import Timer from "./components/timer/Timer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { IPlayer } from "./components/intefaces/interfaces";

function App() {
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState<IPlayer[]>([
    {
      id: 1,
      name: "Player-1",
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
    {
      id: 2,
      name: "Player-2",
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
  ]);

  const [hasTimeLeft, setHasTimeLeft] = useState(true);
  const hasTimeLeftHandle = () => {
    setHasTimeLeft(!hasTimeLeft);
  };

  useEffect(() => {
    if (!hasTimeLeft) alert("check who is Win");
    return () => {
      setHasTimeLeft(true);
    };
  });

  return (
    <div className="main">
      <Timer hasTimeLeftHandle={hasTimeLeftHandle} />
      <Scoreboard />
    </div>
  );
}

export default App;
