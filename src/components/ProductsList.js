import React from 'react';
import ProductItem from "./ProductItem";
import store from '../store'



class ProductsList extends React.Component {
    renderProductList() {
        const products = store.getState().products.filter(prod => {
            if (store.getState().filter === prod.category) {
                return prod;
            } else if (store.getState().filter === '') {
                return prod;
            }
        });
        return products.map((prod, idx) => {
            return <ProductItem
                key={idx}
                {...prod}
                />
        })
    }
    render() {
        return (
            <div className='ui stackable four column grid'>
                {this.renderProductList()}
            </div>
        )
    }
}





export default ProductsList