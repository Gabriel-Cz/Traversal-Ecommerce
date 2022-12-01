import { ProductProps } from "@/types";
import { ButtonBaseProps } from "types/Base";
import { useShoppingCart } from 'use-shopping-cart';
import styles from './Button.module.scss';

interface RemoveProductButton extends ButtonBaseProps {
  productSku: ProductProps['sku']
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
			className={[styles.removeProductButton, className].join(' ')}
			{...rest}
		>
			Remove
		</button>
	);
}

RemoveProductButton.defaultProps = {
	className: ''
}