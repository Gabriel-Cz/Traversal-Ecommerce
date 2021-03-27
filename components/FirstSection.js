import React from 'react'
import CarouselCards from '../components/CarouselCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { SeeMoreButton } from '../components/ProductButtons'
import data from '../public/productsData.json'
import styles from '../styles/FirstSection.module.scss'

const ultimateDeals = [
    {
        id: "G1",
        title: "Zaphire Light",
        description: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",  
        image: "ProductsImages/GoldEarring1.jpg",
        rating: "",
        price: "$250",
        state: "trending"
    },
      {
        id: "G2",
        title: "sunt qui excepturi placeat culpa",
        description: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",  
        image: "ProductsImages/GoldEarring2.jpg",
        price: "$250",
        state: "trending"
    },
      {
        id: "G3",
        title: "omnis laborum odio",
        description: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit adssaaaaaaaaaaaaaaaaaaaaaaaaaaa",  
        image: "ProductsImages/GoldRing1.jpg",
        price: "$150",
        state: "trending"
      },
]

const product = data[1];

const MoreInfo = () => {
    return(
        <>
        <div className={styles.moreInfoContainer}>
          <Image className={styles.img} src="EllipseBlue.png" />
          <div className={styles.moreInfoWrapper}>
              <p>Find Out why traversal is one of the Jewellery Market Leads around the world... </p>
              <SeeMoreButton></SeeMoreButton>
          </div>
        </div>
        </>
    );
}

export default function FirstSection() {
    return(
        <>
          <Container fluid className={styles.customContainer}>
              <Row className="justify-content-md-center pb-5">
                  <Col xs={12} sm={5} md={7} lg={6} xl={6} xxl={5} className=" mt-5">
                      <MoreInfo></MoreInfo>
                  </Col>
                  <Col xs={12} sm={7} md={5} lg={6} xl={4} xxl={3}>
                      <div className={styles.carouselWrappers}>
                          <div className={styles.ribbon}>
                              Ultimate Deals
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                          </div>
                          <CarouselCards carouselItems={ultimateDeals}></CarouselCards>
                      </div>
                  </Col>
              </Row>
          </Container>
        </>
    )
}