import React from 'react';
// import SearchBar from "./SearchBar";

class Header extends React.Component {

    // onSearchSubmit =

        render() {
        return (
            <h2 className="ui header">

                <div className="content">
                    Let's shop and spend all our money

                    <div>
                        {/*<SearchBar submitSearch={} />*/}
                        <i className="shopping cart icon" />
                    </div>
                </div>

            </h2>
        )
    }
}



export default Header