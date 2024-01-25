import Title from "./components/HeadingText.tsx";
import Card from "./components/Card.tsx";

import { useState } from "react";

import "./style.css";

import Footer from "./components/Footer.tsx";

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
      <div className="appContent">
        <Title />
        <Card time={time} />
        <Footer />
      </div>
    </>
  );
}

export default App;
