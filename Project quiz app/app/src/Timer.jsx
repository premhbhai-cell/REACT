import { useEffect, useState } from "react";

const Timer = ({ setIsOver }) => {
  const [leftTime, setLeftTime] = useState(300);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setIsOver(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setIsOver]);

  // MM:SS format
  const minutes = Math.floor(leftTime / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (leftTime % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div className="flex justify-center mb-7">

      <div
        className="w-24 h-24 rounded-full bg-[#e0e5ec]
        flex items-center justify-center
        shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]"
      >

        <div
          className="w-16 h-16 rounded-full
          flex items-center justify-center
          shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]"
        >

          <span
            className={`text-xl font-bold ${
              leftTime <= 3
                ? "text-red-500"
                : "text-purple-500"
            }`}
          >
            {minutes}:{seconds}
          </span>

        </div>

      </div>

    </div>
  );
};

export default Timer;