import { ButtonBaseProps, ProductProps } from '@/types';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import styles from './Button.module.scss';

interface AddToCartButtonProps extends ButtonBaseProps {
  product: ProductProps
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
	product,
	className,
	...rest
}) => {
	const [buttonText, setButtonText] = useState(true);
	const { addItem } = useShoppingCart()

	const addItemAndShowToast = (item: ProductProps) => {
		addItem(item);
		setButtonText(false);
		setTimeout(() => {
			setButtonText(true);
		}, 700);
	}
	return (
		<button
			className={[styles.addToCartButton, className].join(' ')}
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