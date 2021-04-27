import * as types from '../types'

const initialState = {
    products: null,
    product: null,
    filteredProducts: null
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
                server: {
                    ...state.server,
                    product: action.payload
                }
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

export default setProducts;

