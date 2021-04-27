import React from 'react'
import { wrapper } from '../../store'
import { getProduct } from '../../store/actions/productsActions'
import Container from 'react-bootstrap/Container'
import ProductInformation from '../../components/ProductsPageComponents/ProductInformation'
import ProductImageWithCheckout from '../../components/ProductsPageComponents/ProductImageWithCheckout'
import Image from 'react-bootstrap/Image';
import styles from '../../styles/Product.module.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.dispatch(getProduct('G3'))
})

const AddToCart = () => {
    return(
        <>
          <div>
            <em>Ship in only 3 days</em>
            <div>Here is the cart</div>
          </div>
        </>
    );
}

function Product() {
  const product = {
    "id": "G3",
    "title": "Gold Ring",
    "description" : "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt",  
    "price": "$349",
    "image": "../ProductsImages/GoldRing1.jpg",
    "rating": 4.5,
    "state": "trending",
    "categorie": "rings"
  }; 
  return(
        <>
          <Container fluid className={styles.container}>
          <div className={styles.productCard}>
              <Row class="d-flex justify-content-center align-items-center">
                  <Col xs={12} sm={6}>
                    <ProductInformation title={product.title} description={product.description} rating={product.rating} type={product.type}></ProductInformation>
                  </Col>
                  <Col sm={6} sm={6} className="my-0 mx-0 py-0 px-0">
                    <Image src={product.image} fluid className="ma-0 pa-0 h-100"/>
                  </Col>
              </Row>
          </div>
          </Container>
        </>
    );
}

export default Product;

