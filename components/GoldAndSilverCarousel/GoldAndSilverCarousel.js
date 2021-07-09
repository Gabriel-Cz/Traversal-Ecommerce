import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from '../ProductCard/ProductCard';

export default function GoldAndSilverCarousel() {
    const { productsByElement } = useSelector(state => state.productsReducer.server);
    return(
        <Carousel fade={true}>
            {productsByElement.map(product => (
                <Carousel.Item key={product.id}>
                  <Row class="d-flex justify-content-center pb-2 pb-sm-0 mx-2 mx-sm-0">
                    <Col xs={12} sm={8} style={{height: "100%"}}>
                      <ProductCard product={product} />
                    </Col>
                  </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}