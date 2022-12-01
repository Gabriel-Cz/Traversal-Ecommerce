import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ProductCard } from '../../molecules'
import { Quote } from '@/components/atoms';
import { ProductType } from '@/types';
import styles from '../../styles/Categories.module.scss'

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
						{filteredProducts.map(product => (
							<Col
								key={product.id}
								className="my-4 mx-xl-2"
								xs={11}
								sm={6}
								md={4}
								xl={{ span: 2, offset: 2 }}
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