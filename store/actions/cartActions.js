import axios from 'axios';
import * as types from '../types';

export const getCartState = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/cart');
    console.log(response.data)
    dispatch({
        type: types.GET_CART_STATE,
    })
}

export const setNewCartState = () => async (dispatch, getState) => {
    let response = await axios.post('http://localhost:3000/api/cart'); 
    const { cartState } = getState().cartReducer.client;
    console.log(response.data)
    dispatch({
        type: types.SET_NEW_CART_STATE,
        payload: cartState,
    })
}

export const addProductToCart = (id, quantity, price) => async (dispatch) => {
    let product = {id: id, quantity: quantity, price: price};
    dispatch({
        type: types.ADD_PRODUCT_TO_CART,
        payload: product
    })
}

