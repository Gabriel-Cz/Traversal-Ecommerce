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

function LeftBlocks() {
    return(
        <div className={styles.leftBlocks}>
        <svg width="300" height="465" viewBox="0 0 300 465" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L221.087 197.536L232 317L0 112.129V0Z" fill="url(#paint0_linear)" fill-opacity="0.25"/>
<path d="M0 165L201.075 338.856L211 444L0 263.688V165Z" fill="url(#paint1_linear)" fill-opacity="0.25"/>
<path d="M0 72L251.582 296.954L264 433L0 199.693V72Z" fill="url(#paint2_linear)" fill-opacity="0.25"/>
<line x1="0.33188" y1="106.626" x2="231.332" y2="311.626" stroke="white" stroke-opacity="0.25"/>
<line x1="0.329774" y1="195.624" x2="204.33" y2="374.624" stroke="white" stroke-opacity="0.25"/>
<defs>
<linearGradient id="paint0_linear" x1="116" y1="0" x2="116" y2="317" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="105.5" y1="165" x2="105.5" y2="444" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="132" y1="72" x2="132" y2="433" gradientUnits="userSpaceOnUse">
<stop stop-color="#5C81AD"/>
<stop offset="1" stop-color="#4F8095"/>
</linearGradient>
</defs>
</svg>

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
                <LeftBlocks />
                <Row className="d-flex justify-content-center align-items-center py-5 py-1-sm">
                    <Col lg={5}>
                        <SilverBlock></SilverBlock>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-4 py-1-sm">
                    <Col lg={5}>
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
