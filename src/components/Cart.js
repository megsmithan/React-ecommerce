import React from 'react'
// import store from '../store'

const Cart = (props) => {
    return (
        <div>{props.title}</div>
    )
}


export default Cart


// class Cart extends React.Component {
//     state = {
//         cart: []
//     };
//     componentDidMount() {
//         // console.log(this.props.match.params.product);
//         this.setState({
//             cart: store.getState().products.filter(item => (
//                 item.product === Number(this.props.match.params.product)
//                 )
//             )
//         })
//     }
//
//     renderCart() {
//
//         return this.state.cart.map((item, idx) => {
//             return(
//                 <div>
//                     <div>{item.title}</div>
//                 </div>
//             )
//         })
//     }
//
//     render() {
//         return (
//
//             <div>
//                 {this.renderCart()}
//             </div>
//         )
//     }
// }