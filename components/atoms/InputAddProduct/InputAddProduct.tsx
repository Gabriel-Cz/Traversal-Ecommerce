import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import styles from '../../styles/Cart.module.scss'

export interface InputAddProductProps {
  onAdd: React.MouseEventHandler
  onChange: React.ChangeEventHandler
  quantity?: string | number
}

const defaultProps = {
  quantity: 0
}

const InputAddProduct: React.FC<InputAddProductProps> = ({ onAdd, onChange, quantity }) => {
  const [showIcon, setShowIcon] = useState(false);

	const addItemAndShowToast = (e: React.MouseEvent<HTMLButtonElement>) => {
		setShowIcon(!showIcon);
    onAdd(e);
		setTimeout(() => {
			setShowIcon(true);
		}, 700);
	}
  return (
    <>
      <div className="d-flex">
        <input
          className={styles.input}
          type="number"
          value={quantity}
          onChange={onChange}
          defaultValue="1"
          min="1"
          max="20"
        />
        <Button onClick={addItemAndShowToast}>
          {showIcon ? (
            <i className="bi bi-check"></i>  
          ) : (
            `Add To Cart`
          )}
        </Button>
      </div>
    </>
  );
}

InputAddProduct.defaultProps = defaultProps;
export { InputAddProduct };