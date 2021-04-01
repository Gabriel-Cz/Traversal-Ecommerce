import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsActions';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ItemCard from './ItemCard';

export default function CategorieContent() {
    return(
        <>
          <Container fluid>
              <Row>
                 
                    <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                      <ItemCard productTitle="random"></ItemCard>
                    </Col>
               
              </Row>
          </Container>
        </>
    );
}