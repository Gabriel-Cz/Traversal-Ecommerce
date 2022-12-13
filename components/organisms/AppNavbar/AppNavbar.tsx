import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { CartButton } from '@/components/atoms';
import { BaseNavLinkType } from '@/types';
import styles from './AppNavbar.module.scss';

interface AppNavbarProps {
	linksCategories: BaseNavLinkType[];
}

export const AppNavbar: React.FC<AppNavbarProps> = ({ linksCategories }) => {
	return (
		<Container>
			<Navbar style={{backgroundColor: "transparent", boxShadow: "none", marginTop: "20px"}} collapseOnSelect expand="lg">
				<Navbar.Toggle style={{ background: 'transparent', border: "none" }} aria-controls="responsive-navbar-nav" />
				<Navbar.Brand href="/">
					TraverSal
				</Navbar.Brand>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="d-flex justify-content-center align-items-center align-items-lg-none w-xl-90 w-100">
						{linksCategories.map(link => (
							<Nav.Link key={link.name} href={"/categories" + link.path} className="mx-3">
								{link.name}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
				<CartButton />
			</Navbar>
		</Container>
	)
}