import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import {AddToCartButton} from '../Buttons'
import styles from '../../styles/Cart.module.scss'

export default function AddToCartInput() {
    return(
        <>
          <div className="d-flex">
                <input className={styles.input} type="number" defaultValue="1" min="1" max="20"/>
                <AddToCartButton />
          </div>
        </>
    );
}