import React from 'react';
import { ButtonBaseType } from 'types/Base';
import { useShoppingCart, CartDetails } from 'use-shopping-cart';
import styles from './Button.module.scss';

interface CheckoutcartButtonProps extends ButtonBaseType {
  url?: string;
  onCheckout: (url: string, cartDetails: CartDetails) => void;
}

export const CheckoutCartButton: React.FC<CheckoutcartButtonProps> = ({
  onCheckout,
  url,
  className,
  ...rest
}) => {
	const { cartDetails } = useShoppingCart();
	return(
		<button
      onClick={() => onCheckout(url, cartDetails)}
      role="link"
      className={[styles.checkoutCartButton, className].join(' ')}
      {...rest}
    >
			Checkout Cart
		</button>
	)
}

CheckoutCartButton.defaultProps = {
  url: "/checkout_sessions/cart",
  className: ''
}