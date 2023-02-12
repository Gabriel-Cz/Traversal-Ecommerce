import { wrapper } from '@/store'
import { getProduct, filterProducts } from '@/store/actions'
import { Container, Image, Row, Col} from 'react-bootstrap'
import { ProductInformation, ShipmentsInfo, TrendingSection } from '@/components/organisms';
import type { ProductType } from '@/types'
import type { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Product.module.scss'

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const productId = query.productId as string;
    // @ts-ignore
    await store.dispatch(getProduct(productId));
    // @ts-ignore
    await store.dispatch(filterProducts('state', 'trending'));
    const { productsReducer } = store.getState();
    return {
      props: {
        product: productsReducer.server.product,
        filteredProducts: productsReducer.server.filteredProducts
      }
    };
  }
);

interface ProductProps {
  product: ProductType;
  filteredProducts: ProductType[];
}

const Product: NextPage<ProductProps> = ({ product, filteredProducts }) => {
  return (
    <>
      <Container fluid className={styles.container}>
        <div className={styles.productCard}>
          <Row className="d-flex align-items-center justify-center">
            <Col xs={12} sm={12} md={6}>
              <ProductInformation product={product} />
            </Col>
            <Col xs={12} sm={12} md={6} className={styles.colImageWrapper}>
              <Image src={product.image} fluid />
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mb-5">
        <ShipmentsInfo />
      </Container>
      <TrendingSection trendingProducts={filteredProducts} />
    </>
  );
}

export default Product;

