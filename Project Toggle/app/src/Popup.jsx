import React from 'react'

const Popup = ({popup,setpopup, titel,description}) => {


  return (
    <>
      {popup && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
          <button className="absolute top-[1rem] right-[1rem] bg-[#242424]" onClick={()=>{
            setpopup(false);
          }}>❌</button>
          <div className="w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl mb-2">{titel}</h1>
          <p>{description}</p>
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-[tomato] text-white rounded-lg cursor-pointer">Yes</button>
            <button className="px-6 py-3 bg-[Blue] text-white rounded-lg cursor-pointer">No</button>

          </div>
          </div>
          
        </div>
      )}
    </>
  )
}

export default Popup
