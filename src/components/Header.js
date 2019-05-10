import React from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import store from '../store'
import ax from "../api/api";


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
// const Header = () => {
//     return (
//             <div className="ui secondary pointing menu headerBox">
//                 <Link to='/' className='item'><i className='home icon' /></Link>
//                 <div className='right menu storeName'>
//                     <p>Shopaholics Anonymous</p>
//                 </div>
//                 <div className='right menu'>
//                     <div className='content searchBar'>
//                         <SearchBar />
//                     </div>
//                     <Link to='/cart' className='mainCartIcon'><i className="shopping cart icon" /></Link>
//                     <span className='cartNumberIcon'>{store.getState().cart.length}</span>
//                 </div>
//             </div>
//         )
// };


export default Header



// return (
//     <div className="headerBox">
//         <div>
//             <Link to='/' className=''><i className='home icon' /></Link>
//         </div>
//         <div className=''>
//             <span><SearchBar /></span>
//             <span><Link to='/cart' className=''><i className="shopping cart icon" /></Link></span>
//         </div>
//     </div>
// )