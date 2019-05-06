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
            <div className='ui special cards four wide column'>
                <div className='card'>

                    <div className='blurring dimmable image'>
                        <div className='ui inverted dimmer'>
                            <div className='content'>
                                <div className='center'>
                                    <div className='ui inverted button'>View Details</div>
                                </div>
                            </div>
                        </div>
                        <img onClick={this.onProductClick}
                             className='productImg'
                             alt='product'
                             src={this.props.img}
                        />
                    </div>

                    <div className='content'>
                        <div className='header'>{this.props.title}</div>
                        <div className='date'>{this.props.price}</div>
                    </div>

                    <div className='extra content'>
                        <AddToCartBtn />
                    </div>

                </div>
            </div>

            // <div className='productBox'>
            //     <div className='hooverItem'>
            //         <span className='hooverItemText'>View Details</span>
            //         <img onClick={this.onProductClick}
            //              className='productImg'
            //              alt='product'
            //              src={this.props.img}
            //         />
            //     </div>
            //     <div className='productTitle'>{this.props.title}</div>
            //     <div className='productPrice'>{this.props.price}</div>
            //     <AddToCartBtn />
            // </div>
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



