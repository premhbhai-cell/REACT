import { useState } from "react";
import questions from "./questions.json";

const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setIsOver(true);
      }
    }, 800);
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div
      className="w-full"
      style={{
        color: "#666978",
      }}
    >
      {/* ================= MAIN CARD ================= */}
      <div
        className="w-full rounded-[32px] p-6 sm:p-9 lg:p-10"
        style={{
          background: "#e5eaf1",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "14px 14px 30px #c4c9d1, -14px -14px 30px #ffffff",
        }}
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[2px]"
              style={{
                color: "#8f909a",
              }}
            >
              Question
            </p>

            <div className="flex items-baseline gap-1 mt-1">
              <span
                className="text-3xl font-extrabold"
                style={{
                  color: "#9747f5",
                }}
              >
                {currentIndex + 1}
              </span>

              <span
                className="text-base font-semibold"
                style={{
                  color: "#92949e",
                }}
              >
                / {questions.length}
              </span>
            </div>
          </div>

          {/* QUIZ */}
          <div
            className="px-5 py-3 rounded-2xl text-sm font-extrabold tracking-wide"
            style={{
              background: "#e5eaf1",
              color: "#9145f5",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "6px 6px 13px #c4c9d1, -6px -6px 13px #ffffff",
            }}
          >
            QUIZ
          </div>
        </div>

        {/* ================= PROGRESS ================= */}
        <div className="mb-9">
          <div className="flex justify-between items-center mb-2">
            <span
              className="text-xs font-semibold"
              style={{
                color: "#91939e",
              }}
            >
              Progress
            </span>

            <span
              className="text-xs font-bold"
              style={{
                color: "#9145f5",
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>

          <div
            className="w-full h-3 rounded-full overflow-hidden"
            style={{
              background: "#e5eaf1",
              boxShadow:
                "inset 3px 3px 7px #c4c9d1, inset -3px -3px 7px #ffffff",
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #a04cff, #8839ef)",
              }}
            />
          </div>
        </div>

        {/* ================= QUESTION ================= */}
        <div
          className="rounded-[25px] p-6 sm:p-8 mb-8"
          style={{
            background: "#e1e6ed",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow:
              "inset 6px 6px 13px #c5cad2, inset -6px -6px 13px #ffffff",
          }}
        >
          <p
            className="text-xs font-extrabold tracking-[2px] mb-4"
            style={{
              color: "#8e909a",
            }}
          >
            QUESTION
          </p>

          {/* QUESTION TEXT */}
         <h2
  className="font-extrabold leading-tight"
  style={{
    color: "#686b77",
    fontSize: "42px",
    lineHeight: "1.3",
    fontWeight: 800,
    opacity: 1,
  }}
>
  {currentQuestion.question}
</h2>

        </div>

        {/* ================= OPTIONS ================= */}
        <div className="flex flex-col gap-5">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = isAnswered && option === currentQuestion.answer;

            const isWrong =
              isAnswered &&
              option === selectedOption &&
              option !== currentQuestion.answer;

            return (
              <button
                type="button"
                key={option}
                disabled={isAnswered}
                onClick={() => handleOptionClick(option)}
                className="group w-full min-h-[68px] px-5 py-4 rounded-[20px] flex items-center gap-4 text-left transition-all duration-300"
                style={{
                  /* FORCE LIGHT BACKGROUND */
                  background: isCorrect
                    ? "#e2f1e6"
                    : isWrong
                      ? "#f3e3e6"
                      : "#e5e9ef",

                  /* FORCE BORDER */
                  border: isCorrect
                    ? "1px solid #a8d1b1"
                    : isWrong
                      ? "1px solid #d8aab3"
                      : "1px solid rgba(255,255,255,0.9)",

                  /* FORCE TEXT COLOR */
                  color: isCorrect
                    ? "#5d8065"
                    : isWrong
                      ? "#93636d"
                      : "#9348f5",

                  /* NEUMORPHIC SHADOW */
                  boxShadow: isCorrect
                    ? "inset 5px 5px 10px #c8dccd, inset -5px -5px 10px #ffffff"
                    : isWrong
                      ? "inset 5px 5px 10px #dec9cd, inset -5px -5px 10px #ffffff"
                      : "8px 8px 16px #c5cad2, -8px -8px 16px #ffffff",

                  /* IMPORTANT */
                  WebkitAppearance: "none",
                  appearance: "none",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isAnswered) {
                    e.currentTarget.style.transform = "translateY(-2px)";

                    e.currentTarget.style.boxShadow =
                      "10px 10px 20px #c2c7cf, -10px -10px 20px #ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAnswered) {
                    e.currentTarget.style.transform = "translateY(0)";

                    e.currentTarget.style.boxShadow =
                      "8px 8px 16px #c5cad2, -8px -8px 16px #ffffff";
                  }
                }}
              >
                {/* ================= LETTER ================= */}
                <span
                  className="w-11 h-11 shrink-0 rounded-[14px] flex items-center justify-center font-extrabold text-lg"
                  style={{
                    background: isCorrect
                      ? "#72b982"
                      : isWrong
                        ? "#c97885"
                        : "#e1e5ec",

                    color: isCorrect || isWrong ? "#ffffff" : "#9747f5",

                    boxShadow:
                      isCorrect || isWrong
                        ? "4px 4px 8px rgba(190,190,190,.4)"
                        : "4px 4px 9px #c4c9d1, -4px -4px 9px #ffffff",
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </span>

                {/* ================= OPTION TEXT ================= */}
                <span
                  className="flex-1 text-base sm:text-lg font-bold leading-7"
                  style={{
                    color: isCorrect
                      ? "#27dd51"
                      : isWrong
                        ? "#93636d"
                        : "#9145f5",

                    /* FORCE VISIBILITY */
                    opacity: 1,
                  }}
                >
                  {option}
                </span>

                {/* CORRECT */}
                {isCorrect && (
                  <span
                    className="shrink-0 text-2xl font-black"
                    style={{
                      color: "#5c9b68",
                    }}
                  >
                    ✓
                  </span>
                )}

                {/* WRONG */}
                {isWrong && (
                  <span
                    className="shrink-0 text-2xl font-black"
                    style={{
                      color: "#b56774",
                    }}
                  >
                    ✕
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ================= FOOTER ================= */}
        <p
          className="text-center text-xs font-medium mt-7"
          style={{
            color: "#9799a3",
          }}
        >
          Choose an answer to continue automatically
        </p>
      </div>
    </div>
  );
};

export default Questions;
