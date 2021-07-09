import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ProductCard from '../ProductCard/ProductCard'
import styles from './TrendingProducts.module.scss'

function TrendingProducts({trendingProducts}) {
    return(
      <Container className={styles.container}>
        <span className={styles.trendingHeader}>Trending</span>
        <div className={styles.contentForLargeScreen}>
          <Row className={styles.borderTrendingRow}>
            {trendingProducts.map(product => (
              <Col md={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.mobileCarousel}>
          <Carousel className="mt-5" fade={true}>
            {trendingProducts.map(product => (
              <Carousel.Item key={product.id}>
                <Row class="d-flex justify-content-center pb-2 pb-sm-0 mx-2 mx-sm-0">
                  <Col xs={12} sm={8} style={{height: "100%"}}>
                    <ProductCard product={product} />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    )
}

export default TrendingProducts;