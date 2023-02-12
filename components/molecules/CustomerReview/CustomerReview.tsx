import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Rating from 'react-rating'
import { CustomerReviewType } from 'types/Customer'
import { VerifiedIcon } from '@/public/assets/icons';
import styles from './CustomerReview.module.scss' 

interface CustomerReviewProps extends CustomerReviewType {}

export const CustomerReview: React.FC<CustomerReviewProps> = ({
	name,
	image,
	review,
}) => {
	return (
		<Card bsPrefix={styles.card}>
			<Image src={image} className={styles.customCard} roundedCircle />
			<Card.Body bsPrefix={styles.cardBody} className="text-center p-3">
				<Card.Title bsPrefix={styles.cardTitleName} className="mt-3">
					{name}
				</Card.Title>
				<Card.Text bsPrefix={styles.cardTextReview} className="mt-4 px-4">
					{review.description}
				</Card.Text>
				{/* @ts-ignore */}
				<Rating
					initialRating={review.rating}
					readonly
					emptySymbol={<img src="/assets/EmptyStar.png" className="icon" />}
					fullSymbol={<img src="/assets/FullStar.png" className="icon" />}
				/>
			</Card.Body>
			<Card.Footer bsPrefix={styles.cardFooter}>
				<VerifiedIcon />
				<em className={styles.verifiedText}>
					Verified
				</em>
			</Card.Footer>
		</Card>
	);
}