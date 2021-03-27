import React from 'react'
import { Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import styles from '../styles/CustomerCard.module.scss'

export default function CustomerCard(props) {

    return(
        <Card bsPrefix={styles.card}>
            <Image src={props.image} className={styles.customCard} roundedCircle />
            <Card.Body bsPrefix={styles.cardBody} className="text-center p-3">
                <Card.Title bsPrefix={styles.cardTitle} className="mt-3">{props.name}</Card.Title>
                <Card.Text bsPrefix={styles.cardText} className="mt-4 px-4">{props.review}</Card.Text>
            </Card.Body>
            <Card.Footer bsPrefix={styles.cardFooter}>
            <i className="bi bi-star-fill text-warning mx-1"></i>
            <i className="bi bi-star-fill text-warning mx-1"></i>
            <i className="bi bi-star-fill text-warning mx-1"></i>
            <i className="bi bi-star-fill text-warning mx-1"></i>
            </Card.Footer>
        </Card>
    );
}