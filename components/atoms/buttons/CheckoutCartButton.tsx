import { useShoppingCart, CartDetails } from 'use-shopping-cart';
import type { ButtonBaseType } from 'types/Base';
import styles from './Buttons.module.scss';

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
      className={[styles.checkout, className].join(' ')}
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