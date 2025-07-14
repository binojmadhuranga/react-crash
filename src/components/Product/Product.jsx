import React from 'react'
import './Product.css'

function Product(prop) {
  return (
    <div className='product'>
        <h1>{prop.tittle}</h1>
        <p>{prop.description}</p>




    </div>
  )
}

export default Product