import React from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { AddToCartButton } from '../Buttons/Buttons'
import styles from './ProductCard.module.scss'
import Rating from 'react-rating'

const OverflowInfo = ({product}) => {
  return(
    <>
      <div className={styles.overflowInfo}>
          <div className="text-center justify-content-center d-flex justify-items-center">
            <div>
              <AddToCartButton product={product} />
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href={'/products/' + `${product.id}`} passHref>
              <a style={{fontFamily: "'Unna', serif", color: "#7CB342"}}>
                Product Details
              </a>
            </Link>
          </div>
      </div>
    </>
  );
}

const OverflowInfoXs = ({product}) => {
  return(
    <>
      <div className={styles.overflowInfoXs}>
          <div className="text-center mx-2">
            <div>
              <AddToCartButton product={product} />
            </div>
          </div>
          <div className="text-center mx-2">
            <Link href={'/products/' + `${product.id}`} passHref>
              <a style={{fontFamily: "'Unna', serif", color: "#7CB342"}}>
                Product Details
              </a>
            </Link>
          </div>
      </div>
    </>
  );
}

export default function ItemCard({product}) {
    return(
        <>
        <Card className={styles.card}>
          <div className={styles.topImage}>
            <Image className={styles.cardImage} fluid src={product.image} />
            <Card.Title className={styles.cardTitle}>{product.name}</Card.Title>
            <div className={styles.divOverflowCartWrapper}>
              <OverflowInfo product={product} />
            </div>
          </div>
          <Card.Body className={styles.cardBody}>
              <div className={styles.cardPriceWrapper}>
                  <div className={styles.cardPrice}>{product.price}</div>
              </div>
              <div>
                <Card.Text className={styles.cardDescription}>{product.description}</Card.Text>
                <OverflowInfoXs product={product} />
                <div className={styles.productRating}>
                  <Rating readonly emptySymbol={<img src="../EmptyStar.png" className="icon" />} fullSymbol={<img src="../FullStar.png" className="icon" />} initialRating={product.rating} />
                </div>
              </div>
          </Card.Body>
        </Card>
        
    </>
    )
}   