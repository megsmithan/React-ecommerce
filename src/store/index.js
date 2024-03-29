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
        case 'ADD_PRODUCT_CART':
            return {
                ...state,
                cart: state.cart.concat(action.product),
            };
        case 'DELETE_PRODUCT_CART':
            return {
                ...state,
                cart: state.cart.filter(item => {
                    if (item.id !== action.id) {
                        return item
                    }
                })
            };
        default:
            return state
    }
}

const store = createStore(reducer, {
    products: [],
    filter: '',
    cart: []
});

export default store