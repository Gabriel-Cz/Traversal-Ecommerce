import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Rating from 'react-rating';

const addToCart = () => {
    return(
        <>
          <div>
            <em>Ship in only 3 days</em>
            <div>Here is the cart</div>
          </div>
        </>
    );
}

export default function Product() {
    
    return(
        <>
          <Container>
              <Row>
                  <Col md={4}>
                    <div>
                        <h1>Lorem Ispum</h1>
                    </div>
                    <div>
                        <h2>Description:
                            <p>adla sld oerwr asd</p>
                        </h2>
                        <h4>Material:
                            asdasdasd
                        </h4>
                        <h6>
                            General Rating: 4/6
                        </h6>
                    </div>
                    <div>
                        <addToCart></addToCart>
                    </div>
                  </Col>
                  <Col md={4}> 
                      <Image src="GoldRing1,jpg"></Image>
                  </Col>
              </Row>
          </Container>
        </>
    );
}