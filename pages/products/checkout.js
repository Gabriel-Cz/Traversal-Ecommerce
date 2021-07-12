import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { linksCategories } from '../../components/AppNavbar/AppNavbar'
import styles from '../../styles/Cart.module.scss'

const styleVariants = {
    error: "red",
    success: "green"
}

export const CheckoutMessage = ({message, variant}) => {
    return(
        <>
          <Container className={styles.containerMessageWrapper}>
              <div className="d-flex flex-column justify-content-center align-items-center py-4">
                  <h1 className={styles.messageHeader}>
                      <span style={{color: styleVariants[variant]}}>{message}</span> Continue shopping.
                  </h1>
                  <Row className="mt-5" justify-content-center>
                      {linksCategories.map(link => (
                          <Col xs={6} md={3} className="mt-4 mt-md-0" key={link.name}>
                              <Link href={'/categories' + link.path} passHref>
                                <a>
                                <div className={styles.thumbnailContainer}>
                                <div className={styles.thumbnailOverflow}>
                                    <span>
                                      {link.name}
                                    </span>
                                </div>
                                <Image className="py-0 px-0 my-0 mx-0" fluid src={link.image} />
                              </div>
                                </a>
                              </Link>
                          </Col>
                      ))}
                  </Row>
              </div>
          </Container>
        </>
    );
}

export default function checkout() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setMessage('Successfully Order.');
            setColor('success');
        }
        if (query.get("canceled")) {
            setMessage('Order Canceled.');
            setColor('error');
        }
    
    }, []);
    return(
        <>
          <div>
            <CheckoutMessage message={message} variant={color} />
          </div>
        </>
    )
}