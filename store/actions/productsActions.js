import axios from 'axios'
import * as types from '../types'


/*
const reqConfig = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit,
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
}

let fetchPostJSON = async (url) => {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      } catch (err) {
        throw new Error(err.message);
      }
}*/

export const getProducts = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products', reqConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCTS,
        payload: response
    });
}

export const getProduct = (id) => async (dispatch) => {
    let response = await axios.get('http://localhost:3000/api/products', reqConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e));
    dispatch({
        type: types.GET_PRODUCT,
        payload: response.find(product => product.id === id ? product : false)
    });
}

export const filterProducts = (type, filter) => async (dispatch) => {
    /* let response = await axios.get('http://localhost:3000/api/products', reqConfig)
                  .then(res => res.data)
                  .catch(e => console.log(e)); */
    let response = [
        {
            title: "asd"
        }
    ]
    dispatch({
        type: types.FILTER_PRODUCTS,
        payload: response.filter(product => product[type] === filter),
    });
} 