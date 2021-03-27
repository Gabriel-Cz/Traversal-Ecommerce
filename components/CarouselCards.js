import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Image from 'react-bootstrap/Image'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import ItemCard from '../components/ItemCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CarouselCards(props) {
    return(
        <>
          <Carousel fade={true}>
              {props.carouselItems.map(item => (
                  <Carousel.Item key={item.title}>
                      <Row class="d-flex justify-content-center">
                        <Col xs={11} sm={12} md={12} lg={10} xl={10} className="">
                            <ItemCard productName={item.title} productImage={item.image} productPrice={item.price} productDescription={item.description}></ItemCard>
                        </Col>
                      </Row>
                  </Carousel.Item>
              ))}
          </Carousel>
        </>
    )
}