import { useContext, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import A from "./Components/A";
import B from "./Components/B";
import { useMyContext } from "./MyContext";

function App() {
  const data = useMyContext();

  return (
    <div className="bg-red-500 p-10 my-70 mx-100 flex flex-col items-center">
      app
      <p>{data}</p>
      <A />
      <B />
    </div>
  );
}

export default App;
