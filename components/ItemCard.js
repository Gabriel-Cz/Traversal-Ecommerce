import React from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import AddToCartInput from '../components/CartComponents/AddToCartInput'
import styles from '../styles/ItemCard.module.scss'
import Rating from 'react-rating'

const OverflowInfo = ({id}) => {
  return(
    <>
      <div className={styles.overflowInfo}>
          <div className="text-center justify-content-center d-flex justify-items-center">
            <div>
              <AddToCartInput id={id} />
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href={'/products/' + `${id}`} passHref>
              <a style={{fontFamily: "'Unna', serif"}}>
                Product Details
              </a>
            </Link>
          </div>
      </div>
    </>
  );
}

const OverflowInfoXs = ({id}) => {
  return(
    <>
      <div className={styles.overflowInfoXs}>
          <div className="text-center justify-content-center d-flex justify-items-center">
            <div>
              <AddToCartInput id={id} />
            </div>
          </div>
          <div className="text-center mt-3">
            <Link href={'/products/' + `${id}`} passHref>
              <a style={{fontFamily: "'Unna', serif"}}>
                Product Details
              </a>
            </Link>
          </div>
      </div>
    </>
  );
}

export default function ItemCard(props) {
    return(
        <>
        <Card className={styles.card}>
          <div className={styles.topImage}>
            <Image className={styles.cardImage} fluid src={props.productImage} />
            <Card.Title className={styles.cardTitle}>{props.productTitle}</Card.Title>
            <div className={styles.divOverflowCartWrapper}>
              <OverflowInfo id={props.productId} />
            </div>
          </div>
          <Card.Body className={styles.cardBody}>
              <div className={styles.cardPriceWrapper}>
                  <div className={styles.cardPrice}>{props.productPrice}</div>
              </div>
              <div>
                <Card.Text className={styles.cardDescription}>{props.productDescription}</Card.Text>
                <OverflowInfoXs id={props.productId} />
                <div className={styles.productRating}>
                  <Rating readonly emptySymbol={<img src="./EmptyStar.png" className="icon" />} fullSymbol={<img src="./FullStar.png" className="icon" />} initialRating={props.productRating} />
                </div>
              </div>
          </Card.Body>
        </Card>
        
    </>
    )
}   