import { useShoppingCart } from 'use-shopping-cart';
import type { ButtonBaseType, ProductType } from "types";
import styles from './Buttons.module.scss';

interface RemoveProductButton extends ButtonBaseType {
  productSku: ProductType['sku']
}

export const RemoveProductButton: React.FC<RemoveProductButton> = ({
	productSku,
	className,
	...rest
}) => {
	const { removeItem } = useShoppingCart();
	return (
		<button
			onClick={() => removeItem(productSku)}
			className={[styles.remove, className].join(' ')}
			{...rest}
		>
			Remove
		</button>
	);
}

RemoveProductButton.defaultProps = {
	className: ''
}