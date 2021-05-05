import axios from 'axios';
import axiosModule from '../../utils/axiosModule';
import * as types from '../types'

axios.defaults.baseURL = 'https://traversal.vercel.app/api';

const reqConfig = {
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
    }
}

export const getProducts = () => async (dispatch) => {
    let response = await axios.get('/products', reqConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCTS,
        payload: response
    });
}

export const getProduct = (id) => async (dispatch) => {
    let response = await axios.get('/products', reqConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCT,
        payload: response.find(product => product.id === id ? product : false)
    });
}

export const filterProducts = (type, filter) => async (dispatch) => {
    let response = await axios.get('/products', reqConfig)
                   .then(res => res.data)
                   .catch(e => console.log(e));
    dispatch({
        type: types.FILTER_PRODUCTS,
        payload: response.filter(product => product[type] === filter),
    });
} 