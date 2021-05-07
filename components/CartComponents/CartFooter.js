import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { ClearCartButton, CheckoutCartButton } from '../Buttons'

export default function CartFooter() {
    const { totalPrice } = useShoppingCart();
    return(
        <>
          <div className="my-2 py-2 d-flex justify-content-center align-items-center">
              <div className="text-center my-3">
                  {totalPrice}
              </div>
              <div className="mx-2">
                  <ClearCartButton></ClearCartButton>
              </div>
              <div className="mx-2">
                  <CheckoutCartButton></CheckoutCartButton>
              </div>
          </div>
        </>
    );
}