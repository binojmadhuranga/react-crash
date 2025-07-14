import React from 'react';
import './Product.css';

function Product(prop) {


    if (prop.stock === 0) {
        return <p className='out-of-stock'>{prop.tittle} is Out of Stock</p>;
    };

    return (

        <div className='product'>
            <h1 className='product-title'>{prop.tittle}</h1>
            <p className='product-description'>{prop.description}</p>
            <p className='product-stock'>Stock: {prop.stock}</p>
            <div className='product-buttons'>
                <button className='btn add-to-cart'>Add to Cart</button>
                <button className='btn buy-now'>Buy Now</button>
            </div>
        </div>
    );
}

export default Product;
