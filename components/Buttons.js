import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../store/actions/cartActions';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

export const AddToCartButton = ({id, quantity}) => {
    const dispatch = useDispatch();
    return(
        <>
        <button onClick={() => dispatch(addProduct(id, quantity))} className={styles.addToCartButton}>
            Add To Cart
        </button>
        </>
    );
}

export const CheckoutButton = ({id}) => {
    const dispatch = useDispatch();
    return(
        <button className={styles.checkoutButton}>
            Checkout
        </button>
    );
}