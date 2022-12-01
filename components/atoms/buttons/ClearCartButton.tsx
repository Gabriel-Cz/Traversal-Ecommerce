import { ButtonBaseProps } from '@/types';
import { useShoppingCart } from 'use-shopping-cart';
import styles from './Button.module.scss';

export const ClearCartButton: React.FC<ButtonBaseProps> = ({ className, ...rest }) => {
	const { clearCart } = useShoppingCart();
	return (
		<button
			onClick={() => clearCart()}
			className={[styles.clearCartButton, className].join(' ')}
			{...rest}
		>
			Clear Cart
		</button>
	);
}

ClearCartButton.defaultProps = {
	className: ''
}