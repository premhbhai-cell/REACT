import React, { useContext } from "react";
import C from "./C";
import D from "./D";
import { useMyContext } from "../MyContext";

const a = () => {
  const data = useMyContext();

  return (
    <div className="bg-amber-800 p-10">
      <p>
        A<p>{data}</p>
        <C />
        <D />
      </p>
    </div>
  );
};

export default a;
