import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
            <Link href="/elements/gold" passHref>
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
            <Link href="/elements/silver" passHref>
                <a>
                  <Image fluid className={styles.image} src="/SilverImage.jpg" />
                  <OverflowSilverInfo></OverflowSilverInfo>
                </a>
            </Link>
      </div>
    );
}

const SilverBlocksSvg = () => {
    return(
        <div className={styles.goldBlockSvg}>
            <svg width="100%" height="100%" viewBox="0 0 1255 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M5 22.5H1251M359.998 84.9453H1160M228.998 153.945H728.998M544 0.5H1044M90 54.5H890M4.99683 123.482H1248" stroke="#CBC6C6"/>
</g>
<defs>
<filter id="filter0_d" x="0.996826" y="0" width="1254" height="162.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
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
                <SilverBlocksSvg />
                <Row className="d-flex justify-content-center align-items-center py-sm-5 py-1-sm">
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
