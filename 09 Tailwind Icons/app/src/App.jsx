import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { FaFacebook } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        This is Raact Icons adding <FaFacebook style={{ color: "blue", fontSize: "2rem" }} />
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate
        officiis omnis commodi vel? Veniam, suscipit harum! Non, amet deserunt.
      </p>
    </>
  );
}

export default App;
