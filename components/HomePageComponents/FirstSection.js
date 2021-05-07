import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from '../../styles/FirstSection.module.scss'

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
            <div className={styles.moreInfoWrapper}>
              <Image className={styles.img} fluid src="BlueEllipse.png" />
              <div className={styles.moreInfoContent}>
                <p>Find Out why traversal is one of the Jewellery Market Leads around the world. </p>
                <SeeMoreButton></SeeMoreButton>
              </div>
            </div>
        </div>
        </>
    );
}

export function GlobleVideo() {
  return(
    {__html: '<video width="100%" height="100%" src="GlobeVideo.mp4" type="video/mp4" loop autoplay></video>'}
  );
}

export default function FirstSection() {
    return(
        <>
          <Container fluid className={styles.customContainer}>
              <div className={styles.videoWrapper}
                 dangerouslySetInnerHTML={GlobleVideo()}>
              </div>
              <div className={styles.divOverflow}></div>
              <div class={styles.phantomDiv}>phantom div</div>
              <MoreInfo></MoreInfo>
          </Container>
        </>
    )
}

/*<div className={styles.divTest}>-</div>
              <div className={styles.moreInfoContainer}>
                <MoreInfo></MoreInfo>
</div>*/