import { ProductType } from '@/types';
import { useShoppingCart } from 'use-shopping-cart'
import styles from './ProductQuantity.module.scss';

interface ProductsQuantity {
	currentQuantity: ProductType['quantity'];
	sku: ProductType['sku'];
}

export const ProductQuantity: React.FC<ProductsQuantity> = ({ currentQuantity, sku }) => {
	const { incrementItem, decrementItem } = useShoppingCart();

	return (
		<div className="d-flex justify-content-center">
			<div className="d-flex">
				<button onClick={() => decrementItem(sku)}>
					<i className="bi bi-dash" />
				</button>
				<div className={styles.quantity}>
					<span>{currentQuantity}</span>
				</div>
				<button onClick={() => incrementItem(sku)}>
					<i className="bi bi-plus" />
				</button>
			</div>
		</div>
	);
}