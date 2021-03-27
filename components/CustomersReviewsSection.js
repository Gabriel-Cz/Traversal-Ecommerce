import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerCard from '../components/CustomerCard'

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

export default class CustomersReviewsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Container style={{boxSizing: "border-box", paddingTop: "100px", paddingBottom: "100px"}}>
                <Row className="justify-content-md-center" style={{fontSize: "2rem", fontFamily: "Unna", textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <Col md={9} className="text-center pb-5">What's our customers are saying?</Col>
                </Row>
                <Row className="justify-content-md-center my-5 py-5">
                    {customers.map(customer => (
                        <Col md={3} key={customer.id} className="mx-4">
                            <CustomerCard name={customer.name} image={customer.image} review={customer.review}></CustomerCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}