import * as types from '../types';

export const addItems = (items) => {
    return {
        type: types.ADD_TO_CART,
        payload: items,
    }
}

export const increaseQuantity = () => (dispatch, id) => {
    dispatch({
        type: types.INCREASE_QUANTITY,
        id,
    })
}