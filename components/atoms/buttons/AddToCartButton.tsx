import { ButtonBaseType, ProductType } from '@/types';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import styles from './Buttons.module.scss';

interface AddToCartButtonProps extends ButtonBaseType {
  product: ProductType
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
	product,
	className,
	...rest
}) => {
	const [buttonText, setButtonText] = useState(true);
	const { addItem } = useShoppingCart()

	const addItemAndShowToast = (item: ProductType) => {
		addItem(item);
		setButtonText(false);
		setTimeout(() => {
			setButtonText(true);
		}, 700);
	}
	return (
		<button
			className={[styles.add, className].join(' ')}
			type="button"
			onClick={() => addItemAndShowToast(product)}
			{...rest}
		>
			{buttonText ? (
        'Add To Cart'
        )
        : (
        <i className="bi bi-check"></i>
      )}
		</button>
	);
}