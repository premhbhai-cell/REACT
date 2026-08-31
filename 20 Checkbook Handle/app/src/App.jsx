import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [isCheck, setisCheck] = useState(false)

  const onCheck = (e)=>{
setisCheck(e.target.checked)
  }

  return (
    <div className='flex flex-col center my-50 mx-150'>
      <label htmlFor="cb">
        <input id="cb" type="checkbox" checked={isCheck} onChange={onCheck} />
        Terms & Conditions
      </label>
    
    </div>
  )
}

export default App