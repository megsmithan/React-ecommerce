import React from 'react';
import { Link } from 'react-router-dom'
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
                             style={{maxHeight:170}}
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
        )
    }
}


export default ProductItem


