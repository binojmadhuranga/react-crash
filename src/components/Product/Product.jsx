import React from 'react'
import './Product.css'


 


function Product(prop) {
  return (
    <div className='product'>
        <h1>{prop.tittle}</h1>
        <p>{prop.description}</p>
        <p>{prop.stock}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>

    </div>
  )
}

export default Product