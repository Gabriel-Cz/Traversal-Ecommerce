import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import styles from './ProductCard.module.scss'
import Rating from 'react-rating'
import { ProductCardOverlay } from '@/components/molecules/ProductCardOverlay'
import { ProductType } from '@/types'
import useIsMobile from '@/utils/useIsMobile'

interface ProductCardProps {
	product: ProductType
	isMobile?: boolean
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const isMobileView = useIsMobile();
	return (
		<Card className={styles.card}>
			<div className={styles.topImage}>
				<Image className={styles.cardImage} fluid src={product.image} />
				<Card.Title className={styles.cardTitle}>
					{product.name}
				</Card.Title>
				<div className={styles.divOverflowCartWrapper}>
					{!isMobileView && (
						<ProductCardOverlay product={product} isMobile={isMobileView} />
					)}
				</div>
			</div>
			<Card.Body className={styles.cardBody}>
				<div className={styles.cardPriceWrapper}>
					<div className={styles.cardPrice}>
						{product.price}
					</div>
				</div>
				<div>
					<Card.Text className={styles.cardDescription}>{product.description}</Card.Text>
					{isMobileView && (
						<ProductCardOverlay product={product} isMobile={isMobileView} />
					)}
					<div className={styles.productRating}>
						{/* @ts-ignore */}
						<Rating
							readonly
							emptySymbol={<img src="/assets/EmptyStar.png" className="icon" />}
							fullSymbol={<img src="/assets/FullStar.png" className="icon" />}
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