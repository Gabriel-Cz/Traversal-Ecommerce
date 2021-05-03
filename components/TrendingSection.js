import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ItemCard from './ItemCard'
import styles from '../styles/TrendingSection.module.scss'

function TrendingSection({trendingProducts}) {
    return(
        <>
          <Container className={styles.container}>
              <Row className="justify-content-center">
                  <Col md="10" className={styles.trendingHeader}>Trending</Col>
              </Row>
              <div className={styles.contentForLargeScreen}>
              <Row className={styles.borderTrendingRow}>
                  {trendingProducts.map(product => (
                      <Col md={4} className="">
                        <ItemCard 
                          product={product}
                        >
                          </ItemCard>
                      </Col>
                  ))}
              </Row>
              </div>
              <div className={styles.mobileCarousel}>
              <Carousel className="mt-5" fade={true}>
                {trendingProducts.map(product => (
                  <Carousel.Item key={product.id}>
                      <Row class="d-flex justify-content-center">
                        <Col xs={12} sm={4} style={{height: "100%"}}>
                            <ItemCard product={product}></ItemCard>
                        </Col>
                      </Row>
                    </Carousel.Item>
                ))}
                </Carousel>
              </div>
          </Container>
        </>
    )
}

export default TrendingSection;