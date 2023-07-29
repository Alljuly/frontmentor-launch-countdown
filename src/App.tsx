import Title from "./components/HeadingText.tsx";
import Card from "./components/Card.tsx";

import { useState } from "react";

import "../public/style.css";
import "./App.css";

function App() {
  const date = new Date().getTime();
  const [time, setTime] = useState(date);

  setInterval(updateTime, 1000);

  function updateTime() {
    const newTime = new Date().getTime();
    setTime(newTime);
  }

  return (
    <>
      <Title />
      <Card timer={time} />
    </>
  );
}

export default App;
