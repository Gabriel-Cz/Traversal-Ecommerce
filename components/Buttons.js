import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useShoppingCart } from 'use-shopping-cart'
import { addProductToCart } from '../store/actions/cartActions';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

const handleCheckout = async (event) => {
    const stripe = await stripePromise;
    const response = await axios.post("/api/cart");
    const session = await response.data;
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    })
    if (result.error) {
        console.log(result.error.message)
    }
}

export const AddToCartButton = ({product, quantity}) => {
    /* const { addItem } = useShoppingCart(); */
    const dispatch = useDispatch();
    product.quantity = quantity;
    return(
        <>
        <button onClick={() => dispatch(addProductToCart(product))} className={styles.addToCartButton}>
            Add To Cart
        </button>
        </>
    );
}

export function CartButton() {
    const { redirectToCheckout, cartCount } = useShoppingCart()
    return(
        <>
          <button className={styles.cartButton}>
          <span class="d-flex">
            <h4>
                <i class="bi bi-cart2"></i>
                <i>{cartCount}</i>
            </h4>
          </span>
          </button>
        </>
    );
}

export const CheckoutButton = () => {
    return(
        <button className={styles.checkoutButton} role="link" onClick={handleCheckout}>
            Checkout
        </button>
    );
}