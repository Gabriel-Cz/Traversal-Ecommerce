import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
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

export default function FirstSection() {
    return(
        <>
          <Container fluid className={styles.customContainer}>
              <div className={styles.videoWrapper}>
                <ReactPlayer 
                  width="100%" height="100%" url="GlobeVideo.mp4" playing muted
                  config={{
                    file: {
                      attributes: {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        poster: "GlobeVideo.gif",
                      }}
                    }}
                ></ReactPlayer>
              </div>
              <div className={styles.divOverflow}></div>
              <div class={styles.phantomDiv}>phantom div</div>
              <MoreInfo></MoreInfo>
          </Container>
        </>
    )
}