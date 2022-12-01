import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';
import styles from './GoldAndSilverCarousel.module.scss';

interface Props {
  children: React.ReactElement<CarouselItem[]>;
}

export const ProductsCarousel: React.FC<Props> = ({ children }): React.ReactElement<CarouselItem[]> => {
  return (
    <Carousel fade={true} className={styles.carousel}>
      {children}
    </Carousel>
  )
}