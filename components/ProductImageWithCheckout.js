import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const buttonStyle = {
    backgroundColor: "linear-gradient(92.21deg, #A3C163 0%, #A4D43F 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
}

export const CheckoutButton = () => {
    return(
      <button style={buttonStyle} className="px-4 py-2">Checkout</button>
    );
}

export default function ProductImageWithCheckout(props) {
    return(
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <Image src={props.image} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-center">
                <CheckoutButton className="mt-4"></CheckoutButton>
              </Col>
            </Row>
          </Container>
        </>
    );
}