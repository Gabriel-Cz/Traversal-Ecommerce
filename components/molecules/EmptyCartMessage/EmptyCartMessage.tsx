import React from 'react';
import Link from "next/link";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BaseNavLinkType } from "types/Base";
import styles from './EmptyCartMessage.module.scss';

interface EmptyCartMessageProps {
  navigationLinks: BaseNavLinkType[];
}

export const EmptyCartMessage: React.FC<EmptyCartMessageProps> = ({ navigationLinks }) => {
	return (
		<Container className={styles.containerMessageWrapper}>
			<div className="d-flex flex-column justify-content-center align-items-center py-4">
				<h1 className={styles.messageHeader}>
					Your Cart is currently empty go to add something.
				</h1>
				<Row className="mt-5" justify-content-center>
					{navigationLinks.map(link => (
						<Col xs={6} md={3} className="mt-4 mt-md-0" key={link.name}>
							<Link href={`/categories/${link.path}`} passHref>
								<a>
									<div className={styles.thumbnailContainer}>
										<div className={styles.thumbnailOverflow}>
											<span>
												{link.name}
											</span>
										</div>
										<Image className="py-0 px-0 my-0 mx-0" fluid src={link.image} />
									</div>
								</a>
							</Link>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
}