import data from '../../public/productsData.json'
import * as types from '../types'

export const getProducts = () => async dispatch => {
    dispatch({
        type: types.GET_PRODUCTS,
        payload: [
            {
                title: "Product One",
                description: "ProductOneOfTen"
            },
            {
                title: "Product One",
                description: "ProductOneOfTen"
            }
        ]
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