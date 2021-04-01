import React from 'react'
import Link from 'next/link'
import styles from '../styles/ProductsLinks.module.scss'

const GoldLink = () => {
    return(
        <span href="/" className={styles.goldLink}>Gold</span>
    );
}

const SilverLink = () => {
    return(
        <span href="/" className={styles.silverLink}>Silver</span>
    );
}
 
const SeeMoreButton = () => {
    return(
        <span href="/about" className={styles.seeMoreBtn}>See More</span>
    );
}

export { GoldLink, SilverLink, SeeMoreButton } 
