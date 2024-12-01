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
      currentScores: Array(7).fill(0),
      currentTotalScore: 0,
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
    {
      id: 2,
      name: "Player-2",
      inGame: false,
      currentScores: Array(7).fill(0),
      currentTotalScore: 0,
      winCount: 0,
      drawCount: 0,
      loseCount: 0,
    },
  ]);

  const [isReset, setIsReset] = useState(false);
  const isResetHandle = () => {
    setIsReset(!isReset);
  };

  const playersHandle = (player: IPlayer) => {}; //Todo изменить игрока при получении очка в скоребоарде
  const [winner, setWinner] = useState<IPlayer>();

  const changeName = (playerId: number, name: string) => {
    const updPlayers = players.map((player: IPlayer) => {
      if (player.id === playerId) {
        return { ...player, name };
      } else {
        return player;
      }
    });
    setPlayers(updPlayers);
  };

  const incrementScore = (playerId: number, index: number, points: number) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.id === playerId) {
          const newScores = [...player.currentScores];
          newScores[index] += points;

          if (index !== 4 && index !== 5) {
            newScores[newScores.length - 1] += points;
          }
          return { ...player, currentScores: newScores };
        }
        return player;
      });
    });
  };

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

  return (
    <div className="main">
      <Timer
        hasTimeLeftHandle={hasTimeLeftHandle}
        hasTimeLeft={hasTimeLeft}
        isReset={isReset}
        isResetHandle={isResetHandle}
      />
      <Scoreboard
        players={players}
        changeName={changeName}
        incrementScore={incrementScore}
      />
    </div>
  );
}

export default App;
