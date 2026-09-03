// import { useState } from 'react'
import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [savePassword, setSavePassword] = useState([]);
  const passwordRef = useRef(null);


  const genratedPassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) {
      str = str + "0123456789";
    }

    if (isCharacterAllowed) {
      str = str + "!@#$%^&*()_+";
    }
    let pass = "";

    for (let i = 1; i <= length; i++) {
      let randomCharter = Math.floor(Math.random() * str.length);
      let characterPicked = str.charAt(randomCharter);
      pass = pass + characterPicked;


    }
    setPassword(pass);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();

  }

  useEffect(() => {
    genratedPassword();
  }, [length, isNumberAllowed, isCharacterAllowed]);

  return (
    <div className="flex flex-col items-center gap-5 my-15.0">
      <h1>Password Generator</h1>

      {/* input field And Copy Btn */}
      <div className="flex w-full max-w-lg my-5">
        <input
          type="text"
          placeholder="Generated Password"
          readOnly={true}
          value={password}
          ref={passwordRef}
          className="flex-1 bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-700 outline-none px-4 py-3 rounded-l-lg" />

        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-400 transition" onClick={copyPassword}>
          Copy
        </button>
      </div>


      {/* input range Btn */}
      <input
        type="range"
        min="0"
        max="100"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full max-w-lg h-2 rounded-lg cursor-pointer accent-blue-600 hover:bg-blue-400"
      />





      {/* checkbox number and character */}
      <div className="flex gap-6 my-5 text-white rounded-lg">
        <label htmlFor="numberAllowed" className="flex items-center gap-2 cursor-pointer ">
          <input
            type="checkbox"
            id="numberAllowed"
            checked={isNumberAllowed}
            onChange={(e) => setIsNumberAllowed(e.target.checked)}
            className="appearance-none w-8 h-8 rounded-lg border-2 bg-[#1a1a1a]cursor-pointer checked:bg-green-500 checked:border-green-300"

          />
          Number Allowed
        </label>

        <label htmlFor="characterAllowed" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="characterAllowed"
            checked={isCharacterAllowed}
            onChange={(e) => setIsCharacterAllowed(e.target.checked)}
            className="appearance-none w-8 h-8 rounded-lg border-2 bg-[#1a1a1a]cursor-pointer checked:bg-green-500 checked:border-green-300"
          />
          Character Allowed
        </label>
      </div>



      {/* Reset Button And Save password */}
      <div className="flex flex-col gap-5">
        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
          onClick={() => {
            setPassword('');
            setLength(0);
            setIsNumberAllowed(false);
            setIsCharacterAllowed(false);
          }}
        >🔄️Reset Password</button>


        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-400 transition" onClick={() => {
          if (password) {
            setSavePassword([password])
          }
        }}>💾Save Password</button>

      </div>

      {savePassword.length > 0 && savePassword.map((item, index) => {
        return (
          <p key={index} className="text-white">
            Save Password :- {item}
          </p>
        )
      })}

    </div>
  )
}

export default App
