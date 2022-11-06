import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import styles from './GoldAndSilverCarousel.module.scss';

export default function GoldAndSilverCarousel() {
    const { productsByElement } = useSelector(state => state.productsReducer.server);
    return(
        <Carousel fade={true} className={styles.carousel}>
            {productsByElement.map(product => (
                <Carousel.Item key={product.id}>
                  <Link href={`/products/${product.id}`} passHref>
                    <a>
                      <div className={styles.imageContainer}>
                        <Image fluid src={product.image} className={styles.image} />
                        <div className={styles.textOverflowWrapper}>
                          <p className={styles.textOverflow} >
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}