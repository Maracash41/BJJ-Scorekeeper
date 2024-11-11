import { useState } from "react";
import "./styles/main.css";
import Timer from "./components/timer/Timer";
import Scoreboard from "./components/Scoreboard/Scoreboard";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <Timer />
      <Scoreboard />
    </div>
  );
}

export default App;
