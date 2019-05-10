import React from 'react';
import ax from "../api/api";
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'


// import SearchBar from './SearchBar'
import ProductsList from "./ProductsList";
import Header from "./Header";
import Cart from './Cart';
import store from '../store';
import ProductDetails from "./ProductDetails";
import OrderConfirm from './OrderConfirm';


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
            <div >
                <BrowserRouter>
                    <div className='mainContainer'>
                        <Header />
                        <div className='middleContainer'>

                            <Route path='/' exact component={ProductsList} />

                            <Route path='/details/:productId' exact component={ProductDetails} />
                            <Route path='/cart' exact component={Cart} />
                            <Route path='/order/confirmation' extact component={OrderConfirm} />
                        </div>

                    </div>
                </BrowserRouter>

                <div className='footer'><p>© 2019 Let's shop and spend all our money</p></div>
            </div>

        )
    }
}




export default App

//wrap the pages in the switch, within the router. but for the links you want always
//showing, wrap inside the router but outside the switch
