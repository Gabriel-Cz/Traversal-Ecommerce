import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useShoppingCart } from 'use-shopping-cart'
import { addProductToCart } from '../store/actions/cartActions';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

//Checkout Buttons

const handleCheckout = async (products) => {
    const stripe = await stripePromise;
    const response = await axios.post("/api/cart", {products: products});
    const session = await response.data;
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    })
    if (result.error) {
        console.log(result.error.message)
    }
}

export const CheckoutButton = () => {
    return(
        <button className={styles.checkoutButton} role="link" onClick={handleCheckout}>
            Checkout
        </button>
    );
}

//Cart Buttons

export function CartButton() {
    const { redirectToCheckout, cartCount } = useShoppingCart()
    return(
        <>
          <Link href="/cart" passHref>
            <a>
            <button className={styles.cartButton}>
                <span class="d-flex">
                  <h4>
                    <i class="bi bi-cart2"></i>
                   </h4>
                  <h6>{cartCount}</h6>
                </span>
              </button>
            </a>
          </Link>
        </>
    );
}

export const AddToCartButton = ({product, quantity}) => {
    const { addItem } = useShoppingCart()
    product.quantity = quantity;
    return(
        <>
        <button onClick={() => addItem(product, quantity)} className={styles.addToCartButton}>
            Add To Cart
        </button>
        </>
    );
}


export const CheckoutCartButton = () => {
    const { cartDetails } = useShoppingCart();
    return(
        <button onClick={handleCheckout(cartDetails)} role="link" className={styles.checkoutCartButton}>
            Checkout Cart
        </button>
    )
}

export const ClearCartButton = () => {
    const { clearCart } = useShoppingCart();
    return(
        <button onClick={clearCart} className={styles.clearCartButton}>
            Clear Cart
        </button>
    );
}