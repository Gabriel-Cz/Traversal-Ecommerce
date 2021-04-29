import * as types from '../types';
import { HYDRATE } from "next-redux-wrapper";
import localStorage from './localStorage';

const initialState = {
    client: {
        productsInCart: localStorage.getItem('productsInCart') ? [...localStorage.productsInCart] : [],
    }
}

const ShoppingCart = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE: 
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.cartReducer.server
                }
            }
        case types.ADD_PRODUCT_TO_CART:
            return {
                ...localStorage.productsInCart.push(action.payload),
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
