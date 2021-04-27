import axios from 'axios'
import * as types from '../types'

export const getProducts = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products');
    dispatch({
        type: types.GET_PRODUCTS,
        payload: response.data
    });
}

export const getProduct = (id) => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products');
    dispatch(
        getProducts(),
        {
        type: types.GET_PRODUCT,
        payload: response.data.find(product => product.id === id ? product : false)
    });
}

export const filterProducts = (type, filter) => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/api/products')
    dispatch({
        type: types.FILTER_PRODUCTS,
        payload: response.data.filter(product => product[type] === filter),
    })
} 