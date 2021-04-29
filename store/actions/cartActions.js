import axios from 'axios';
import * as types from '../types';

export const addProduct = (id, quantity) => async dispatch => {
    let response = await axios.get('http://localhost:3000/api/products');
    dispatch({
        type: types.ADD_PRODUCT_TO_CART,
        payload: {
            id: id,
            quantity: quantity
        }
    })
}

export const increaseQuantity = () => (dispatch, id) => {
    dispatch({
        type: types.INCREASE_QUANTITY,
        id,
    })
}