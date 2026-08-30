import Timer from "./Timer";
import Questions from "./Questions";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-5">

      {!isOver ? (
        <div className="w-full max-w-3xl">

          <Timer setIsOver={setIsOver} />

          <Questions
            setIsOver={setIsOver}
            setScore={setScore}
          />

        </div>
      ) : (
        <Result score={score} />
      )}

    </div>
  );
}

export default App;