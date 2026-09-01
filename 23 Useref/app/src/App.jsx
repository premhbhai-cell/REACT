import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { useRef } from 'react'

import './App.css'

function App() {
  // const inputref = useRef()
const divRef = useRef()


// focus adding with use
  const handleinputref = () => {
divRef.current.style.backgroundColor = 'green'
divRef.current.style.borderRadius = '100%'  
    

}

  return (
    <div className="my-70 mx-70 text-Black">
      {/* <input ref={inputref} className="my-50 mx-50 text-Black" type="text" placeholder="Enter your name" /> */}

      <div ref={divRef} className='bg-red-500 h-40 w-40'></div>
      <br />
      <button className='bg-blue-500 w-[80px] h-[60px] p-2 rounded-xl' onClick={handleinputref}>Click</button>
    </div>
  )
}

export default App
