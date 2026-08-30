import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [popup, setpopup,] = useState(false);
  const [setPopup, setEditpopup,] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center gap-3">
      {/* Delete Button */}
      <button className="px-6 py-3 bg-[red] text-white border-2 border-blue-500 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:border-white" onClick={() => {
        setpopup(true);
      }}>Delete</button>


      {/* Popup Component */}
      <Popup popup={popup} setpopup={setpopup} titel={"⚠️Delete"} description={"Are You Sure You Want To delete"} />



      {/* Edit Button */}
      <button className="px-6 py-3 bg-[blue] text-white border-2 border-blue-500 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:border-white" onClick={() => {
        setEditpopup(true);
      }}>Edit</button>

      <Popup popup={setPopup} setpopup={setEditpopup} titel={"🖌️ Edit"} description={"Are You Sure You Want To Edit"} />

    </div>
  );
}

export default App;
