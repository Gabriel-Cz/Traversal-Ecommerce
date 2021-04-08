import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const linksCategories = [
    { 
        name: 'Rings',
        link: '/rings' 
    },
    {
        name: 'Necks',
        link: '/necks'
    },
    {
        name: 'Earring',
        link: '/earrings'
    },
    {
        name: 'Watches',
        link: '/watches'
    }
]

export default function NavbarComponent() {
    return(
        <Navbar style={{backgroundColor: "transparent", boxShadow: "none"}} collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
                TraverSal
            </Navbar.Brand>
            <Navbar.Toggle className="bi bi-instagram" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-center" style={{width: "90%"}}>
                  {linksCategories.map(link => (
                      <Nav.Link key={link.name} href={"/categories" + link.link} className="mx-3">{link.name}</Nav.Link>
                  ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}