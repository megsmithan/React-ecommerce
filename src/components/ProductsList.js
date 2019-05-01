import React from 'react';
import ProductItem from "./ProductItem";
import './ProductList.css';


class ProductsList extends React.Component {


    renderProductList() {
        return this.props.products.map((prod, idx) => {
            return <ProductItem
                key={idx}
                img={prod.img}
                title={prod.title}
                price={prod.price}
                />
        })
    }


    render() {
        return (
            <div className='product-list'>{this.renderProductList()}</div>
        )
    }
}




export default ProductsList