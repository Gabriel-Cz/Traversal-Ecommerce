import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useShoppingCart } from 'use-shopping-cart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import getStripe from '@/utils/get-stripe'
import axiosInstance from '@/utils/axios-instance'
import { EmptyCartMessage, ProductsTable } from '@/components/molecules'
import { CheckoutCartButton, ClearCartButton, Quote } from '@/components/atoms'
import { navigationLinks } from '@/public/data-samples';
import { CartFooter } from '@/components/organisms'
import { ProductType } from 'types/Product'
import styles from './Cart.module.scss'

export const Cart: NextPage = () => {
	const [emptyCartMessage, setEmptyCartMessage] = useState<boolean>(true);
	const { cartDetails } = useShoppingCart();

	const products = Object.values(cartDetails) as ProductType[];

	const handleCheckout = async (url: string, productDetails: ProductType) => {
		try {
			const stripe = await getStripe();
			const response = await axiosInstance.post(url, productDetails);
			const session = await response.data;
			stripe.redirectToCheckout({
				sessionId: session.id
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	useEffect(() => {
		products[0] === undefined ? setEmptyCartMessage(true) : setEmptyCartMessage(false);
	}, [products]);

	return emptyCartMessage ? (
		<>
			<EmptyCartMessage navigationLinks={navigationLinks} />
			<div className="mt-4 py-2 d-flex justify-content-center align-items-center">
				<Quote></Quote>
			</div>
		</>
	) : (
		<>
			<Container className={styles.cartContainer}>
				<div>
					<Row className="justify-content-center">
						<Col xs={12}>
							<div className={styles.currentCartText}>
								<h3 >Current Cart</h3>
							</div>
						</Col>
						<Col xs={12}>
							<ProductsTable products={products} />
						</Col>
						<Col xs={12}>
							<CartFooter>
								<ClearCartButton />
								<CheckoutCartButton onCheckout={handleCheckout} />
							</CartFooter>
						</Col>
					</Row>
				</div>
			</Container>
			<div className="mt-4 py-2 d-flex justify-content-center align-items-center">
				<Quote />
			</div>
		</>
	);
}