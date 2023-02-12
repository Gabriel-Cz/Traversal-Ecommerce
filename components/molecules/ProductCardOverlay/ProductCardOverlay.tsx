import React from 'react';
import { AddToCartButton } from "@/components/atoms";
import { ProductType } from "@/types";
import Link from "next/link";
import styles from './ProductCardOverlay.module.scss';

interface ProductCardOverlayProps {
  product: ProductType;
  isMobile?: boolean
}

export const ProductCardOverlay: React.FC<ProductCardOverlayProps> = ({ product, isMobile }) => {
  return (
    !isMobile ? (
      <div className={styles.overflowInfo}>
        <div className="text-center justify-content-center d-flex justify-items-center">
          <AddToCartButton product={product} />
        </div>
        <div className="text-center mt-5">
          <Link href={'/products/' + `${product.id}`} passHref>
            <a style={{ fontFamily: "'Unna', serif", color: "#7CB342" }}>
              Product Details
            </a>
          </Link>
        </div>
      </div>
    ) : (
      <div className={styles.overflowInfoXs}>
        <div className="text-center mx-2">
          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
        <div className="text-center mx-2">
          <Link href={`/products/${product.id}`} passHref>
            <a className={styles.detailsLink}>
              Product Details
            </a>
          </Link>
        </div>
      </div>
    )
  );
}

ProductCardOverlay.defaultProps = {
  isMobile: false,
}