import React from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import AddToCartInput from '../components/CartComponents/AddToCartInput'
import styles from '../styles/ItemCard.module.scss'
import Rating from 'react-rating'

const OverflowInfo = ({product}) => {
  return(
    <>
      <div className={styles.overflowInfo}>
          <div className="text-center justify-content-center d-flex justify-items-center">
            <div>
              <AddToCartInput product={product} />
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href={'/products/' + `${product.id}`} passHref>
              <a style={{fontFamily: "'Unna', serif"}}>
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
          <div className="text-center justify-content-center d-flex justify-items-center">
            <div>
              <AddToCartInput product={product} />
            </div>
          </div>
          <div className="text-center mt-3">
            <Link href={'/products/' + `${product.id}`} passHref>
              <a style={{fontFamily: "'Unna', serif"}}>
                Product Details
              </a>
            </Link>
          </div>
      </div>
    </>
  );
}

export default function ItemCard({product}) {
    /* const [product, setProduct] = seState('')
     useEffect(() => {
      setProduct({
        id: prop.,
          "sku": "S8",
          "title": "consequatur autem ",
          "description" : "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",  
          "price": "$500",
          "image": "../ProductsImages/SilverWatch2.jpg",
          "rating": 3,
          "state": "",
          "categorie": "watches",
          "element": "silver",
          "currency": "USD"
      })
    }, [input]) */
    return(
        <>
        <Card className={styles.card}>
          <div className={styles.topImage}>
            <Image className={styles.cardImage} fluid src={product.image} />
            <Card.Title className={styles.cardTitle}>{product.title}</Card.Title>
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
                  <Rating readonly emptySymbol={<img src="./EmptyStar.png" className="icon" />} fullSymbol={<img src="./FullStar.png" className="icon" />} initialRating={product.rating} />
                </div>
              </div>
          </Card.Body>
        </Card>
        
    </>
    )
}   