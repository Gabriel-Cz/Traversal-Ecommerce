import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Quote } from '@/components/atoms'
import styles from './AboutShipments.module.scss'

interface ShipmentsInfoProps {
	description?: string
}

export const ShipmentsInfo: React.FC<ShipmentsInfoProps> = ({ description }) => {
	return (
		<Container fluid className={styles.customContainer}>
			<div className={styles.divOverflow} />
			<Row className="justify-content-center py-5">
				<Col xs={12} md={12}>
					<div className="px-4 py-2">
						<div className={styles.textOverflow}>
							<div className="text-center align-content-center">
								<Quote
									cite='We Have an amazing shippment experience even when we are on the other corner of the map.'
								  autor='Happy Customer'
								/>
								<small className={styles.blockFooter}>
									{description}
								</small>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

ShipmentsInfo.defaultProps = {
	description: 'We deliver in 3 days. Worldwide.'
}