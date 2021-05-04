import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { CheckoutButton, RemoveFromCartButton } from '../Buttons'
import { useShoppingCart } from 'use-shopping-cart'
import styles from '../../styles/Cart.module.scss' 

const headers = [
    'Product',
    'Quantity',
    'Price',
    'Checkout Single Product'
]

const resetButtonsStyle = {
    border: "none",
    backgroundColor: "transparent"
}

const ProductQuantity = ({currentQuantity, sku}) => {
    const [quantity, setQuantity] = useState(0)
    const handleInput = e => setQuantity(e.target.value);
    const { incrementItem, decrementItem } = useShoppingCart();
    return(
        <>
          <div className="d-flex">
              <span>{currentQuantity}</span>
              <div className="d-flex">
              <button style={resetButtonsStyle} onClick={() => decrementItem(sku)}>
                  <i className="bi bi-minus"></i>
              </button>
              <div>
                  <input className={styles.input} type="number" onChange={handleInput} defaultValue="1" min="1" max="20"/>
              </div>
              <button style={resetButtonsStyle} onClick={() => incrementItem(sku)}>
                  <i className="bi bi-plus"></i>
              </button>
              </div>
          </div>
        </>
    );
}

export default function TableContent({products}) {
    return(
        <>
          <Table className={styles.cartTable} responsive bordered hover>
              <thead>
                  <tr>
                      {headers.map(header => (
                          <th>{header}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                      {products.map(product => (
                          <tr>
                              <td>{product.title}</td>
                              <td>
                                  <ProductQuantity sku={product.sku} currentQuantity={product.quantity} />
                              </td>
                              <td>{product.price}</td>
                              <td classname="d-flex">
                                  <CheckoutButton product={product} />
                                  <RemoveFromCartButton product={product.sku}></RemoveFromCartButton>
                              </td>
                          </tr>
                      ))}
              </tbody>
          </Table>
        </>
    );
} 

