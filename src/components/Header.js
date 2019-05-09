import React from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import store from '../store'


// class Header extends React.Component {
//
//     // onSearchSubmit =
//
//         render() {
//         return (
//             <div className="ui secondary pointing menu headerBox">
//                 <Link to='/' className='item'><i className='home icon' /></Link>
//                 <div className='right menu'>
//                     <SearchBar />
//                 </div>
//                 <div className='right menu'>
//                     <Link to='/cart' className='item'><i className="shopping cart icon" /></Link>
//                 </div>
//             </div>
//         )
//     }
// }
const Header = () => {
    return (
            <div className="ui secondary pointing menu headerBox">
                <Link to='/' className='item'><i className='home icon' /></Link>
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
};


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