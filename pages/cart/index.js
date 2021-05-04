import React, { useEffect } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProductsTable from '../../components/CartComponents/ProductsTable'
import CartFooter from '../../components/CartComponents/CartFooter'
import TrendingSection from '../../components/TrendingSection'
import { useShoppingCart } from 'use-shopping-cart'
import { wrapper } from '../../store' 
import { linksCategories } from '../../components/NavbarComponent'
import { filterProducts } from '../../store/actions/productsActions'
import { useSelector } from 'react-redux' 
import styles from '../../styles/Cart.module.scss' 

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    await store.dispatch(filterProducts('state', 'trending'))
    return {
        props: {
            filteredProducts: store.getState().productsReducer.server.filteredProducts
        }
    }
})

const EmptyCartMessage = () => {
    return(
        <>
          <Container className="mx-auto my-5">
              <div className="d-flex flex-column justify-content-center align-items-center py-4">
                  <h1 className={styles.messageHeader}>
                      Your Cart is currently empty go to add something.
                  </h1>
                  <Row className="mt-5" justify-content-center>
                      {linksCategories.map(link => (
                          <Col xs={6} md={3} key={link.name}>
                              <Link href={'/categories' + link.path} passHref>
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
        </>
    );
}

export function Cart({filteredProducts}) {
    const { cartDetails } = useShoppingCart();
    /* const {filteredProducts} = useSelector(state => state.productsReducer.server); */
    const products = Object.values(cartDetails)
    if (products[0] === undefined) {
        return(
            <>
              <EmptyCartMessage />
            <TrendingSection trendingProducts={filteredProducts}></TrendingSection>
            </>
        );
    } else {
        return(
            <>
            <Container className={styles.container}>
                <div>
                    <Row classNmae="justify-content-center">
                        <Col xs={12}>
                           <div className={styles.currentCartText}>
                             <h3 >Current Cart</h3>
                           </div>
                        </Col>
                        <Col xs={12}>
                            <ProductsTable products={products}></ProductsTable>
                        </Col>
                        <Col xs={12}>
                            <CartFooter />
                        </Col>
                    </Row>
                </div>
            </Container>
            <TrendingSection trendingProducts={filteredProducts}></TrendingSection>
            </>
        );
    }
}

export default Cart;