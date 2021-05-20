import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ItemCard from '../CardsComponents/ItemCard'
import styles from '../../styles/TrendingSection.module.scss'

function TrendingSection({trendingProducts}) {
    return(
        <>
          <Container className={styles.container}>
              <span className={styles.trendingHeader}>Trending</span>
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
                      <Row class="d-flex justify-content-center pb-2 pb-sm-0 mx-2 mx-sm-0">
                        <Col xs={12} sm={8} style={{height: "100%"}}>
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