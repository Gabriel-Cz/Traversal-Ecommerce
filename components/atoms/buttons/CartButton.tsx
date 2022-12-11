import { useShoppingCart } from 'use-shopping-cart';
import Link from 'next/link';
import styles from './Buttons.module.scss';

export const CartButton: React.FC = () => {
  const { cartCount } = useShoppingCart()
  return (
    <Link href="/cart" passHref>
      <a>
        <button className={styles.cartButton}>
          <span className="d-flex">
            <h4>
              <i className="bi bi-cart2"></i>
            </h4>
            <h6>{cartCount}</h6>
          </span>
        </button>
      </a>
    </Link>
  );
}