import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ItemCard from '../ItemCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TrendingSectionMobile({carouselItems}) {
    return(
        <>
          <Carousel fade={true}>
              {carouselItems.map(product => (
                  <Carousel.Item key={product.id}>
                      <Row class="d-flex justify-content-center">
                        <Col xs={12} style={{height: "100%"}}>
                            <ItemCard product={product}></ItemCard>
                        </Col>
                      </Row>
                  </Carousel.Item>
              ))}
          </Carousel>
        </>
    )
}