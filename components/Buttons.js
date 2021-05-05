import React from 'react';
import { useShoppingCart } from 'use-shopping-cart'
import { loadStripe } from "@stripe/stripe-js";
import axiosModule from '../utils/axiosModule';
import Link from 'next/link';
import styles from '../styles/Buttons.module.scss';
/* import ProductAlert from './ProductAlert'; */

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")
const reqConfig = {
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
}

//Checkout Buttons

const handleCheckout = async ({cartDetails}) => {
    const stripe = await stripePromise;
    const response = await axiosModule.post("/cart", cartDetails, reqConfig);
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
    const { cartCount } = useShoppingCart()
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
    const { addItem, setItemQuantity, incrementItem } = useShoppingCart()
    product.quantity = quantity;
    const setProductWithQuantity = (productToAdd, quantityToAdd) => {
        addItem(productToAdd);
        setTimeout(() => {
            const productSku = productToAdd.sku;
            if (productToAdd.quantity === 8) {
                setItemQuantity(productSku, quantityToAdd);
            } else {
                incrementItem(productSku, quantityToAdd);
            }
        }, 20)
    }
    console.log(quantity)
    return(
        <>
        <button onClick={() => setProductWithQuantity(product, quantity)} className={styles.addToCartButton}>
            Add To Cart
        </button>
        </>
    );
}

export const RemoveFromCartButton = ({sku}) => {
    const { removeItem } = useShoppingCart();
    return(
        <>
        <button onClick={() => removeItem(sku)} className={styles.removeProductButton}>
            Remove
        </button>
        </>
    );
}

export const CheckoutCartButton = () => {
    const { cartDetails } = useShoppingCart();
    return(
        <button onClick={() => handleCheckout(cartDetails)} role="link" className={styles.checkoutCartButton}>
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