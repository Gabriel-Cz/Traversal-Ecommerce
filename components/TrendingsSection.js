import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts } from '../store/actions/productsActions';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../components/ItemCard'
import store from '../store'
import { createWrapper } from 'next-redux-wrapper'
//*import styles from '../styles/TrendingSection.module.scss'*//

const containerStyle = {
    marginTop: "100px",
    marginBottom: "100px"
}

const trendingHeader = {
    fontFamily: '"Crimson Text", serif',
    color: "rgba(0,0,0,0.5)",
    fontSize: "22px",
}

const borderTrendingRow = {
    borderBottom: "4px double rgba(128,128.128,0.25)"
}

const theStore = () => store;
const wrapper = createWrapper(theStore)

export const getServerSideProps = wrapper.getServerSideProps(
    ({store, req, res, ...etc}) => {
        console.log('2. Page.getServerSideProps uses the store to dispatch things');
        store.dispatch(filterProducts('state', 'trending'));
    }
);

function TrendingSection() {
    const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);
    return(
        <>
          <Container style={containerStyle}>
              <Row className="justify-content-md-center" style={borderTrendingRow}>
                  <Col md="10" className="text-center my-5" style={trendingHeader}>Trending</Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {filteredProducts.map(product => (
                      <Col md={4} className="">
                        <ItemCard key={product.id} productId={product.id} productTitle={product.title} productImage={product.image} productDescription={product.description} productPrice={product.price} productRating={product.rating}></ItemCard>
                      </Col>
                  ))}
              </Row>
          </Container>
        </>
    )
}

export default TrendingSection;