import { useEffect, useState } from "react";
import "./styles/main.css";
import Timer from "./components/timer/Timer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { IPlayer } from "./components/intefaces/interfaces";

function App() {
  const [players, setPlayers] = useState<IPlayer[]>([
    {
      id: 1,
      name: "Player-1",
      inGame: false,
      currentTotalScore: 0,
      currentTotalP: 0,
      currentTotalA: 0,
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
    {
      id: 2,
      name: "Player-2",
      inGame: false,
      currentTotalScore: 0,
      currentTotalP: 0,
      currentTotalA: 0,
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
  ]);

  const playersHandle = (player: IPlayer) => {}; //Todo изменить игрока при получении очка в скоребоарде
  const [winner, setWinner] = useState<IPlayer>();

  const changeName = (id: number, name: string) => {
    const updPlayers = players.map((player: IPlayer) => {
      if (player.id === id) {
        return { ...player, name };
      } else {
        return player;
      }
    });
    setPlayers(updPlayers);
  };

  const addPlayer = () => {}; // Implement function add a new Player

  const checkWinner = () => {
    const currentPlayers = players.filter((player: IPlayer) => {
      player.inGame === true;
    });
    if (
      currentPlayers[0].currentTotalScore > currentPlayers[1].currentTotalScore
    ) {
      setWinner(currentPlayers[0]);
      console.log("winner1 ---", winner);
    } else {
      setWinner(currentPlayers[1]);
      console.log("winner2 ---", winner);
    }
  };

  const [hasTimeLeft, setHasTimeLeft] = useState(true);
  const hasTimeLeftHandle = () => {
    setHasTimeLeft(!hasTimeLeft);
  };

  useEffect(() => {
    if (!hasTimeLeft) alert("Start funtction check the winner");
    return () => {
      setHasTimeLeft(true);
    };
  });

  return (
    <div className="main">
      <Timer hasTimeLeftHandle={hasTimeLeftHandle} />
      <Scoreboard
        players={players}
        changeName={changeName}
        hasTimeLeft={hasTimeLeft}
      />
    </div>
  );
}

export default App;
