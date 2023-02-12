import * as types from '../types'
import { AnyAction } from 'redux';
import { RootState } from 'store/typing';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  product: {},
  products: {},
  filteredProducts: {},
  productsByElement: {},
  server: {
    product: {},
    products: {},
    filteredProducts: {},
    productsByElement: {},
  }
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.productsReducer.server
        },
      }
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

