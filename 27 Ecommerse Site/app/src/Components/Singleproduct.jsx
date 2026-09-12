import React from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    const {id} = useParams();


  return (
    <div>
      <h1>single Products {id}</h1>
    </div>
  )
}

export default Singleproduct
