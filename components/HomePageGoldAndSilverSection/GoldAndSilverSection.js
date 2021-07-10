import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import GoldAndSilverCarousel from '../GoldAndSilverCarousel/GoldAndSilverCarousel';
import styles from './GoldAndSilver.module.scss'

function OverflowGoldInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with <b className={styles.goldSentence}>Gold</b> Jewellery</p>
        </div>
    ); 
}

function OverflowSilverInfo() {
    return(
        <div className={styles.textOverflowWrapper}>
            <p className={styles.textOverflow}>See the latest deals with <b className={styles.silverSentence}>Silver</b> Jewellery</p>
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
           <svg width="1196" height="513" viewBox="0 0 1196 513" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="198" cy="320" r="140" stroke="url(#paint0_radial)" stroke-opacity="0.25" stroke-width="10"/>
               <circle cx="145" cy="368" r="140" stroke="url(#paint1_radial)" stroke-opacity="0.25" stroke-width="10"/>
               <circle cx="1028" cy="168" r="140" transform="rotate(170 1028 168)" stroke="url(#paint2_radial)" stroke-opacity="0.25" stroke-width="10"/>
               <circle cx="989.976" cy="217.976" r="140" transform="rotate(170 989.976 217.976)" stroke="url(#paint3_radial)" stroke-opacity="0.25" stroke-width="10"/>
               <defs>
                   <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110.5 387) rotate(-33.505) scale(214.67)">
                    <stop/>
                    <stop offset="1" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.5 435) rotate(-33.505) scale(214.67)">
                    <stop/>
                    <stop offset="1" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(940.5 235) rotate(-33.505) scale(214.67)">
                    <stop/>
                    <stop offset="1" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(902.476 284.976) rotate(-33.505) scale(214.67)">
                    <stop/>
                    <stop offset="1" stop-opacity="0"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}

export default function GoldAndSilverSection() {
    return( 
        <Container fluid className={styles.customContainer}>
            <SilverBlocksSvg />
            <Row className="d-flex justify-content-center align-items-center py-sm-5 py-1-sm">
                <Col xs={12} lg={4}>
                    <Quote />
                </Col>
                <Col lg={5}>
                    <SilverBlock />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center py-4 py-1-sm">
                <Col lg={5}>
                    <GoldBlock />
                </Col>
                <Col xs={12} lg={4}>
                    <GoldAndSilverCarousel />
                </Col>
            </Row>
        </Container>
    ); 
}

