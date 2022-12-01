import React from 'react'
import Image from 'react-bootstrap/Image'
import { CheckoutButton, AddToCartButton, CustomLink } from '@/components/atoms';
import { ProductType } from 'types/Product';
import getStripe from '@/utils/get-stripe';
import axiosInstance from '@/utils/axios-instance';
import styles from '../../styles/ProductInformation.module.scss'

export const ProductInformation: React.FC<ProductType> = ({ product }) => {

  const handleCheckout = async (url: string, productDetails: ProductType) => {
		try {
			const stripe = await getStripe();
			const response = await axiosInstance.post(url, productDetails);
			const session = await response.data;
			stripe.redirectToCheckout({
				sessionId: session.id
			});
		} catch (error) {
			throw new Error(error);
		}
	}

  return (
    <>
      <div className="py-3 px-2 py-sm-4 px-sm-5">
        <h2 className={styles.productName}>{product.name}</h2>
        <div className={styles.productInformationImage}>
          <Image fluid src={product.image}></Image>
        </div>
        <p className={styles.productInformationDescription}>
          <i>{product.description}</i>
        </p>
        <div className={styles.extraProductInfo}>
          <div className="d-flex my-sm-0">
            <h4 className={styles.headers}>Element:</h4>
            <span className={styles.subheaders}>
              <CustomLink
                to={`/elements/${product.type}`}
                className={styles[`link-${product.type}`]}
              >
                {product.type}
              </CustomLink>
            </span>
          </div>
          <div className="d-flex my-sm-0">
            <h4 className={styles.headers}>General Rating:</h4>
            <span className={styles.subheaders}>{product.rating} of 5</span>
          </div>
          <div className="d-flex my-sm-0">
            <h4 className={styles.headers}>Price:</h4>
            <span className={styles.subheaders}>{product.price}</span>
          </div>
        </div>
      </div>
      <div className={styles.checkoutSection}>
        <div className="mx-2">
          <AddToCartButton product={product}></AddToCartButton>
        </div>
        <div
          className="px-2 px-sm-5 mt-4 mb-3 d-flex justify-content-center text-center text-sm-left align-items-center"
        >
          <small style={{ fontFamily: "Lora" }}>
            Or you can checkout <b>{product.name}</b> directly
          </small>
          <div className="ml-3" >
            <CheckoutButton product={product} onCheckout={handleCheckout} />
          </div>
        </div>
      </div>
    </>
  );
}