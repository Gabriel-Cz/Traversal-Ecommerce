import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerCard from '../CustomerReviewCard/CustomerCard'
import styles from './CustomersReviewsSection.module.scss'

const customers = [
    {
        id: "01",
        name: "Alexandra Quiroga",
        review: "One of my favorites sites to buy Gifts to my family and friend. And it's Perfect for thw Christmas eve!",
        image: "./CustomersImages/customer1.jpg",
        rating: "3"
    },
    {
        id: "02",
        name: "Akzhim Nash",
        review: "Great shipping and Quality!",
        image: "./CustomersImages/customer2.jpg", 
        rating: "5"
    },
    {
        id: "03",
        name: "Carlos Mejilla",
        review: "The best thing that i could bought to my wife for our aniversary, was that light Shappire.",
        image: "./CustomersImages/customer3.jpg",
        rating: "4"
    }
]

export default class CustomersReviewsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <section className={styles.customSection}>
              <div className={styles.blockBehind}></div>
              <Container className={styles.customContainer}>
                  <Row className={styles.header}>
                      <Col xs={11} md={9} className="text-center py-sm-5">What's our customers are saying?</Col>
                  </Row>
                  <Row className="justify-content-center my-2 py-5">
                      {customers.map(customer => (
                          <Col xs={9} sm={6} md={5} lg={3} key={customer.id} className="mx-2 mx-sm-4">
                              <CustomerCard name={customer.name} image={customer.image} review={customer.review} rating={customer.rating}></CustomerCard>
                          </Col>
                    ))}
                  </Row>
              </Container>
            </section>
            </>
        );
    }
}