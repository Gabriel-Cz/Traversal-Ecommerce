import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../store/actions/productsActions';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../components/ItemCard'

const trendingHeader = {
    fontFamily: '"Crimson Text", serif',
    color: "rgba(0,0,0,0.5)",
    fontSize: "22px" 
}

const border = {
    borderBottom: "4px double rgba($color: gray, $alpha: 0.25)"
}

export default function TrendingSection() {
    const {products} = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const filteredProducts = products.filter(product => product.state === 'trending')
    return(
        <>
          <Container className="mt-5">
              <Row className="justify-content-md-center" style={border}>
                  <Col md="10" className="text-center my-2" style={trendingHeader}>Trending</Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {filteredProducts.map(item => (
                      <Col md={4} className="">
                        <ItemCard key={item.id} productTitle={item.title} productImage={item.image} productDescription={item.description} productPrice={item.price} productRating={item.rating}></ItemCard>
                      </Col>
                  ))}
              </Row>
          </Container>
        </>
    )
}