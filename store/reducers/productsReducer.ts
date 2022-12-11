import * as types from '../types'
import { AnyAction } from 'redux';
import { RootState } from 'store/typing';

const initialState = {
  product: {},
  products: {},
  filteredProducts: {},
  productsByElement: {}
}

const productsReducer = (state: RootState = initialState, action: AnyAction) => {
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
        server: {
          ...state.server,
          filteredProducts: action.payload
        }
      }
    case types.FILTER_ELEMENTS:
      return {
        ...state,
        server: {
          ...state.server,
          productsByElement: action.payload
        }
      }
    default:
      return state;
  }
}

export default productsReducer;

