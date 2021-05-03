import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../ItemCard'
import Container from 'react-bootstrap/Container'
import { Quote } from '../GoldAndSilverSection';
import styles from '../../styles/Categories.module.scss'

const customContainer = {
    border: "6px double gray",
    borderBottom: 'none', 
}

export default function CategorieContent({filteredProducts, categorie}) {
    return(
        <>
          <Container className={styles.container}>
              <span className={styles.categorieName}>{categorie}</span>
              <div className={styles.firstDiv}>
              <div className={styles.secondDiv}>
              <Row className="justify-content-center align-items-center">
                {filteredProducts.map(product => (
                    <Col className="my-4 mx-xl-2" key={product.id} xs={12} sm={6} md={6} xl={{span: 2, offset: 2}} xl={5}>
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
                  </div>
              </div>
          </Container>
        </>
    );
}