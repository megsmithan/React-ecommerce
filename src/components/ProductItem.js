import React from 'react';


const ProductItem = props => {
    return (
        <div className='productBox'>
            <img className='productImg' alt='product item' src={props.img}  />
            <div>{props.title}</div>
            <div>{props.price}</div>

        </div>
    )
};


export default ProductItem


