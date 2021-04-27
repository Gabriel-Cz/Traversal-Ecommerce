import React from 'react'
import Image from 'react-bootstrap/Image' 
import { CheckoutButton } from '../Buttons'
import styles from '../../styles/Product.module.scss'
import AddToCartInput from '../CartComponents/AddToCartInput'

export default function ProductInformation({title, material, description, rating, image}) {
    return(
        <>
              <div className="py-3 px-2 py-sm-4 px-sm-5">
                  <h2 className={styles.productName}>{title}</h2>
                  <div className={styles.productInformationImage}><Image fluid className="mt-2" src={image}></Image></div>
                  <p className={styles.productInformationDescription}><i>{description}</i></p>
                  <div className={styles.extraProductInfo}>
                    <div className="d-flex my-sm-2">
                       <h4 className={styles.headers}>Material:</h4><p className={styles.subheaders}>{material}</p>
                    </div>
                    <div className="d-flex my-sm-2">
                      <h4 className={styles.headers}>General Rating:</h4><p className={styles.subheaders}>{rating} of 5</p> 
                    </div>
                  </div>
              </div>
              <div className={styles.checkoutSection}>
                <div className="mx-2">
                  <AddToCartInput></AddToCartInput>
                </div>
                <div className="px-2 px-sm-5 mt-4 mb-3 d-flex justify-content-center text-center text-sm-left align-items-center" >
                  <small style={{fontFamily: "Lora"}}>Or you can checkout <b>{title}</b> directly</small>
                  <div className="ml-3" >
                  <CheckoutButton />
                  </div>
                </div>
              </div>
        </>
    );
}