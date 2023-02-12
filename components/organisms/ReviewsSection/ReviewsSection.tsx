import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomerReview } from '@/components/molecules';
import { CustomerReviewType } from '@/types';
import styles from './ReviewsSection.module.scss'

interface ReviewsSectionProps {
	reviews: CustomerReviewType[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
	return (
		<section className={styles.customSection}>
			<div className={styles.blockBehind} />
			<Container className={styles.customContainer}>
				<Row className={styles.header}>
					<Col xs={11} md={9} className="text-center py-sm-5">What's our customers are saying?</Col>
				</Row>
				<Row className="justify-content-center my-2 py-5">
					{reviews.map(({ id, ...customer }) => (
						<Col key={id} className="mx-2 mx-sm-4" xs={9} sm={6} md={5} lg={3}>
							<CustomerReview id={id} { ...customer } />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}