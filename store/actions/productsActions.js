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

export const getProduct = (dispatch, id) => {
    dispatch({
        type: types.GET_PRODUCTS,
        payload: id,
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