import React from 'react'
import store from '../store'

class ProductDetails extends React.Component {
    state = {
        product: []
    };
    componentDidMount() {
        this.setState({
            product: store.getState().products.filter(product => {
                return product.id === Number(this.props.match.params.productId)
            })
        })

    }
    renderProduct() {
        return this.state.product.map((prod, idx) => {
            return (
                <div key={idx}>
                    <div>{prod.title}</div>
                    <div>{prod.price}</div>
                    <img src={prod.img} alt='product' width={200} />
                    <div>{prod.description}</div>
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