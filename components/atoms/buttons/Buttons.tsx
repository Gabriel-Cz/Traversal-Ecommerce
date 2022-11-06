import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { ButtonType } from '../../../types';
import styles from './Buttons.module.scss';

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

//Checkout Buttons

// const handleCheckout = async (url, cartDetails) => {
// 	const stripe = await stripePromise;
// 	const response = await axiosModule.post(url, cartDetails);
// 	const session = await response.data;
// 	const result = await stripe.redirectToCheckout({
// 		sessionId: session.id
// 	})
// 	if (result.error) {
// 		console.log(result.error.message)
// 	}
// } 

// export const CheckoutButton = ({product}) => {
// 	const url = "/checkout_sessions/product"
// 	const setProductAndQuantity = async (url ,product) => {
// 		product.quantity === undefined ? product.quantity = 1 : product.quantity = product.quantity;
// 		await handleCheckout(url, product);
// 	}
// 	return(
// 		<button className={styles.checkoutButton} onClick={() => setProductAndQuantity(url, product)} role="link">
// 			Checkout
// 		</button>
// 	);
// }

// export const CheckoutCartButton = () => {
// 	const { cartDetails } = useShoppingCart();
// 	const url = "/checkout_sessions/cart"
// 	return(
// 		<button onClick={() => handleCheckout(url, cartDetails)} role="link" className={styles.checkoutCartButton}>
// 			Checkout Cart
// 		</button>
// 	)
// }

// //Cart Buttons

// export function CartButton() {
// 	const { cartCount } = useShoppingCart()
// 	return(
// 		<>
// 		  <Link href="/cart" passHref>
// 			<a>
// 			<button className={styles.cartButton}>
// 				<span class="d-flex">
// 				  <h4>
// 					<i class="bi bi-cart2"></i>
// 				   </h4>
// 				  <h6>{cartCount}</h6>
// 				</span>
// 			  </button>
// 			</a>
// 		  </Link>
// 		</>
// 	);
// }

// export const AddToCartButton = ({product}) => {
// 	const [buttonText, setButtonText] = useState(true);
// 	const { addItem } = useShoppingCart()
// 	const addItemAndShowToast = (product) => {
// 		addItem(product);
// 		setButtonText(false);
// 		setTimeout(() => {
// 			setButtonText(true);
// 		}, 700);
// 	}
// 	return(
// 		<>
// 		<button onClick={() => addItemAndShowToast(product)} className={styles.addToCartButton}>
// 			{buttonText === true 
// 			?
// 			  `Add To Cart`
// 			: 
// 			  <i className="bi bi-check"></i>  
// 			}
// 		</button>
// 		</>
// 	);
// }

// export const RemoveFromCartButton = ({product}) => {
// 	const { removeItem } = useShoppingCart();
// 	return(
// 		<>
// 		<button onClick={() => removeItem(product.sku)} className={styles.removeProductButton}>
// 			Remove
// 		</button>
// 		</>
// 	);
// }

// export const ClearCartButton = () => {
// 	const { clearCart } = useShoppingCart();
// 	return(
// 		<button onClick={clearCart} className={styles.clearCartButton}>
// 			Clear Cart
// 		</button>
// 	);
// }

export interface ButtonProps {
	type?: ButtonType
	onClick: React.MouseEventHandler
	children: React.ReactNode
}

const defaultProps = {
	type: 'default' as ButtonType
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type }) => {
	return (
		<button onClick={onClick} className={styles[type]}>
			{children && children}
		</button>
	)
}

Button.defaultProps = defaultProps;
export { Button };