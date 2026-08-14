import { useState } from "react";
import "./App.css";

function Counter() {
  let [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="Button">
        <button onClick={increment}>➕Increment</button>
        <button onClick={decrement}>➖Decrement</button>
        <button onClick={reset}>🔄️Reset</button>
        <incrementBtn />
      </div>
    </>
  );
}


// function Increment() {
//   return (
//     let [count, setCount] = useState(0)
//   function Ins() {
//     setCount(count + 1);
//   }

//     <>
//         <button onClick={Ins}>➕Increment</button>
      
//     </>
//   )
// }

// function Decrement() {
//   return (
//     let [count, setCount] = useState(0);
//   function Dec() {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }

//     <>
//         <button onClick={Dec}>➖Decrement</button>
      
//     </>
//   )
// }

// function Reset() {
//   return (
//     let [count, setCount] = useState(0);
//   function Rs() {
//     setCount(0);
//   }

//     <>
//         <button onClick={Rs}>🔄️Reset</button>
              
//     </>
//   )
// }


function App() {
  return (
    <>
      <Counter /> 
    </>
  );
}

export default App;
