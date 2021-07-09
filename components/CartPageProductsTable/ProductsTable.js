import React from 'react'
import Table from 'react-bootstrap/Table'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import { CheckoutButton, RemoveFromCartButton } from '../Buttons/Buttons'
import { useShoppingCart } from 'use-shopping-cart'
import styles from '../../styles/Cart.module.scss' 

const headers = [
    'Product',
    'Quantity',
    'Total Price',
    'Checkout Single Product'
]

const resetButtonsStyle = {
    border: "none",
    backgroundColor: "transparent"
}

const ProductQuantity = ({currentQuantity, sku}) => {
    const { incrementItem, decrementItem } = useShoppingCart();
    return(
        <>
          <div className="d-flex justify-content-center">
              <div className="d-flex">
              <button style={resetButtonsStyle} onClick={() => decrementItem(sku)}>
                  <i className="bi bi-dash"></i>
              </button>
              <div className={styles.ProductQuantity}>
                  <span>{currentQuantity}</span>
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
                              <td className="w-25">
                                 <Link href={`/products/${product.id}`} passHref>
                                   <a style={{textDecoration: "none", color: "black"}}>
                                   <div className={styles.avatarGrid}>   
                                    <div className={styles.cols2}>
                                     <Image className={styles.productImage} rounded fluid src={product.image}></Image>
                                    </div>
                                    <div className={styles.cols4}>
                                      <span className={styles.productName}>{product.name}</span>
                                     </div>
                                   </div>
                                   </a>
                                 </Link>
                              </td>
                              <td className="pt-4">
                                  <ProductQuantity sku={product.sku} currentQuantity={product.quantity} />
                              </td>
                              <td className="pt-4">{`$${product.price.replace('$', '') * product.quantity}.00`}</td>
                              <td className="pt-4">
                                  <div className="d-flex justify-content-center">
                                      <div className="mx-1" sm={3}>
                                        <CheckoutButton product={product} />
                                      </div>
                                      <div className="mx-1" sm={3}>
                                        <RemoveFromCartButton product={product}></RemoveFromCartButton>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                      ))}
              </tbody>
          </Table>
        </>
    );
} 

