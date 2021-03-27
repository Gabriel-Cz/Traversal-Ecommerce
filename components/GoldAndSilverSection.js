import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { GoldButton, SilverButton } from '../components/ProductButtons'
import styles from '../styles/GoldAndSilver.module.scss'

function OverflowGoldInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with Gold Jewellery</p>
            <div className={styles.buttonWrapper}>
              <GoldButton></GoldButton>
            </div>
        </div>
    ); 
}

function OverflowSilverInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with Silver Jewellery</p>
            <div className={styles.buttonWrapper}>
              <SilverButton></SilverButton>
            </div>
        </div>
    );
}

class GoldAndSilverSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <Container fluid className={styles.customContainer}>
               <Row className="d-flex justify-content-center align-items-center py-5">
                    <Col md="4">
                        <blockquote className="blockquote mb-0 card-body text-center" style={{fontFamily: "Unna"}}>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                               erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                               <small className="text-muted">
                                  Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                           </footer>
                        </blockquote>
                    </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                  <Col md={6} className="p-0">
                    <div className={styles.imageContainer}>
                       <Image fluid className="p-0" src="/GoldImage.jpg" />
                       <OverflowGoldInfo></OverflowGoldInfo>
                    </div>
                  </Col>
                  <Col md={6} className="p-0">
                    <div className={styles.imageContainer}>
                        <Image fluid className="p-0" src="/SilverImage.jpg" />
                        <OverflowSilverInfo></OverflowSilverInfo>
                    </div>
                  </Col>
              </Row>
          </Container>
        ); 
    }
}

export default GoldAndSilverSection
