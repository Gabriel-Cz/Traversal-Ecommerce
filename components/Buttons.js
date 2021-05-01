import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useShoppingCart } from 'use-shopping-cart'
import { addProductToCart } from '../store/actions/cartActions';
import { loadStripe } from "@stripe/stripe-js";
import styles from '../styles/Buttons.module.scss';
import axios from 'axios';
/* import ProductAlert from './ProductAlert'; */

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

const handleCheckout = async (e) => {
    const stripe = await stripePromise;
    const { cartDetails } = useShoppingCart();
    const response = await axios.post('http://localhost:3000/api/checkout_sessions/cart', cartDetails);
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    })
    if (result.error) {
        console.log(result.error)
    }
}

export const AddToCartButton = ({id, quantity, price}) => {
    const { addItem } = useShoppingCart();
    const productData = {
        id: id,
        quantity: quantity,
        price: price
    }
    return(
        <>
        <button onClick={() => addItem(productData)} className={styles.addToCartButton}>
            Add To Cart
        </button>
        </>
    );
}

export function CartButton() {
    const { redirectToCheckout, cartCount } = useShoppingCart()
    return(
        <>
          <button className={styles.cartButton} onClick={redirectToCheckout()}>
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
        <button className={styles.checkoutButton} onClick={handleCheckout}>
            Checkout
        </button>
    );
}