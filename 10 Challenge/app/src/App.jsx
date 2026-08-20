import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Usercard from './Usercard'

function App() {

  return (
    <div className="grid grid-cols-4 gap-[1rem] max-[1200px]:grid-cols-3 max-[1040px]:grid-cols-2 gap-[1rem] pt-[2rem] max-[600px]:grid-cols-1 items-center justify-center pt-[2rem] px-[2rem]">
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />

     
    </div>
  )
}

export default App
