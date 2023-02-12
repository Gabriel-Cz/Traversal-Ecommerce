import { Carousel, CarouselItem } from 'react-bootstrap';
import styles from './ProductsCarousel.module.scss';

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