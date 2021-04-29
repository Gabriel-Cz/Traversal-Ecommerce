import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addProductToCart } from '../store/actions/cartActions';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

export const AddToCartButton = ({id, quantity, price}) => {
    const dispatch = useDispatch();
    return(
        <>
        <button onClick={() => dispatch(addProductToCart(id, quantity, price))} className={styles.addToCartButton}>
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