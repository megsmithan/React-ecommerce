import React from 'react'
import store from '../store'





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
                <div key={idx}>
                    <div><i className='trash alternate icon' /></div>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                </div>
                )
        })
    };
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}




export default Cart


