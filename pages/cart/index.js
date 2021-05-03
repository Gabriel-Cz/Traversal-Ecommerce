import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductsTable from '../../components/CartComponents/ProductsTable'
import { useShoppingCart } from 'use-shopping-cart'
import styles from '../../styles/Cart.module.scss' 

export default function Cart() {
    const { cartDetails } = useShoppingCart();
    const object = cartDetails.G1
    const products = []
    useEffect(() => {
        console.log(object);
    }, [])
    return(
        <>
        <Container>
            <div>
                <Row>
                    <Col cols={12}>
                       <div className={styles.currentCartText}>
                         <h3 >Current Cart</h3>
                       </div>
                    </Col>
                    <Col cols={12}>
                        <ProductsTable products={products}></ProductsTable>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    );
}