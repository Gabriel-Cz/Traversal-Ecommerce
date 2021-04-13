import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerCard from '../components/CustomerCard'
import styles from '../styles/CustomersReviewsSection.module.scss'

const customers = [
    {
        id: "01",
        name: "Alejandra Quiroga",
        review: "One of my favorites sites to buy Gifts to my family and friend. Perfect for the asdasd as  erterteterter Christmas eve!",
        image: "customer1.jpg",
        rating: "3"
    },
    {
        id: "02",
        name: "Akzhim Nash",
        review: "Great shipping and Quality!!!",
        image: "customer2.jpg", 
        rating: "5"
    },
    {
        id: "03",
        name: "Carlos Mejilla",
        review: "The best thing that i could bought to my wife for her birthday was that light Shappire.",
        image: "customer3.jpg",
        rating: "4"
    }
]

function RightBlocks() {
    return(
        <div className={styles.blockBehind}>
        </div>
    );
}

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
                      <Col md={9} className="text-center pb-5">What's our customers are saying?</Col>
                  </Row>
                  <Row className="justify-content-md-center my-5 py-5">
                      {customers.map(customer => (
                          <Col md={5} lg={3} key={customer.id} className="mx-4">
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