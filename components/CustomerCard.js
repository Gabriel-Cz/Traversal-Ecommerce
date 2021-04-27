import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Rating from 'react-rating'
import styles from '../styles/CustomerCard.module.scss'

const VerifiedIcon = () => {
    return(
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            </svg>
        </i>
    );
}

export default function CustomerCard(props) {

    return(
        <Card bsPrefix={styles.card}>
            <Image src={props.image} className={styles.customCard} roundedCircle />
            <Card.Body bsPrefix={styles.cardBody} className="text-center p-3">
                <Card.Title bsPrefix={styles.cardTitleName} className="mt-3">{props.name}</Card.Title>
                <Card.Text bsPrefix={styles.cardTextReview} className="mt-4 px-4">{props.review}</Card.Text>
                <Rating initialRating={props.rating} readonly emptySymbol={<img src="./EmptyStar.png" className="icon" />} fullSymbol={<img src="./FullStar.png" className="icon" />} initialRating={props.productRating} />
            </Card.Body>
            <Card.Footer bsPrefix={styles.cardFooter}>
              <VerifiedIcon /> <em>Verified</em>
            </Card.Footer>
        </Card>
    );
}