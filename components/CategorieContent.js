import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getProducts } from '../store/actions/productsActions';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ItemCard from './ItemCard';

export default function CategorieContent() {
  const {products} = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  const dispatchAction = dispatch(getProducts());
    return(
        <>
          <Container fluid>
              <Row>
                 <button onClick={() => dispatchAction}>
                   
                 </button>
              </Row>
          </Container>
        </>
    );
}