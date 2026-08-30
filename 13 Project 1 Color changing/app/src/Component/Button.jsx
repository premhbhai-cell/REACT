import React from "react";

const Button = ({color,setSelectedColor ,children}) => {

    function setColor(){
        setSelectedColor(color)

    }
  return (
    <button onClick={setColor} className="bg-blue-500 text-white py-2 px-4 border border-blue-500 rounded" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default Button;
