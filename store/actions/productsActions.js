import axios from 'axios'
import productsData from '../../public/productsData.json'
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
    dispatch({
        type: types.GET_PRODUCT,
        payload: response.data.find(product => product.id === id ? product : false)
    });
}

export const filterProducts = (type, filter) => {
    const data = axios.get('http://localhost:3000/api/products')
        .then(res => { 
            res.data.filter(product => product[type] === filter);
        });
    return {
        type: types.FILTER_PRODUCTS,
        payload: data,
    }
} 