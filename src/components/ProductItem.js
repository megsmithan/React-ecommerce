import React from 'react';

import AddToCartBtn from './AddToCartBtn';

const ProductItem = props => {
    return (
        <div className='productBox'>
            <img className='productImg' alt='product item' src={props.img} />
            <div className='productTitle'>{props.title}</div>
            <div className='productPrice'>{props.price}</div>
            <AddToCartBtn />
        </div>
    )
};


export default ProductItem


