import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className='bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600'>{props.text}</button>
    </div>
  )
}

export default Buttons
  