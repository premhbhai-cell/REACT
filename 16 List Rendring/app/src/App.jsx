import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './UserCard'

function App() {

  const arr = ["Prem","Rahul","Vikas"]
   const arr = [
    { id: 1, name: "Prem Kumar", age: 21 },
    { id: 2, name: "Rahul Shing", age: 35 },
    { id: 3, name: "Yash", age: 51 },
    { id: 4, name: "Sunita", age: 51 },
    { id: 5, name: "Rk", age: 28 },
  ];

  const arr = [
    ["html", "css", "java"],
    ["Raect", "tailwind"]
  ]


  return (
    <>
      <h1 >Hello</h1>
      {arr.map((item)=>{
        return <h1 key={item}>{item}</h1>
      })} 

      {/* array of Obejects */}
    <h1>Hello</h1>
    {arr.map((user)=>{
      return (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.age}</p>

        </div>
      )
    })} 

      {/* Array InSide Array */}
      {arr.map((item, index) => {
        return (
          <div key={index}>
            {
              item.map((item, index) => {
                return (
                  <h1 key={index}>{item}</h1>
                )
              })
            }
          </div>

        )
      })}

    //  rendring Component with .map
    {arr.map((user)=>{
      return(
        <UserCard key={user.id} UserDetails={user}/>
      )
    })}




    </>
  )
}

export default App
