import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/ShipmentsInformation.module.scss'

export function Quote() {
    return(
        <blockquote className="blockquote mb-0 card-body text-center mt-3" className={styles.theQuote}>
            <p>
              We Have an amazing shippment experience even when we are on the other corner of the map.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                    <cite title="Diane Von Furstenberg">Happy Customer</cite>
                </small>
            </footer>
        </blockquote>
    );
}

export default function ShipmentsInformation() {
    return(
        <>
          <Container fluid className={styles.customContainer}>
              <div className={styles.divOverflow}></div>
              <Row className="justify-content-center py-5">
                  <Col xs={12} md={12}>
                      <div className="px-4 py-2">
                          <div className={styles.textOverflow}>
                            <div className="text-center">
                                <Quote></Quote>
                                <small className={styles.headerText}>We deliver from <bold>3</bold> to <bold>7</bold> days around the world.</small>
                            </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
        </>
    );
}