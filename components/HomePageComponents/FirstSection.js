import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from '../styles/FirstSection.module.scss'

const SeeMoreButton = () => {
  return(
      <Link href="/about" passHref>
        <a>
        <span>See More</span>
        </a>
      </Link>
  );
}

const MoreInfo = () => {
    return(
        <>
        <div className={styles.moreInfoContainer}>
          <Image className={styles.img} src="BlueEllipse.png" />
          <div className={styles.moreInfoWrapper}>
            <p>Find Out why traversal is one of the Jewellery Market Leads around the world. </p>
            <SeeMoreButton></SeeMoreButton>
          </div>
        </div>
        </>
    );
}

export default function FirstSection() {
    return(
        <>
          <Container fluid className={styles.customContainer}>
              <div className={styles.divOverflow}></div>
              <Row className="justify-content-md-start mt-5">
                  <Col xs={12} sm={5} md={7} lg={{span: 6, offset: 2}} xl={6} xxl={5} className="justify-center mt-5">
                    <MoreInfo></MoreInfo>
                  </Col>
              </Row>
          </Container>
        </>
    )
}