import React, { useState } from 'react'
import {AddToCartButton} from '../UtilsComponents/Buttons'
import styles from '../../styles/Cart.module.scss'

export default function AddToCartInput({product}) {
    const [quantity, setQuantity] = useState(0)
    const handleInput = e => setQuantity(e.target.value);
    return(
        <>
          <div className="d-flex">
                <input className={styles.input} type="number" onChange={handleInput} defaultValue="1" min="1" max="20"/>
                <AddToCartButton product={product} quantity={quantity} />
          </div>
        </>
    );
}