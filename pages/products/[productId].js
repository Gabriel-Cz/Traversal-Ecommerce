import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../store/actions/productsActions'
import Container from 'react-bootstrap/Container'
import ProductInformation from '../../components/ProductInformation'
import ProductImageWithCheckout from '../../components/ProductImageWithCheckout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AddToCart = () => {
    return(
        <>
          <div>
            <em>Ship in only 3 days</em>
            <div>Here is the cart</div>
          </div>
        </>
    );
}

export default function Product() {
    const router = useRouter();
    const {productId} = router.query;
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.productsReducer);
    useEffect(() => {
        dispatch(getProduct(productId));
        console.log(product)
        console.log(productId);
    }, [])
    return(
        <>
          <Container>
              <Row>
                  <Col md={6}>
                    <ProductInformation title="title" description="{description}" rating="{rating}" type="{type}"></ProductInformation>
                  </Col>
                  <Col md={6}>
                    <ProductImageWithCheckout image="{image}"></ProductImageWithCheckout>
                  </Col>
              </Row>
          </Container>
        </>
    );
}