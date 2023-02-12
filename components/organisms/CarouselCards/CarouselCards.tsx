import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductCard } from '@/components/molecules';
import { ProductType } from '@/types'

interface CarouselCardsProps {
	carouselItems: ProductType[]
}

export const CarouselCards: React.FC<CarouselCardsProps> = ({ carouselItems }) => {
	return (
		<Carousel fade={true}>
			{carouselItems.map(product => (
				<Carousel.Item key={product.title}>
					<Row className="d-flex justify-content-center">
						<Col
							xs={11}
							sm={12}
							md={12}
							lg={10}
							xl={10}
							style={{ height: "100%" }}
						>
							<ProductCard product={{ ...product }} />
						</Col>
					</Row>
				</Carousel.Item>
			))}
		</Carousel>
	)
}