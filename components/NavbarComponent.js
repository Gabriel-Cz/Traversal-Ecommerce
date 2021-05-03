import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { CartButton } from '../components/Buttons'

export const linksCategories = [
    { 
        name: 'Rings',
        link: '/rings',
        image: './CategoriesThumbnails/RingsThumbnail.jpg'
    },
    {
        name: 'Necks',
        link: '/necks',
        image: './CategoriesThumbnails/NecklacesThumbnail.jpg'
    },
    {
        name: 'Earring',
        link: '/earrings',
        image: './CategoriesThumbnails/EarringsThumbnail.jpg'
    },
    {
        name: 'Watches',
        link: '/watches',
        image: './CategoriesThumbnails/WatchesThumbnail.jpg'
    }
]

const ToggleStyle = {
    backgroundImage: "url('../public/Toogle.svg)"
}

export default function NavbarComponent() {
    return(
        <Container>
            <Navbar style={{backgroundColor: "transparent", boxShadow: "none", marginTop: "20px"}} collapseOnSelect expand="lg">
            <Navbar.Toggle style={{background: 'transparent', border: "none"}} aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
                TraverSal
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-center align-items-center align-items-lg-none w-xl-90 w-100">
                  {linksCategories.map(link => (
                      <Nav.Link key={link.name} href={"/categories" + link.link} className="mx-3">{link.name}</Nav.Link>
                  ))}
                </Nav>
            </Navbar.Collapse>
            <CartButton />
        </Navbar>
        </Container>
    )
}