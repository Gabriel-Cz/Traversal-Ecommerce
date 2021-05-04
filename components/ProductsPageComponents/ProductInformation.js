import React from 'react'
import Image from 'react-bootstrap/Image' 
import { CheckoutButton } from '../Buttons'
import AddToCartInput from '../CartComponents/AddToCartInput'
import styles from '../../styles/Product.module.scss'

export default function ProductInformation({product}) {
    return(
        <>
              <div className="py-3 px-2 py-sm-4 px-sm-5">
                  <h2 className={styles.productName}>{product.title}</h2>
                  <div className={styles.productInformationImage}><Image fluid className="mt-2" src={product.image}></Image></div>
                  <p className={styles.productInformationDescription}><i>{product.description}</i></p>
                  <div className={styles.extraProductInfo}>
                    <div className="d-flex my-sm-2">
                       <h4 className={styles.headers}>Material:</h4><p className={styles.subheaders}>{product.material}</p>
                    </div>
                    <div className="d-flex my-sm-2">
                      <h4 className={styles.headers}>General Rating:</h4><p className={styles.subheaders}>{product.rating} of 5</p> 
                    </div>
                  </div>
              </div>
              <div className={styles.checkoutSection}>
                <div className="mx-2">
                  <AddToCartInput product={product}></AddToCartInput>
                </div>
                <div className="px-2 px-sm-5 mt-4 mb-3 d-flex justify-content-center text-center text-sm-left align-items-center" >
                  <small style={{fontFamily: "Lora"}}>Or you can checkout <b>{product.title}</b> directly</small>
                  <div className="ml-3" >
                  <CheckoutButton />
                  </div>
                </div>
              </div>
        </>
    );
}