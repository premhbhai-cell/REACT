import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-white text-center font-bold shadow-xl">
        This is Tailwind CSS
      </h1>
      <p className="bg-blue-500 text-white p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates,
        voluptatibus temporibus neque commodi necessitatibus, error tempora
        repellendus corporis eum, magnam ut quis voluptatem. Aliquid veritatis
        sed suscipit perferendis voluptate esse ipsum cum dolores consequatur
        assumenda, odit eaque alias non.
      </p>
    </>
  );
}

export default App;
