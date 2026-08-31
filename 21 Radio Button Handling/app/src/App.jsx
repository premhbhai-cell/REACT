import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //   const [gender, setGender] = useState(``);
  // const genders = [`Male`,`Femail`, `Others`]
  const [selectedMod, setSelectedMod] = useState({})

  const payments = [
  {id: "upi", info: "Instant Transfer via UPI app"},
  {id: "card", info: "credit / debit"},
  {id: "Cod", info: "cash on delivery"}
];





return (
  <div className='mx-50 my-50 flex gap-4 '>

    {/* control version wuth usestate
      <label htmlFor="Male">
        <input 
        id='Male' 
        type="radio" 
        value={"Male"} 
        checked = {gender === "Male"}
        name='gender'
        onChange={(e)=> setGender(e.target.value)}
        /> Male
      </label>
<br />
<br />

      <label htmlFor="Femail">
        <input 
        id='Femail' 
        type="radio" 
        name='gender'
         value={"Femail"} 
        checked = {gender === "Femail"}
        onChange={(e)=> setGender(e.target.value)}

        /> Femail
      </label>
<br />
<br />

      <label htmlFor="others">
        <input
         id='others' 
         type="radio" 
         name='gender'
          value={"others"} 
        checked = {gender === "others"}
        onChange={(e)=> setGender(e.target.value)}


         /> Others
      </label> */}

    {/* Grouping ya ek baar mai krna 
      {genders.map(item =>{
        return(
          <label htmlFor={item}>
        <input 
        id = {item}
        type="radio" 
        value={item}
        checked = {gender === item}
        name='genders'
        onChange={(e)=> setGender(e.target.value)}
        /> {item}
      </label>
        )
      })} */}


 {payments.map((item) => {
  return (
    <label htmlFor={item.id} key={item.id}>
      <input
        id={item.id}
        type="radio"
        value={item.id}
        checked={selectedMod.id === item.id}
        name="payments"
        onChange={() => setSelectedMod(item)}
      />
    {item.id}
     
    </label>
  );
})}


<div>
  <p>Mode Of Payment: {selectedMod.id}</p>

  <p>
    Details: {payments.find(item => item.id === selectedMod.id)?.info}
  </p>
</div>

  </div>
)
}

export default App
