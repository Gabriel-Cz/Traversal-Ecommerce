import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import styles from '../styles/FooterComponent.module.scss'


export default class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer className={styles.footer}>
                <Jumbotron className={styles.customJumbotron}>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={8} md={10} lg={6} className="justify-content-center">
                            <div className="text-center" >
                                <h1 className={styles.footerSlogan}>We belive in the Meaning, Beauty, Powerful that Jewelry can be.</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.rowContentWrapper}>
                        <Col xs={4} md={2} lg={1}>
                            <div className="text-center">
                                <h1 className={styles.headers}>Get Help</h1>
                                <div className={styles.links}>
                                    <a>Client Support</a>
                                    <a>Shippment Statement</a>
                                    <a>Products Returns</a> 
                                </div>
                            </div>
                        </Col>
                        <Col xs={4} md={2} lg={1}>
                            <div className="text-center">
                                <h1 className={styles.headers}>Products</h1>
                                <div className={styles.links}>
                                    <a>Necks</a>
                                    <a>Watchers</a>
                                    <a>Earrings</a>
                                    <a>Rings</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4} md={2} lg={1}>
                            <div className="text-center">
                                <h1 className={styles.headers}>Contact Us</h1>
                                <div className={styles.linksMedia}>
                                    <i className="bi bi-instagram"></i>
                                    <i className="bi bi-twitter"></i>
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                            </div>
                        </Col>
                        <Col xs={5} md={3} className="d-flex align-items-center justify-content-center">
                                <Link href="/about" passHref>
                                    <a>
                                      <h1 className={styles.aboutLink}>
                                      About Us
                                      </h1>
                                    </a>
                                </Link>
                        </Col>
                        <Col xs={7} md={3}>
                            <h1 className={styles.newsLetterForm}>Suscribe to our Newsletter</h1>
                            <div>
                                <InputGroup>
                                    <FormControl className={styles.customInput} placeholder="someadress@someemail.com" />
                                    <InputGroup.Append>
                                        <Button className={styles.customButton} variant="primary">Suscribe</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col xs={10} md={2}>
                            <div className={styles.smallLettersWrapper}>
                                <small>
                                   TraverSal - 2021
                                </small>
                            </div>
                        </Col>
                    </Row>
            </Jumbotron>
            </footer>
        );
    }
}