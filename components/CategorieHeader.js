import React from 'react';
import Container from 'react-bootstrap/Container'
import styles from '../styles/CategorieHeader.module.scss'


export default function CategorieHeader(props) {
    return(
        <>
          <Container fluid className={styles.customContainer}>
            <div className={styles.customShape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg>
            </div>
          </Container>
        </>
    )
}