import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../store/actions/cartActions';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

export const AddToCartButton = ({id}) => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.productsReducer.productsInCart);
    return(
        <>
        <button onClick={() => dispatch(addProduct(id))} className={styles.addToCartButton}>
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