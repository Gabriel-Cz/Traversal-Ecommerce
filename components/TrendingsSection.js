import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts } from '../store/actions/productsActions';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../components/ItemCard'

const containerStyle = {
    marginTop: "100px",
    marginBottom: "100px"
}

const trendingHeader = {
    fontFamily: '"Crimson Text", serif',
    color: "rgba(0,0,0,0.5)",
    fontSize: "22px" 
}

const border = {
    borderBottom: "4px double rgba($color: gray, $alpha: 0.25)"
}

export default function TrendingSection() {
    const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterProducts('state', 'trending'))
    }, [])
    return(
        <>
          <Container style={containerStyle}>
              <Row className="justify-content-md-center" style={border}>
                  <Col md="10" className="text-center my-2" style={trendingHeader}>Trending</Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {filteredProducts.map(product => (
                      <Col md={4} className="">
                        <ItemCard key={product.id} productId={product.id} productTitle={product.title} productImage={product.image} productDescription={product.description} productPrice={product.price} productRating={product.rating}></ItemCard>
                      </Col>
                  ))}
              </Row>
          </Container>
        </>
    )
}