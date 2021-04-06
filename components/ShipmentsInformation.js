import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/ShipmentsInformation.module.scss'

export function Quote() {
    return(
        <blockquote className="blockquote mb-0 card-body text-center mt-3" style={{fontFamily: "Unna"}}>
            <p>
              Jewelry is like the perfect spice - it always complements what’s already there.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                    <cite title="Diane Von Furstenberg">Diane Von Furstenberg</cite>
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
                            <p className={styles.headerText}>We deliver from <bold>3</bold> to <bold>7</bold> days around the world.</p>
                            <div className="text-center">
                                <Quote></Quote>
                            </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
        </>
    );
}