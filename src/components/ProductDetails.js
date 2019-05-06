import React from 'react'

class ProductDetails extends React.Component {
    renderProductDetails() {
        const item = store.getState().filter(i => {
            if (store.getState().filter === i.id) {
                return i;
            }
        })
    }

    render() {
        return (
            <div>{this.props.match.params.productId}</div>
        )
    }
}




export default ProductDetails