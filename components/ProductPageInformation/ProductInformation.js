import React from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image' 
import { CheckoutButton, AddToCartButton } from '../Buttons/Buttons'
import styles from '../../styles/Product.module.scss'

const ElementLink = ({link}) => {
  return(
    <>
      <Link href={`/elements/${link}`} passHref>
        <a className={styles[`link-${link}`]}>
          {link}
        </a>
      </Link>
    </>
  );
}

export default function ProductInformation({product}) {
    return(
        <>
              <div className="py-3 px-2 py-sm-4 px-sm-5">
                  <h2 className={styles.productName}>{product.name}</h2>
                  <div className={styles.productInformationImage}>
                    <Image fluid src={product.image}></Image>
                  </div>
                  <p className={styles.productInformationDescription}><i>{product.description}</i></p>
                  <div className={styles.extraProductInfo}>
                    <div className="d-flex my-sm-0">
                       <h4 className={styles.headers}>Element:</h4><span className={styles.subheaders}><ElementLink link={product.element} /></span>
                    </div>
                    <div className="d-flex my-sm-0">
                      <h4 className={styles.headers}>General Rating:</h4><span className={styles.subheaders}>{product.rating} of 5</span> 
                    </div>
                    <div className="d-flex my-sm-0">
                      <h4 className={styles.headers}>Price:</h4><span className={styles.subheaders}>{product.price}</span> 
                    </div>
                  </div>
              </div>
              <div className={styles.checkoutSection}>
                <div className="mx-2">
                  <AddToCartButton product={product}></AddToCartButton>
                </div>
                <div className="px-2 px-sm-5 mt-4 mb-3 d-flex justify-content-center text-center text-sm-left align-items-center" >
                  <small style={{fontFamily: "Lora"}}>Or you can checkout <b>{product.name}</b> directly</small>
                  <div className="ml-3" >
                  <CheckoutButton product={product} />
                  </div>
                </div>
              </div>
        </>
    );
}