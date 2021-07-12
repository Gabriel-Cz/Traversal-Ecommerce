import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/Elements.module.scss'
import PropTypes from 'prop-types';

function ElementHeader({elementName}) {
    return(
        <>
          <Container fluid className={styles[`container-${elementName}`]}>
            <div className={styles.overflowDiv}></div>
            <Row className="justify-content-center py-2 pt-5">
              <Col xs={10} md={6}>
                  <div className="text-center mt-5">
                      <h1 className={styles.header}>{elementName}</h1>
                  </div>
              </Col>
            </Row>
            <Row className="justify-content-center py-2 pb-5">
              <Col xs={11} md={6}>
                  <div className="text-center">
                      <p className={styles.subHeader}>
                        <span style={{textTransform: "capitalize"}}>{elementName}</span> One of the most <br></br> <span>BEAUTIFUL</span> <br></br> elements in the earth bringing to you by Traversal.
                      </p>
                  </div>
              </Col>
            </Row>
          </Container>
        </>
    )
}

ElementHeader.ProtoTypes = {
    elementName: PropTypes.string
}

export default ElementHeader;