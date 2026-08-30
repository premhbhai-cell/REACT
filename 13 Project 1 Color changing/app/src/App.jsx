import { useState } from "react";
import "./App.css";
import Button from "./Component/Button";
import ColorBox from "./Component/ColorBox";

function App() {
  const colors = ["pink", "blue", "green", "red", "grey", "yellow"];
  const [selectedColor,setSelectedColor]= useState('transparent')

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" text-white text-3xl font-bold my-8">🎨 Color Switcher</h1>

      <div className="flex gap-4">
        {colors.map((item) => (
          <Button 
          key={item} 
          color={item} 
          setSelectedColor={setSelectedColor}
          >{item}
          </Button>))}
      </div>
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default App;
