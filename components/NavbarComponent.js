import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const links = [
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
        name: 'Watchers',
        link: '/watchers'
    }
]

export default function NavbarComponent() {
    return(
        <Navbar style={{backgroundColor: "transparent"}} collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
                TraverSal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-center" style={{width: "90%"}}>
                  {links.map(link => (
                      <Nav.Link key={link.name} href={"/categories" + link.link} className="mx-3">{link.name}</Nav.Link>
                  ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}