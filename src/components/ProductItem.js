import React from 'react';
import { Link } from 'react-router-dom'

// import Cart from './Cart'
// import ProductDetails from "./ProductDetails";
import store from '../store';

class ProductItem extends React.Component {

    onAddCartClick = (product) => {
        store.dispatch({
            type: 'ADD_PRODUCT_CART',
            product: product
        })

     };

    render() {
        return (
            <div className='column'>
                <div className='ui card'>

                    <div className='imageBox'>
                        <img
                            // onClick={this.onProductClick}
                             className='productImg'
                             alt='product'
                             src={this.props.img}
                             height={200}
                        />
                    </div>

                    <div className='content'>
                        <div className='header'>{this.props.title}</div>
                        <div className='date'>{this.props.price}</div>
                    </div>

                    <div className='extra content'>
                        <span>
                            <Link to={`/details/${this.props.id}`}>view details</Link>
                        </span>
                        <span className='right floated'>
                            <Link to='/cart'><i onClick={() => this.onAddCartClick(this.props)} className='cartBtn shopping cart icon'/></Link>
                        </span>
                    </div>

                </div>
            </div>

            // <i onClick={() => this.onAddCartClick(this.props.id)} className='cartBtn shopping cart icon'/>

        )
    }
}


export default ProductItem



// return (
//     <div className='ui special cards'>
//
//         <div className='card'>
//
//             <div className='blurring dimmable image'>
//                 <div className='ui inverted dimmer'>
//                     <div className='content'>
//                         <div className='center'>
//                             <div className='ui inverted button'>View Details</div>
//                         </div>
//                     </div>
//                 </div>
//                 <img
//                     // onClick={this.onProductClick}
//                     className='productImg'
//                     alt='product'
//                     src={this.props.img}
//
//                 />
//             </div>
//
//             <div className='content'>
//                 <div className='header'>{this.props.title}</div>
//                 <div className='date'>{this.props.price}</div>
//             </div>
//
//             <div className='extra content'>
//                         <span>
//                             <Link to={`/details/${this.props.id}`}>view details</Link>
//                         </span>
//                 <span className='right floated'>
//                             <Link to='/cart'><i onClick={() => this.onAddCartClick(this.props)} className='cartBtn shopping cart icon'/></Link>
//                         </span>
//             </div>
//
//         </div>
//     </div>
//
//     // <i onClick={() => this.onAddCartClick(this.props.id)} className='cartBtn shopping cart icon'/>
//
// )





