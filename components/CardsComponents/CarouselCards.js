import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ItemCard from '../components/ItemCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CarouselCards({carouselItems}) {
    return(
        <>
          <Carousel fade={true}>
              {carouselItems.map(item => (
                  <Carousel.Item key={item.title}>
                      <Row class="d-flex justify-content-center">
                        <Col xs={11} sm={12} md={12} lg={10} xl={10} className="" style={{height: "100%"}}>
                            <ItemCard productTitle={item.title} productImage={item.image} productPrice={item.price} productDescription={item.description} productRating={item.rating}></ItemCard>
                        </Col>
                      </Row>
                  </Carousel.Item>
              ))}
          </Carousel>
        </>
    )
}