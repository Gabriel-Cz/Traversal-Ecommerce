import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ProductCard } from '@/components/molecules'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TrendingProductsMobile({ carouselItems }) {
	return (
		<Carousel fade={true}>
			{carouselItems.map(product => (
				<Carousel.Item key={product.id}>
					<Row className="d-flex justify-content-center">
						<Col xs={12} style={{ height: "100%" }}>
							<ProductCard product={product} />
						</Col>
					</Row>
				</Carousel.Item>
			))}
		</Carousel>
	)
}