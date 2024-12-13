import { useEffect, useState } from "react";
import "./styles/main.css";
import classes from "./app.module.css";
import Timer from "./components/timer/Timer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { IPlayer } from "./components/intefaces/interfaces";

interface ILastScore {
  playerId: number;
  index: number;
  points: number;
}

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

  const [lastHistory, setLastHistory] = useState(players);
  const [lastScore, setLastScore] = useState<ILastScore>();

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
    setLastHistory(players);
    setLastScore((prevLastScore) => {
      return {
        ...prevLastScore,
        playerId: playerId,
        index: index,
        points: points,
      };
    });
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

  const dicrementScore = (playerId: number, index: number, points: number) => {
    setLastHistory(players);
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.id === playerId) {
          const newScores = [...player.currentScores];
          newScores[index] -= points;

          if (index !== 4 && index !== 5) {
            newScores[newScores.length - 1] -= points;
          }
          return { ...player, currentScores: newScores };
        }
        return player;
      });
    });
  };
  const resetCurrentScores = () => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player: IPlayer) => {
        return { ...player, currentScores: Array(7).fill(0) };
      });
    });

    setLastHistory((prevPlayers) => {
      return prevPlayers.map((player: IPlayer) => {
        return { ...player, currentScores: Array(7).fill(0) };
      });
    });
  };

  const revertScore = () => {
    setPlayers(lastHistory);
  };

  const transferPoint = () => {
    if (lastScore) {
      const { playerId, index, points } = lastScore;
      dicrementScore(playerId, index, points);
      setLastScore(undefined);
      const otherPlayer = players.find(
        (player: IPlayer) => player.id !== playerId,
      );
      if (otherPlayer) {
        incrementScore(otherPlayer.id, index, points);
      }
    }
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
      <Scoreboard
        players={players}
        changeName={changeName}
        incrementScore={incrementScore}
        revertScore={revertScore}
        transferPoint={transferPoint}
      />
      <Timer
        hasTimeLeftHandle={hasTimeLeftHandle}
        hasTimeLeft={hasTimeLeft}
        resetCurrentScores={resetCurrentScores}
      />
    </div>
  );
}
export default App;
