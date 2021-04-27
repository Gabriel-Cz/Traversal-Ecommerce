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

function LeftBlocks() {
    return(
        <div className={styles.leftBlocks}>
        <svg width="300" height="465" viewBox="0 0 300 465" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M300 0L78.9129 197.536L68 317L300 112.129V0Z" fill="url(#paint0_linear)" fill-opacity="0.25"/>
<path d="M300 165L98.9251 338.856L89 444L300 263.688V165Z" fill="url(#paint1_linear)" fill-opacity="0.25"/>
<path d="M300 72L48.4181 296.954L36 433L300 199.693V72Z" fill="url(#paint2_linear)" fill-opacity="0.25"/>
<line y1="-0.5" x2="308.846" y2="-0.5" transform="matrix(-0.747945 0.663761 0.663761 0.747945 300 107)" stroke="white" stroke-opacity="0.25"/>
<line y1="-0.5" x2="271.398" y2="-0.5" transform="matrix(-0.751663 0.659547 0.659547 0.751663 300 196)" stroke="white" stroke-opacity="0.25"/>
<path d="M300 0L78.9129 197.536L68 317L300 112.129V0Z" fill="url(#paint3_linear)" fill-opacity="0.25"/>
<path d="M300 165L98.9251 338.856L89 444L300 263.688V165Z" fill="url(#paint4_linear)" fill-opacity="0.25"/>
<path d="M300 72L48.4181 296.954L36 433L300 199.693V72Z" fill="url(#paint5_linear)" fill-opacity="0.25"/>
<line y1="-0.5" x2="308.846" y2="-0.5" transform="matrix(-0.747945 0.663761 0.663761 0.747945 300 107)" stroke="white" stroke-opacity="0.25"/>
<line y1="-0.5" x2="271.398" y2="-0.5" transform="matrix(-0.751663 0.659547 0.659547 0.751663 300 196)" stroke="white" stroke-opacity="0.25"/>
<defs>
<linearGradient id="paint0_linear" x1="184" y1="0" x2="184" y2="317" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.5" y1="165" x2="194.5" y2="444" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="168" y1="72" x2="168" y2="433" gradientUnits="userSpaceOnUse">
<stop stop-color="#5C81AD"/>
<stop offset="1" stop-color="#4F8095"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="184" y1="0" x2="184" y2="317" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="194.5" y1="165" x2="194.5" y2="444" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="168" y1="72" x2="168" y2="433" gradientUnits="userSpaceOnUse">
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
