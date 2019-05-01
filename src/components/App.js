import React from 'react';
import ax from "../api/api";

import SearchBar from './SearchBar'
import ProductsList from "./ProductsList";


class App extends React.Component {
    state = {
        products: []
    };

    componentDidMount() {
        ax.get('/products').then(res => {
            this.setState({ products: res.data });
            console.log(this.state.products)
        });

    };

    render() {
        return (<>
            <div className='ui container'>
                <SearchBar />
            </div>
            <ProductsList products={this.state.products} />
            </>
        )
    }
}




export default App