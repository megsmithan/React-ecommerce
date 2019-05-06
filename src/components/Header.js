import React from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

class Header extends React.Component {

    // onSearchSubmit =

        render() {
        return (
            <h2 className="ui secondary pointing menu">
                <Link to='/' className='item'><i className='home icon' /></Link>
                <div className='right menu'>
                    <SearchBar />
                </div>
                <div className='right menu'>
                    <Link to='/cart' className='item'><i className="shopping cart icon" /></Link>
                </div>
            </h2>
        )
    }
}



export default Header