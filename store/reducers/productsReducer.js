import * as types from '../types'

const initialState = {
    products: [],
    product: {},
    filteredProducts: [],
}

const setProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case types.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
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

