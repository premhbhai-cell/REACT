import { useState } from 'react'
import './App.css'

function App() {
  const [inputData, setInputData] = useState('')



  mutiple but lots of Function bana kr 
  const [name,setName]= useState(``);
    const [email,setEmail]= useState(``);

    // Name input handler
    const nameHandle = (e) => {
      setName(e.target.value)
    }

    const emailHandle = (e) => {
      setEmail(e.target.value)
    }

    const cancelHandle = (e) => {
      setEmail(``)
      setName(``)
    }


const [data,setData]= useState({
  name : ``,
  email:``,
  phoneNumber: ``,
})

const inputHandle =(e)=>{
  const {name, value} = e.target;
  setData({...data, [name]: value})
}

const clearData = (e)=>{
  setData({
    name : ``,
  email:``,
  phoneNumber: ``,
  })
}

  return (
?


// mutiple input slect with one function 
<div className="flex flex-col my-50 mx-50 gap-10">
    
<input type="text" name='name' value={data.name} placeholder="Enter Name" onChange={inputHandle} />
<input type="text" name='email' value={data.email} placeholder="Email" onChange={inputHandle} />
<input type="tel" name='phoneNumber' value={data.phoneNumber} placeholder="phone" onChange={inputHandle} ></input>

       <p>{data.email}</p>
       <h1>{data.name}</h1>
       <p>{data.phoneNumber}</p>

    <button onClick={clearData}>Clear</button>

    </div>
    



  )
}


export default App
