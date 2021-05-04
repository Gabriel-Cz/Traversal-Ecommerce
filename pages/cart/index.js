import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProductsTable from '../../components/CartComponents/ProductsTable'
import CartFooter from '../../components/CartComponents/CartFooter'
import { Quote } from '../../components/GoldAndSilverSection'
import { useShoppingCart } from 'use-shopping-cart'
import { wrapper } from '../../store' 
import { linksCategories } from '../../components/NavbarComponent'
import { filterProducts } from '../../store/actions/productsActions'
import { useSelector } from 'react-redux' 
import styles from '../../styles/Cart.module.scss' 

const EmptyCartMessage = () => {
    return(
        <>
          <Container className={styles.containerMessageWrapper}>
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
    const [emptyCartMessage, setEmptyCartMessage ] = useState(true);
    const { cartDetails } = useShoppingCart();
    const products = Object.values(cartDetails)
    useEffect(() => {
        products[0] === undefined ? setEmptyCartMessage(true) : setEmptyCartMessage(false);
    }, [products])
    if (emptyCartMessage === true) {
        return(
            <>
              <EmptyCartMessage />
              <div className="mt-4 py-2 d-flex justify-content-center align-items-center">
                  <Quote></Quote>
              </div>
            </>
        );
    } else {
        return(
            <>
            <Container className={styles.cartContainer}>
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
            <div className="mt-4 py-2 d-flex justify-content-center align-items-center">
                <Quote></Quote>
            </div>
            </>
        );
    }
}

export default Cart;