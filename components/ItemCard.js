import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { FormControl, InputGroup } from 'react-bootstrap'
import styles from '../styles/ItemCard.module.scss'

const InputCartQuantity = () => {
    return(
        <InputGroup>
          <InputGroup.Prepend>
              <Button>-</Button>
          </InputGroup.Prepend>
          <FormControl placeholder="1" />
          <InputGroup.Append>
              <Button>+</Button>
          </InputGroup.Append>
          <InputGroup.Append className="ml-2">
               <Button>Add to cart</Button>
          </InputGroup.Append>
        </InputGroup>
    );
}

export default function ItemCard(props) {
    return(
        <>
      <Card className={styles.card}>
          <Card.Img className={styles.cardImage} fluid src={props.productImage}></Card.Img>
          <Card.Body className={styles.cardBody}>
              <div className={styles.cardTitle}>
                  <Card.Title>{props.productTitle}</Card.Title>
                  <div className={styles.cardPrice}>{props.productPrice}</div>
              </div>
              <Card.Text className={styles.cardText}>{props.productDescription}</Card.Text>
          </Card.Body>
      </Card>
    </>
    )
} 