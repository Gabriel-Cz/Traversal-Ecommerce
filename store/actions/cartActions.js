import axios from 'axios';
import * as types from '../types';

export const addProduct = (id) => async dispatch => {
    let response = await axios.get('http://localhost:3000/api/products');
    dispatch({
        type: types.ADD_PRODUCT_TO_CART,
        payload: response.data.find(product => product.id === id ? product : false)
    })
}

export const increaseQuantity = () => (dispatch, id) => {
    dispatch({
        type: types.INCREASE_QUANTITY,
        id,
    })
}