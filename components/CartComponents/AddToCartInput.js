import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import {AddToCartButton} from '../Buttons'
import styles from '../../styles/Cart.module.scss'

export default function AddToCartInput({id}) {
    const [quantity, setQuantity] = useState(0)
    const handleInput = e => setQuantity(e.target.value);
    return(
        <>
          <div className="d-flex">
                <input className={styles.input} type="number" onChange={handleInput} defaultValue="1" min="1" max="20"/>
                <AddToCartButton id={id} quantity={quantity} />
          </div>
        </>
    );
}