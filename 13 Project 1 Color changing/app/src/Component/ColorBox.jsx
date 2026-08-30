import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div style={{
        backgroundColor: color,
    }}className="w-[300px] h-[300px] rounded-lg text-white flex items-center justify-center my-8 border-2">{color.charAt(0).toUpperCase() + color.slice(1)}</div>
  )
}

export default ColorBox
