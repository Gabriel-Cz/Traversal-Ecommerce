import React from 'react'
import Link from 'next/link'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BaseNavLinkType } from '@/types';
import styles from './AppFooter.module.scss'

type SupportLink = string;
type SocialMediaIcon = string;

interface AppFooterProps {
	supportLinks: SupportLink[];
	socialMediaIcons: SocialMediaIcon[];
	linksCategories: BaseNavLinkType[];
};

export const AppFooter: React.FC<AppFooterProps> = ({
	supportLinks,
	socialMediaIcons,
	linksCategories
}) => {
	return (
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
								{supportLinks.map(link => (
									<a className={styles.a} key={link} href="#">
										{link}
									</a>
								))}
							</div>
						</div>
					</Col>
					<Col xs={4} md={2} lg={1}>
						<div className="text-center">
							<h1 className={styles.headers}>Categories</h1>
							<div className={styles.links}>
								{linksCategories.map(link => (
									<Link key={link.name} shallow passHref href={'/categories' + link.path}>
										<a className={styles.a}>
											{link.name}
										</a>
									</Link>
								))}
							</div>
						</div>
					</Col>
					<Col xs={4} md={2} lg={1}>
						<div className="text-center">
							<h1 className={styles.headers}>Contact Us</h1>
							<div className={styles.linksMedia}>
								{socialMediaIcons.map(link => (
									<a className={styles.a} key={link} href="#">
										<i className={link}></i>
									</a>
								))}
							</div>
						</div>
					</Col>
					<Col xs={4} md={3} className="d-flex align-items-center justify-content-center">
						<Link href="/about" passHref>
							<a className={styles.a}>
								<h1 className={styles.aboutLink}>
									About Us
								</h1>
							</a>
						</Link>
					</Col>
					<Col xs={8} md={3} className="mt-4">
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
				<div className={styles.smallLettersWrapper}>
					<small className={styles.smallLetters}>
						Traversal - {new Date().getFullYear()}
					</small>
				</div>
			</Jumbotron>
		</footer>
	);
}