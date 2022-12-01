import React from 'react';
import { ButtonBaseProps, ProductProps } from '@/types';
import styles from './Buttons.module.scss';

interface CheckoutButtonProps extends ButtonBaseProps {
  product: ProductProps;
  url?: string;
  onCheckout: (url: string, product: ProductProps) => void;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
	product,
	url,
	onCheckout,
	className,
	...rest
}) => {
	const setProductAndQuantity = (url: string, product: ProductProps) => {
		!product.quantity ? product.quantity = 1 : product.quantity = product.quantity;
		return onCheckout(url, product);
	}
	return(
		<button
      className={[styles.checkoutButton, className].join(' ')}
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