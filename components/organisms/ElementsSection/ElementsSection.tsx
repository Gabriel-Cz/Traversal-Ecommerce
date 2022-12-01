import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { ProductsCarousel } from '@/components/organisms'
import { BlockLink, Quote, OverlayInfo } from '@/components/atoms';
import styles from './GoldAndSilver.module.scss'
import { Carousel, CarouselItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const SilverBlocksSvg: React.FC = () => {
	return (
		<div className={styles.goldBlockSvg}>
			<svg width="100%" height="100%" viewBox="0 0 1196 513" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="198" cy="320" r="140" stroke="url(#paint0_radial)" stroke-opacity="0.25" stroke-width="10" />
				<circle cx="145" cy="368" r="140" stroke="url(#paint1_radial)" stroke-opacity="0.25" stroke-width="10" />
				<circle cx="1028" cy="168" r="140" transform="rotate(170 1028 168)" stroke="url(#paint2_radial)" stroke-opacity="0.25" stroke-width="10" />
				<circle cx="989.976" cy="217.976" r="140" transform="rotate(170 989.976 217.976)" stroke="url(#paint3_radial)" stroke-opacity="0.25" stroke-width="10" />
				<defs>
					<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110.5 387) rotate(-33.505) scale(214.67)">
						<stop />
						<stop offset="1" stop-opacity="0" />
					</radialGradient>
					<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.5 435) rotate(-33.505) scale(214.67)">
						<stop />
						<stop offset="1" stop-opacity="0" />
					</radialGradient>
					<radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(940.5 235) rotate(-33.505) scale(214.67)">
						<stop />
						<stop offset="1" stop-opacity="0" />
					</radialGradient>
					<radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(902.476 284.976) rotate(-33.505) scale(214.67)">
						<stop />
						<stop offset="1" stop-opacity="0" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
}

export const ElementsSection: React.FC = () => {
	const { productsByElement } = useSelector(state => state.productsReducer.server);
	return (
		<Container fluid className={styles.customContainer}>
			<SilverBlocksSvg />
			<Row className="d-flex justify-content-center align-items-center py-sm-5 py-1-sm">
				<Col xs={12} lg={4}>
					<Quote />
				</Col>
				<Col xs={12} lg={5}>
					<BlockLink to="/elements/silver">
						<Image fluid className={styles.image} src="/SilverImage.jpg" />
						<OverlayInfo>
							See the latest deals in
							<b className={styles.silverSentence}>Silver</b> Jewellery
						</OverlayInfo>
					</BlockLink>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center align-items-center py-4 py-1-sm">
				<Col xs={12} lg={5}>
					<BlockLink to="/elements/gold">
						<Image fluid className={styles.image} src="/GoldImage.jpg" />
						<OverlayInfo>
							See the latest deals in
							<b className={styles.goldSentence}>Gold</b> Jewellery
						</OverlayInfo>
					</BlockLink>
				</Col>
				<Col xs={12} lg={4} className="ml-0 ml-lg-4 mt-4 mt-lg-0">
					<ProductsCarousel>
						<CarouselItem>
							{productsByElement.map(product => (
								<Carousel.Item key={product.id}>
									<Link href={`/products/${product.id}`} passHref>
										<a>
											<div className={styles.imageContainer}>
												<Image fluid src={product.image} className={styles.image} />
												<div className={styles.textOverflowWrapper}>
													<p className={styles.textOverflow}>{product.name}</p>
												</div>
											</div>
										</a>
									</Link>
								</Carousel.Item>
							))}
						</CarouselItem>
					</ProductsCarousel>
				</Col>
			</Row>
		</Container>
	);
}

