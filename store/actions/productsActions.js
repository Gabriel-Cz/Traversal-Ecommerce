import axios from 'axios'
import * as types from '../types'

export const getProducts = () => async dispatch => {
    const resData = await axios.get('api/products')
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCTS,
        payload: resData
    })
}

 export const getProduct = (product) => ({
    type: 'GET_PRODUCT',
    product: async () => {
        await fetch(storeData).then(response => {
            return response.data
        })
    },
})