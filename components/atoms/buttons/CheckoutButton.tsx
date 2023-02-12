import React from 'react';
import { ButtonBaseType, ProductType } from '@/types';
import styles from './Buttons.module.scss';

interface CheckoutButtonProps extends ButtonBaseType {
  product: ProductType;
  url?: string;
  onCheckout: (url: string, product: ProductType) => void;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
	product,
	url,
	onCheckout,
	className,
	...rest
}) => {
	const setProductAndQuantity = (url: string, product: ProductType) => {
		!product.quantity ? product.quantity = 1 : product.quantity = product.quantity;
		return onCheckout(url, product);
	}
	return(
		<button
      className={[styles.checkout, className].join(' ')}
      onClick={() => setProductAndQuantity(url, product)}
      role="link"
			{...rest}
    >
			Checkout
		</button>
	);
}

CheckoutButton.defaultProps = {
  url: "/checkout_sessions/product",
	className: ''
}