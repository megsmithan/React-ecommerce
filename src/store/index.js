import { createStore } from 'redux';


function reducer(state, action) {
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

const store = createStore(reducer, {
    products: [],
    filter: ''
});

export default store