import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import styles from './ProductCard.module.scss'
import Rating from 'react-rating'
import { ProductCardOverlay } from '../ProductCardOverlay/ProductCardOverlay'
import { ProductProps } from '@/types'

interface ProductCardProps {
	product: ProductProps
	isMobile?: boolean
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isMobile }) => {
	return (
		<Card className={styles.card}>
			<div className={styles.topImage}>
				<Image className={styles.cardImage} fluid src={product.image} />
				<Card.Title className={styles.cardTitle}>{product.name}</Card.Title>
				<div className={styles.divOverflowCartWrapper}>
					<ProductCardOverlay product={product} />
				</div>
			</div>
			<Card.Body className={styles.cardBody}>
				<div className={styles.cardPriceWrapper}>
					<div className={styles.cardPrice}>{product.price}</div>
				</div>
				<div>
					<Card.Text className={styles.cardDescription}>{product.description}</Card.Text>
					<ProductCardOverlay product={product} />
					<div className={styles.productRating}>
						<Rating
							readonly
							emptySymbol={<img src="../EmptyStar.png" className="icon" />}
							fullSymbol={<img src="../FullStar.png" className="icon" />}
							initialRating={product.rating}
						/>
					</div>
				</div>
			</Card.Body>
		</Card>
	)
}

ProductCard.defaultProps = {
	isMobile: false
}