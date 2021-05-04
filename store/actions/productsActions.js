import axios from 'axios'
import * as types from '../types'

const axiosConfig = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'} 
}

export const getProducts = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products', axiosConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCTS,
        payload: response
    });
}

export const getProduct = (id) => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products', axiosConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCT,
        payload: response.find(product => product.id === id ? product : false)
    });
}

export const filterProducts = (type, filter) => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products', axiosConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e)); 
    dispatch({
        type: types.FILTER_PRODUCTS,
        payload: response.filter(product => product[type] === filter),
    })
} 