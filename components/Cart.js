import React, { useState } from 'react'
import { addItems } from '../store/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux';

const List = ({products}) => {
    return(
        <ul>
            {products.map(product => (
                <li>{product}</li>
            ))}
        </ul>
    );
}

const ErrorInCart = () => {
    return(
        <h1>AN Error ocuerred go to shop</h1>
    );
}

export default function Cart() {
    const [input, setInput] = useState('')
    const handleInput = e => setInput(e.target.value);
    const {productsInCart} = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const addProducts = () => {
        dispatch(addItems(input.split(',')));
    }
    return(
        <>
          <div>
              <h1>
                  <h1>{productsInCart 
                       ?
                       <List products={productsInCart}></List>
                       :
                       <ErrorInCart></ErrorInCart> 
                    }</h1>
                  <input type="text" onChange={handleInput} value={input} />
                  <button type="submit" onClick={addProducts}>add products</button>
              </h1>
          </div>
        </>
    );
}