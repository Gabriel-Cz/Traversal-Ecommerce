import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container'
import { Quote } from '../HomePageGoldAndSilverSection/GoldAndSilverSection';
import styles from '../../styles/Elements.module.scss'

function ElementContent({filteredProducts, elementName}) {
    return(
        <>
          <div className={styles.containerWrapper}>
          <div className={styles.backgroundDiv}></div>
          <Container fluid className={styles.container}>
              <span className={styles[`elementName-${elementName}`]}>{elementName}</span>
              <div className={styles[`firstDiv-${elementName}`]}>
              <div className={styles.secondDiv}>
              <Row className="justify-content-center align-items-center">
                {filteredProducts.map(product => (
                    <Col className="my-4 mx-xl-2" key={product.id} xs={11} sm={6} md={6} xl={{span: 2, offset: 2}} xl={3}>
                      <ProductCard product={product} />
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
          </div>
        </>
    );
}

ElementContent.PropTypes = {
    filteredProducts: PropTypes.array,
    elementName: PropTypes.string
}

export default ElementContent;
