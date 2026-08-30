const Result = ({ score }) => {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-[35px]
        p-10
        text-center
      "
      style={{
        background: "#e0e5ec",
        boxShadow:
          "15px 15px 30px #bec3c9, -15px -15px 30px #ffffff",
      }}
    >

      {/* TROPHY */}
      <div
        className="
          w-28
          h-28
          mx-auto
          mb-7
          rounded-full
          flex
          items-center
          justify-center
          text-5xl
        "
        style={{
          background: "#e0e5ec",
          boxShadow:
            "8px 8px 16px #bec3c9, -8px -8px 16px #ffffff",
        }}
      >
        🏆
      </div>


      {/* QUIZ COMPLETE */}
      <p
        className="
          font-bold
          tracking-widest
          text-sm
        "
        style={{
          color: "#9747f5",
        }}
      >
        QUIZ COMPLETE
      </p>


      {/* AMAZING */}
      <h1
        className="
          mt-3
          mb-8
          font-bold
        "
        style={{
          color: "#9747f5",
          fontSize: "48px",
          lineHeight: "1.2",
          fontWeight: 700,
        }}
      >
        Amazing!
      </h1>


      {/* SCORE BOX */}
      <div
        className="
          rounded-3xl
          py-7
          mb-7
        "
        style={{
          background: "#e0e5ec",
          boxShadow:
            "inset 7px 7px 14px #bec3c9, inset -7px -7px 14px #ffffff",
        }}
      >

        {/* YOUR SCORE */}
        <p
          className="
            font-medium
          "
          style={{
            color: "#858996",
            fontSize: "18px",
          }}
        >
          YOUR SCORE
        </p>


        {/* SCORE */}
        <p
          className="
            mt-2
            font-bold
          "
          style={{
            color: "#9747f5",
            fontSize: "64px",
            lineHeight: "1",
            fontWeight: 700,
          }}
        >
          {score}
        </p>

      </div>


      {/* FOOTER */}
      <p
        style={{
          color: "#858996",
          fontSize: "17px",
        }}
      >
        You completed the quiz 🎉
      </p>

    </div>
  );
};

export default Result;
