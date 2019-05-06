import React from 'react';
import ax from "../api/api";
import { BrowserRouter, Route } from 'react-router-dom'


// import SearchBar from './SearchBar'
import ProductsList from "./ProductsList";
import Header from "./Header";
import Cart from './Cart';
import store from '../store';
import ProductDetails from "./ProductDetails";


class App extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());

        ax.get('/products').then(res => {
            // console.log(res)
            store.dispatch({
                type: 'SET_PRODUCTS',
                products: res.data
            });
            // console.log(store.getState())
        });
    };


    render() {
        return (
            <div className='ui container'>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={ProductsList} />
                        <Route path='/details/:productId' exact component={ProductDetails} />
                        <Route path='/cart' exact component={Cart} />
                    </div>
                </BrowserRouter>
                {/*<ProductsList />*/}
            </div>
        )
    }
}




export default App

//wrap the pages in the switch, within the router. but for the links you want always
//showing, wrap inside the router but outside the switch