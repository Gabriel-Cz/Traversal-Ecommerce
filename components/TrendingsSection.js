import React from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCard from '../components/ItemCard'

const trendingItems = [
    {
        name: "Zaphires",
        image: "ProductsImages/SilverWatch1.jpg",
        description: "Beautigul Shappire stone made with greya dasd and alasd, the stone has benn...",
        price: "550",
    },
    {
        name: "Diamonds",
        image: "ProductsImages/SilverEarring1.jpg",
        description: "Beautigul Shappire stone made with greya dasd and alasd, the stone has benn...",
        price: "600",
    },
    {
        name: "Random Product",
        image: "ProductsImages/GoldEarring1.jpg",
        description: "Beautigul Shappire stone made with greya dasd and alasd, the stone has benn...",
        price: "4000",
    },
]

const trendingHeader = {
    fontFamily: '"Crimson Text", serif',
    color: "rgba(0,0,0,0.5)",
    fontSize: "22px" 
}

export default function TrendingSection() {
    return(
        <>
          <Container className="mt-5">
              <Row className="border-bottom justify-content-md-center">
                  <Col md="10" className="text-center my-2" style={trendingHeader}>Trending</Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {trendingItems.map(item => (
                      <Col md={4} className="">
                        <ItemCard key={item.name} productName={item.name} productImage={item.image} productDescription={item.description} productPrice={item.price}></ItemCard>
                      </Col>
                  ))}
              </Row>
          </Container>
        </>
    )
}