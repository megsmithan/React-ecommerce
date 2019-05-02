import React from 'react';
import ax from "../api/api";

import SearchBar from './SearchBar'
import ProductsList from "./ProductsList";
import Header from "./Header";
import store from '../store';


class App extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());

        ax.get('/products').then(res => {
            store.dispatch({
                type: 'SET_PRODUCTS',
                products: res.data
            });
            console.log(store.getState())
        });
    };


    render() {
        return (<>
            <Header/>
            {/*<div className='ui container'>*/}
            {/*    <SearchBar />*/}
            {/*</div>*/}
            <SearchBar />
            <ProductsList />
            </>
        )
    }
}




export default App