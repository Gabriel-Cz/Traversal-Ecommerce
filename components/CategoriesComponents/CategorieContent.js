import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../ItemCard'
import Container from 'react-bootstrap/Container'
import { Quote } from '../GoldAndSilverSection';

const customContainer = {
    border: "6px double gray",
    borderBottom: 'none', 
}

export default function CategorieContent({filteredProducts}) {
    return(
        <>
          <Container className="mx-auto my-5 py-5" fluid style={{borderBottom: "3px double rgba(128, 128, 128, 0.5)", borderTop: "3px double rgba(128, 128, 128, 0.5)"}}>
              <Row className="justify-content-center align-items-center">
                  {filteredProducts.map(product => (
                    <Col className="my-4 mx-xl-5" key={product.id} xs={12} sm={6} md={6} xl={{span: 2, offset: 2}} xl={3}>
                      <ItemCard 
                       product={product}
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