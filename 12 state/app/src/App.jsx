import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() { 

  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  //  const [count, setCount] = useState(0);
  // function increment() {
  //   setCount(prev => prev +1);
  // }
function decrement() {
  if(count >0){
    setCount(count - 1);
  }
}

function reset(){
  setCount(0);
}
  


  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>✅</button>
      <button onClick={decrement}>❌</button>
      <button onClick={reset}>🔄️</button>


    </>
  );
}

export default App;
