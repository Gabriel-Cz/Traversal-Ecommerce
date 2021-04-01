import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { GoldLink, SilverLink } from './ProductsLinks'
import Link from 'next/link'
import styles from '../styles/GoldAndSilver.module.scss'

function OverflowGoldInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with <i className={styles.goldSentence}>Gold</i> Jewellery</p>
        </div>
    ); 
}

function OverflowSilverInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with <i className={styles.silverSentence}>Silver</i> Jewellery</p>
        </div>
    );
}

function Quote() {
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

function GoldBlock() {
    return(
        <div className={styles.imageContainer}>
            <Link href="/products/gold" passHref>
                <a>
                  <Image fluid className={styles.image} src="/GoldImage.jpg" />
                  <OverflowGoldInfo></OverflowGoldInfo>
                </a>
            </Link>
        </div>
    );
}

function SilverBlock() {
    return(
        <div className={styles.imageContainer}>
            <Link href="/products/silver" passHref>
                <a>
                  <Image fluid className={styles.image} src="/SilverImage.jpg" />
                  <OverflowSilverInfo></OverflowSilverInfo>
                </a>
            </Link>
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
                <Row className="d-flex justify-content-center align-items-center py-5 py-1-sm">
                    <Col lg={4}>
                        <SilverBlock></SilverBlock>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-4 py-1-sm">
                    <Col lg={4}>
                        <GoldBlock></GoldBlock>
                    </Col>
                    <Col lg={5}>
                        <Quote></Quote>
                    </Col>
                </Row>   
            </Container>
        ); 
    }
}

export default GoldAndSilverSection
