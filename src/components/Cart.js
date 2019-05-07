import React from 'react'
import store from '../store'

import './Cart.css'



// const Cart = () => {
//     return (
//         <div>{store.getState().cart.map((item, idx) => {
//             return(
//                 <div className='ui cards' key={idx}>
//                     <div className='card'>
//                         <div className='content'>
//                             <span><i className='trash alternate icon' /></span>
//                             <span className='header'>{item.title}</span>
//                             <span className='right floated'>{item.price}</span>
//                         </div>
//                     </div>
//                 </div>
//             )
//         })}</div>
//     )
// };


class Cart extends React.Component {
    renderCart = () => {
        console.log(store.getState().cart);
        return store.getState().cart.map((item, idx) => {
            return (
                <div className='cartItemBox' key={idx}>
                    <div>
                        <i className='trash alternate icon deleteIcon' />
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
                <div className='checkOutBtn'><button className='ui button'>Check Out</button></div>
            </div>
        )
    }
}




export default Cart


