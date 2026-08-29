import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Data from './Data.json'

function App() {


  return (
    <>
      <div className='w-full flex flex-col gap-5 p-6 '>
        {Data.map((phoneDetails, index) => {
          return (
            <div key={index} className='flex bg-[#282828] rounded-2xl'>
              {/* image */}
              <div className='w-1/4 flex item-center justify-center p-6' >
                <img src={phoneDetails.image} alt="" />
              </div>


              {/* datials */}
              <div className='flex-1 my-8'>
                <h1>{phoneDetails.title}</h1>
                <p className='my-2 text-[gray]'> ⭐{phoneDetails.rating} | {phoneDetails.reviews}</p>

                <ul className="my-2 text-white list-disc pl-5">
                  {phoneDetails.details.map((detail, index) => {
                    return (
                      <li key={index} className="marker:text-purple-500">{detail}</li>
                    );
                  })}
                </ul>

                <p className='text-green-500'>{phoneDetails.offers.exchangeOffer}</p>
                <p className='text-green-500'>{phoneDetails.offers.bankOffer}</p>


              </div>


              {/* Pricing */}
              <div className='mr-15 my-40 flex flex-col items-end'>
                <p className='text-[white] text-2xl font-bold'>{phoneDetails.price}</p>
                <p className='text-[grey] line-through '>{phoneDetails.originalPrice}</p>
                <p className='text-green-500 text-1xl '>{phoneDetails.discount}</p>


              </div>


            </div>
          )
        })}

      </div>
    </>
  )
}

export default App
