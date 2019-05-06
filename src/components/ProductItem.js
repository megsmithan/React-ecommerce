import React from 'react';

import AddToCartBtn from './AddToCartBtn';
// import store from '../store';

class ProductItem extends React.Component {
    // componentWillMount() {
    //     console.log(store.getState().products)
    // }

    onProductClick = () => {
        console.log('yay! you clicked on an item')
    };
    render() {
        return (
            <div className='productBox'>
                <div className='hooverItem'>
                    <span className='hooverItemText'>View Details</span>
                    <img onClick={this.onProductClick}
                         className='productImg'
                         alt='product'
                         src={this.props.img}
                    />
                </div>
                <div className='productTitle'>{this.props.title}</div>
                <div className='productPrice'>{this.props.price}</div>
                <AddToCartBtn />
            </div>
        )
    }
}


export default ProductItem







// import React from 'react';
//
// import AddToCartBtn from './AddToCartBtn';
//
//
//
//
//
// const ProductItem = props => {
//     return (
//         <div className='productBox'>
//             <img className='productImg' alt='product item' src={props.img} />
//             <div className='productTitle'>{props.title}</div>
//             <div className='productPrice'>{props.price}</div>
//             <AddToCartBtn />
//         </div>
//     )
// };
//
//
// export default ProductItem



