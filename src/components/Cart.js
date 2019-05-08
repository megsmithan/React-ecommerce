import React from 'react'
import { Link } from 'react-router-dom';
import store from '../store'
import './Cart.css'

class Cart extends React.Component {
    onDeleteClick = (id) => {
        // console.log('yay! you deleted something from your cart', id);
        store.dispatch({
            type: 'DELETE_PRODUCT_CART',
            id: id
        });

    };


    renderCart = () => {
        // console.log(store.getState().cart);
        return store.getState().cart.map((item, idx) => {
            return (
                <div className='cartItemBox' key={idx}>
                    <div>
                        <i onClick={() => this.onDeleteClick(item.id)} className='trash alternate icon deleteIcon' />
                        <span>{item.title}</span>
                    </div>
                    <div>${item.price}</div>
                </div>
                )
        })
    };
    renderTotal = () => {
        let cartTotal = 0;
        store.getState().cart.map((item) => {
            return  cartTotal += item.price
        });
        return (
            <div className='cartTotalBox'>
                <div className='cartTotal'>Total</div>
                <div>${cartTotal}</div>
            </div>
        )
    };

    render() {
        return (
            <div>
                <h3 className='cartHeader'>Your Cart</h3>
                <div>{this.renderCart()}</div>
                <div>{this.renderTotal()}</div>
                <div className='checkOutBtn'><Link to='/order/confirmation>'><button className='ui button'>Check Out</button></Link></div>
            </div>
        )
    }
}




export default Cart


