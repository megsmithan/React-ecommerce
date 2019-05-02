import { createStore } from 'redux';


function reducer(state = {
    products: [],
    filter: ''
}, action) {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state
    }
}

const store = createStore(reducer);

export default store