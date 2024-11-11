import { useState } from "react";
import "./styles/main.css";
import Timer from "./components/timer/Timer";

function App() {
  const [count, setCount] = useState(0);

  return <Timer />;
}

export default App;
