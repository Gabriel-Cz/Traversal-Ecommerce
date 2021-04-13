import * as types from '../types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    server: null,
    client: null,
    productsInCart: [],
    productToAdd: {}, 
}

const ShoppingCart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        case types.INCREASE_QUANTITY:
            return {
                ...state,
                productsInCart: state.productsInCart.map(product => product.id === action.id 
                    ? {...product, quantity: product.quantity + 1} 
                    : product),
            }
        default:
            return state;
    }
}

export default ShoppingCart;
