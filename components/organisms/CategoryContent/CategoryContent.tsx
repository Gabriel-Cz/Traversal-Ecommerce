import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ProductCard } from '@/components/molecules'
import { Quote } from '@/components/atoms';
import type { ProductType } from '@/types';
import styles from './CategoryContent.module.scss'

interface CategoryContentProps {
	filteredProducts: ProductType[];
	categoryName: string;
}

export const CategoryContent: React.FC<CategoryContentProps> = ({
	filteredProducts,
	categoryName
}) => {
	return (
		<Container fluid className={styles.container}>
			<span className={styles.categoryName}>
				{categoryName}
			</span>
			<div className={styles.firstDiv}>
				<div>
					<Row className="justify-content-center align-items-center">
						{filteredProducts[0] && filteredProducts.map(product => (
							<Col
								key={product.id}
								className="my-4 mx-xl-2"
								xs={11}
								sm={{ span: 12 }}
								md={{ span: 5 }}
								lg={{ span: 4 }}
								xl={{ span: 3 }}
							>
								<ProductCard product={{ ...product }} />
							</Col>
						))}
					</Row>
					<Row className="py-4 mt-4 justify-content-center">
						<Col md={5}>
							<Quote />
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
}