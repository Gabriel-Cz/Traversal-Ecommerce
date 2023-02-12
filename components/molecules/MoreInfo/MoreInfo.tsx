import React from 'react'
import { Image } from "react-bootstrap";
import styles from './MoreInfo.module.scss';

interface MoreInfoProps {
  children?: React.ReactNode;
}

export const MoreInfo: React.FC<MoreInfoProps> = ({ children }) => {
  return (
    <div className={styles.moreInfoContainer}>
      <div className={styles.moreInfoWrapper}>
        <Image className={styles.img} fluid src="/assets/BlueEllipse.png" />
        <div className={styles.moreInfoContent}>
          {children && children}
        </div>
      </div>
    </div>
  );
}

MoreInfo.defaultProps = {}