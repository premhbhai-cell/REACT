import "./App.css";
import useStore from "./Store/Usestore";

function App() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  return (
    <div className="my-50 mx-100">
      <h1>{count}</h1>

      <button className="bg-red-500" onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default App;
