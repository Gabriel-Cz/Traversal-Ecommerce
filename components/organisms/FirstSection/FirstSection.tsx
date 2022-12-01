import React from 'react'
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container'
import styles from './FirstSection.module.scss'
import { SeeMoreButton } from '@/components/atoms'
import { MoreInfo } from '@/components/molecules/MoreInfo'

interface FirstSectionProps {
  info?: string
}

export const FirstSection: React.FC<FirstSectionProps> = ({ info }) => {
  return (
    <Container fluid className={styles.customContainer}>
      <div className={styles.videoWrapper}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="GlobeVideo.mp4"
          playing
          muted
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
                loop: true,
                poster: "GlobeVideo.gif",
              }
            }
          }}
        />
      </div>
      <div className={styles.divOverflow} />
      <div className={styles.phantomDiv} />
      <MoreInfo>
        <p>{info}</p>
        <SeeMoreButton />
      </MoreInfo>
    </Container>
  )
}

FirstSection.defaultProps = {
  info: 'Find Out why traversal is one of the Jewellery Market Leads around the world.'
}