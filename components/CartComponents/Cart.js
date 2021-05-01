import React from 'react'
import { useSelector } from 'react-redux';

export default function Cart() {
    const {products} = useSelector(state => state.cartReducer);
    const totalProducts = products.lenght;
    return(
        <>
          <button>
            <i class="bi bi-cart2"></i>
            {
                totalProducts === null 
                ?
                <small>0</small>
                :
                <small>{totalProducts}</small>
            }
          </button>
        </>
    );
}