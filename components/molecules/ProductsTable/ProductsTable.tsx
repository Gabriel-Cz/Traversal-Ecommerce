import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import { CheckoutButton, ProductQuantity, RemoveProductButton } from '@/components/atoms';
import type { ProductType } from '@/types';
import getStripe from '@/utils/get-stripe';
import axiosInstance from '@/utils/axios-instance';
import styles from './ProductsTable.module.scss';

interface ProductsTableProps {
	products: ProductType[];
}

export const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
	const [headers, setHeaders] = useState<string[]>([
		'Product',
		'Quantity',
		'Total Price',
		'Checkout Single Product'
	]);

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

	return (
		<Table className={styles.cartTable} responsive bordered hover>
			<thead>
				<tr>
					{headers.map(header => (
						<th>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{products.map(product => (
					<tr>
						<td className="w-25">
							<Link href={`/products/${product.id}`} passHref>
								<a>
									<div className={styles.avatarGrid}>
										<div className={styles.cols2}>
											<Image rounded fluid src={product.image}></Image>
										</div>
										<div className={styles.cols4}>
											<span className={styles.productName}>{product.name}</span>
										</div>
									</div>
								</a>
							</Link>
						</td>
						<td className="pt-4">
							<ProductQuantity sku={product.sku} currentQuantity={product.quantity} />
						</td>
						<td className="pt-4">
							{`$${product.price * product.quantity}.00`}
						</td>
						<td className="pt-4">
							<div className="d-flex justify-content-center">
								<div className="mx-1" sm={3}>
									<CheckoutButton product={product} onCheckout={handleCheckout} />
								</div>
								<div className="mx-1" sm={3}>
									<RemoveProductButton productSku={product.sku} />
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
