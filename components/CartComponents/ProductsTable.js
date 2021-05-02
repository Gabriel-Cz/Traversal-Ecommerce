import React from 'react'
import Table from 'react-bootstrap/Table'
import { CheckoutSingleProductButton } from '../Buttons'

const headers = [
    'Product',
    'Quantity',
    'Price',
    'Checkout Single Product'
]

export const TableContent = ({products}) => {
    return(
        <>
          <Table>
              <thead>
                  <tr>
                      {headers.map(header => (
                          <th>{header}</th>
                      ))}
                  </tr>
                  <tbody>
                      {products.map(product => (
                          <tr>
                              <td>{product.name}</td>
                              <td>{product.quantity}</td>
                              <td>{product.price}</td>
                              <td>
                                  <CheckoutSingleProductButton product={product} />
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </thead>
          </Table>
        </>
    );
} 

export default function ProductsTable({products}) {
    if(products === null) {
        return(
            <>
            <h1>Your cart is empty go to shop.</h1>
            </>
        );
    } else {
        return(
            <TableContent products={products} />
        );
    }
} 