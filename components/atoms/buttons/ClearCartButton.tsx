import { useShoppingCart } from 'use-shopping-cart';
import type { ButtonBaseType } from '@/types';
import styles from './Buttons.module.scss';

interface ClearCartButtonProps extends ButtonBaseType {};

export const ClearCartButton: React.FC<ClearCartButtonProps> = ({ className, ...rest }) => {
	const { clearCart } = useShoppingCart();
	return (
		<button
			onClick={() => clearCart()}
			className={[styles.clear, className].join(' ')}
			{...rest}
		>
			Clear Cart
		</button>
	);
}

ClearCartButton.defaultProps = {
	className: ''
}