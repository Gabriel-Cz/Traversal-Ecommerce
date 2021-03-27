import * as types from '../types'

const initialState = {
    products: null,
    product: null,
}

const setProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

const setProduct = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                product: action.product
            }
        default:
            return state;
    }
}

export default setProducts;

