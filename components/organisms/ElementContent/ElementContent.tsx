import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import type { ProductType } from '@/types';
import { Quote } from '@/components/atoms';
import { ProductCard } from '@/components/molecules';
import styles from './ElementContent.module.scss'


interface ElementContentProps {
	filteredProducts: ProductType[];
	elementName: string
}

export const ElementContent: React.FC<ElementContentProps> = ({ filteredProducts, elementName }) => {
	return (
		<div className={styles.containerWrapper}>
			<div className={styles.backgroundDiv} />
			<Container fluid className={styles.container}>
				<span className={styles[`elementName-${elementName}`]}>
					{elementName}
				</span>
				<div className={styles[`firstDiv-${elementName}`]}>
					<div className={styles.secondDiv}>
						<Row className="justify-content-center align-items-center">
							{filteredProducts.map(product => (
								<Col
									className="my-4 mx-xl-2"
									key={product.id}
									xs={11}
									sm={6}
									md={6}
									xl={{ span: 2, offset: 2 }}
								>
									<ProductCard product={product} />
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
		</div>
	);
}