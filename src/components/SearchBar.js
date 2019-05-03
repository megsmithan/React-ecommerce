import React from 'react';

import store from '../store';

class SearchBar extends React.Component {
    state = {
        term: '',
    };
    onFormSubmit = e => {
        e.preventDefault();
        console.log(e);
        store.dispatch({
            type: 'SET_FILTER',
            filter: this.state.term
        });

    };

    handleChange = e => {
        this.setState({
            term: e.target.value
        })
    };

    render() {
        return(
            <div className='search-bar ui '>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <input
                            type='text'
                            placeholder='search categories'
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}





export default SearchBar