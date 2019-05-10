import React from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import store from '../store'


class Header extends React.Component {

    onHomeClick = () => {
        store.dispatch({
            type: 'SET_FILTER',
            filter: ''
        });
    };
    render() {
        return (
            <div className="ui secondary pointing menu headerBox">
                <Link to='/' className='item' onClick={this.onHomeClick}><i className='home icon' /></Link>
                <div className='right menu storeName'>
                    <p>Shopaholics Anonymous</p>
                 </div>
                 <div className='right menu'>
                    <div className='content searchBar'>
                         <SearchBar />
                     </div>
                     <Link to='/cart' className='mainCartIcon'><i className="shopping cart icon" /></Link>
                     <span className='cartNumberIcon'>{store.getState().cart.length}</span>
                 </div>
            </div>
         )
    }
}


export default Header

