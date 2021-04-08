import React, { useState } from 'react'
import { addItems } from '../store/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'react-bootstrap '
import styles from '../styles/Cart.module.scss';

const ProductsInCart = ({products}) => {
    return(
        <ul>
            {products.map(product => (
                <div style={{display: "flex"}}>
                    <li>{product.title} <Image src={product.image}></Image> <em>{product.price}</em></li> 
                </div>
            ))}
        </ul>
    );
}

const ErrorInCart = () => {
    return(
        <h1>You still dont have any products in your cart, please <Link href="/" passHref><a style={styles.a}>continue shopping.</a></Link></h1>
    );
}

export default function Cart() {
    const productsInCart = useSelector(state => state.cartReducer)
    return(
        <>
          <div>
            {productsInCart.length > 0 
              ? 
               <ProductsInCart products={productsInCart}/>  
              : 
               <ErrorInCart />  
            } 
          </div>
        </>
    );
}