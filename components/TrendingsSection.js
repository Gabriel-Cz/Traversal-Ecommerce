import React from 'react'
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
    fontSize: "22px",
}

const borderTrendingRow = {
    borderBottom: "4px double rgba(128,128.128,0.25)"
}
 
function TrendingSection({trendingProducts}) {
    return(
        <>
          <Container style={containerStyle}>
              <Row className="justify-content-md-center" style={borderTrendingRow}>
                  <Col md="10" className="text-center my-5" style={trendingHeader}>Trending</Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {trendingProducts.map(product => (
                      <Col md={4} className="">
                        <ItemCard 
                          key={product.id} 
                          productId={product.id} 
                          productTitle={product.title} 
                          productImage={product.image} 
                          productDescription={product.description} 
                          productPrice={product.price} 
                          productRating={product.rating}
                        >
                          </ItemCard>
                      </Col>
                  ))}
              </Row>
          </Container>
        </>
    )
}

export default TrendingSection;