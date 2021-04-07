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
<path d="M0 0L221.087 197.536L232 317L0 112.129V0Z" fill="url(#paint0_linear)" fill-opacity="0.25"/>
<path d="M0 165L201.075 338.856L211 444L0 263.688V165Z" fill="url(#paint1_linear)" fill-opacity="0.25"/>
<path d="M0 72L251.582 296.954L264 433L0 199.693V72Z" fill="url(#paint2_linear)" fill-opacity="0.25"/>
<line x1="0.33188" y1="106.626" x2="231.332" y2="311.626" stroke="white" stroke-opacity="0.25"/>
<line x1="0.329774" y1="195.624" x2="204.33" y2="374.624" stroke="white" stroke-opacity="0.25"/>
<path d="M0 0L221.087 197.536L232 317L0 112.129V0Z" fill="url(#paint3_linear)" fill-opacity="0.25"/>
<path d="M0 165L201.075 338.856L211 444L0 263.688V165Z" fill="url(#paint4_linear)" fill-opacity="0.25"/>
<path d="M0 72L251.582 296.954L264 433L0 199.693V72Z" fill="url(#paint5_linear)" fill-opacity="0.25"/>
<line x1="0.33188" y1="106.626" x2="231.332" y2="311.626" stroke="white" stroke-opacity="0.25"/>
<line x1="0.329774" y1="195.624" x2="204.33" y2="374.624" stroke="white" stroke-opacity="0.25"/>
<defs>
<linearGradient id="paint0_linear" x1="116" y1="0" x2="116" y2="317" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="105.5" y1="165" x2="105.5" y2="444" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="132" y1="72" x2="132" y2="433" gradientUnits="userSpaceOnUse">
<stop stop-color="#5C81AD"/>
<stop offset="1" stop-color="#4F8095"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="116" y1="0" x2="116" y2="317" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#415B7A"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="105.5" y1="165" x2="105.5" y2="444" gradientUnits="userSpaceOnUse">
<stop stop-color="#4F8095"/>
<stop offset="1" stop-color="#41787A"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="132" y1="72" x2="132" y2="433" gradientUnits="userSpaceOnUse">
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
            <section className={styles.customSection}>
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
            </section>
            </>
        );
    }
}