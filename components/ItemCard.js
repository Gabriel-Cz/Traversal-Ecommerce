import React from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import {AddToCartButton} from './Buttons'
import styles from '../styles/ItemCard.module.scss'
import Rating from 'react-rating'

export default function ItemCard(props) {
    return(
        <>
      
        <Card className={styles.card}>
          <div className={styles.topImage}>
            <Image className={styles.cardImage} fluid src={props.productImage} />
            <Card.Title className={styles.cardTitle}>{props.productTitle}</Card.Title>
            <div className={styles.divOverflowCartWrapper}>
              <AddToCartButton id={props.productId}></AddToCartButton>
            </div>
          </div>
          <Card.Body className={styles.cardBody}>
              <div className={styles.cardPriceWrapper}>
                  <div className={styles.cardPrice}>{props.productPrice}</div>
              </div>
              <div>
                <Card.Text className={styles.cardDescription}>{props.productDescription}</Card.Text>
                <div>
                  <Rating readonly emptySymbol={<img src="./EmptyStar.png" className="icon" />} fullSymbol={<img src="./FullStar.png" className="icon" />} initialRating={props.productRating} />
                </div>
              </div>
          </Card.Body>
        </Card>
        
    </>
    )
}   