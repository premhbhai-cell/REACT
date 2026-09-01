import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [paymentMethod, setPaymentMethod] = useState('');
  // const [language, setLanguage] = useState('')
  // const languages = [`html`, `css`, `javascript`, `react`, `nodejs`]
  const data = {
    india: ["delhi", "mumbai", "kolkata", "bengaluru"],
    usa: ["new york", "los angeles", "chicago", "houston"],
    uk: ["london", "manchester", "birmingham", "liverpool"],
    canada: ["toronto", "vancouver", "montreal", "calgary"]
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <>
      {/* <select  value={paymentMethod}  onChange={(e)=>{
      setPaymentMethod(e.target.value)
    }}>
      <option value="">---Select Payment Method---</option>
      <option value="Upi">Upi</option>
      <option value="Cod">Cod</option>
      <option value="Cards">Cards</option>
    </select> */}


      <select value={selectedCountry} onChange={(e) => {
        setSelectedCountry(e.target.value)
        setSelectedCity('')
      }}>
        <option value="">---Select Country---</option>
        {Object.keys(data).map((item) => {
          return (
            <option value={item}>{item} </option>
          )
        })}
      </select>

      {selectedCountry && (
        <select value={selectedCity} onChange={(e) => {
          setSelectedCity(e.target.value)
        }}>
          <option value="">---Select City---</option>
          {data[selectedCountry].map((item) => {
            return (
              <option value={item}>{item} </option>
            )
          })}
        </select>
      )}



    </>
  )
}

export default App
