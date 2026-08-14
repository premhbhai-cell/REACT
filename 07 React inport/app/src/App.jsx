import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Hedding, { Card, Card2 } from "./Hedding";
// import logo from "07 React inport\app\src\assets\vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hedding />
      <Card />
      <Card2 />
      <img src="{viteLogo}" alt="" />
    </>
  )
}

export default App;
