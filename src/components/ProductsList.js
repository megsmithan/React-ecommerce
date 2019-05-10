import React from 'react';
import ProductItem from "./ProductItem";
// import './ProductList.css';
import store from '../store'
// import { Link } from 'react-router-dom';


class ProductsList extends React.Component {


    renderProductList() {
        // console.log(store.getState().filter);
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

//store.getState().filter



export default ProductsList