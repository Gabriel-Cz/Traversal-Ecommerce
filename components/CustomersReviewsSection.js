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
        <div className={styles.rightBlocks}>
            <svg width="300" height="465" viewBox="0 0 300 465" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M300 465L78.9129 267.464L68 148L300 352.871V465Z" fill="url(#paint0_linear)" fill-opacity="0.25"/>
<path d="M300 300L98.9251 126.144L89 21L300 201.312V300Z" fill="url(#paint1_linear)" fill-opacity="0.25"/>
<path d="M300 393L48.4181 168.046L36 32L300 265.307V393Z" fill="url(#paint2_linear)" fill-opacity="0.25"/>
<line x1="299.668" y1="358.374" x2="68.6681" y2="153.374" stroke="white" stroke-opacity="0.25"/>
<line x1="299.67" y1="269.376" x2="95.6702" y2="90.3758" stroke="white" stroke-opacity="0.25"/>
<defs>
<linearGradient id="paint0_linear" x1="184" y1="465" x2="184" y2="148" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.5" y1="300" x2="194.5" y2="21" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="168" y1="393" x2="168" y2="32" gradientUnits="userSpaceOnUse">
<stop stop-color="#5C81AD"/>
<stop offset="1" stop-color="#4F8095"/>
</linearGradient>
</defs>
</svg>

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
            <div className={styles.sectionContainer}>
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
              <RightBlocks />
            </div>
            </>
        );
    }
}