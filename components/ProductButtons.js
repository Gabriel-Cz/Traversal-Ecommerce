import React from 'react'
import styles from '../styles/ProductsButtons.module.scss'

const GoldButton = () => {
    return(
        <button className={styles.goldBtn}>
            Gold
        </button>
    );
}

const SilverButton = () => {
    return(
        <button className={styles.silverBtn}>
            Silver
        </button>
    );
}

const SeeMoreButton = () => {
    return(
        <button className={styles.seeMoreBtn}>See More</button>
    );
}

export { GoldButton, SilverButton, SeeMoreButton } 
