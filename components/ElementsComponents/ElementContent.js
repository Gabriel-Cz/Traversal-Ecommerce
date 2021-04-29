import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard'
import Container from 'react-bootstrap/Container'
import { Quote } from '../GoldAndSilverSection';

function CategorieContent({filteredProducts}) {
    return(
        <>
          <Container className="mx-auto my-5 py-5" fluid>
              <Row className="justify-content-center align-items-center">
                  {filteredProducts.map(product => (
                    <Col className="my-4 mx-5" key={product.id} xs={12} sm={4} lg={{span: 2, offset: 2}} xl={3}>
                      <ItemCard 
                       productId={product.id}
                       productTitle={product.title} 
                       productImage={product.image} 
                       productsPrice={product.price} 
                       productPrice={product.price} 
                       productDescription={product.description}
                       productRating={product.rating}
                      >
                      </ItemCard>
                    </Col>
                  ))}
              </Row>
              <Row className="py-4 mt-4 justify-content-center">
                  <Col md={5}>
                      <Quote></Quote>
                  </Col>
              </Row>
          </Container>
        </>
    );
}

CategorieContent.PropTypes = {
    filteredProducts: PropTypes.array
}

export default CategorieContent;