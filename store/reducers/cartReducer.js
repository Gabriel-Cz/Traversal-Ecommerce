import * as types from '../types';

const initialState = {
    productsInCart: [],
    productsToAdd: [], 
}

const ShoppingCart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                productsInCart: state.productsInCart.concat(action.payload),
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
