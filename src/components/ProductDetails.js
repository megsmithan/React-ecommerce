import React from 'react'
import store from '../store'
import './ProductDetails.css'
import { Link } from 'react-router-dom'

class ProductDetails extends React.Component {
    state = {
        product: []
    };
    componentDidMount() {
        // console.log(this.props.match.params.productId)
        this.setState({
            product: store.getState().products.filter(product => {
                return product.id === Number(this.props.match.params.productId)
            })
        })
    }
    onAddCartClick = (product) => {
        store.dispatch({
            type: 'ADD_PRODUCT_CART',
            product: product
        })

    };
    renderProduct() {
        return this.state.product.map((prod, idx) => {
            return (
                <div className='detailsBox' key={idx}>
                    <div className='detailsTitle'>{prod.title}</div>
                    <div className='detailsPrice'>{prod.price}</div>
                    <img src={prod.img} alt='product' style={{maxHeight:300}} />
                    <div className='detailsDescription'>{prod.description}</div>
                    {/*<div className='detailsRating'>{prod.rating}</div>*/}
                    <div className="ui vertical animated button btnBox" tabIndex="0">
                        <div className="hidden content" onClick={() => this.onAddCartClick(prod)}><Link to='/cart'>Add To Cart</Link></div>

                        <div className="visible content">
                            <i className="shop icon"/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        )
    }
}




export default ProductDetails



// {this.props.match.params.productId}