import * as types from '../types';
import { HYDRATE } from "next-redux-wrapper";
import { loadCartState, saveCartState } from '../../cartStore';
import { createStore } from 'redux';
import products from '../../pages/api/products';

const initialState = {
    products: []
}

const ShoppingCart = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE: 
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.cartReducer.server,
                },
                client: {
                    ...state.client,
                    cartState: {...loadCartState()}
                }
            }
        case types.ADD_PRODUCT_TO_CART:
            return [
                ...state,
                ...state.products.slice(0, action.index),
                action.payload,
                ...state.products.slice(0, action.index)    
            ]

        /* case types.INCREASE_QUANTITY:
            return {
                ...state,
                productsInCart: state.productsInCart.map(product => product.id === action.id 
                    ? {...product, quantity: product.quantity + 1} 
                    : product),
            } */
        default:
            return state;
    }
}

export default ShoppingCart;
