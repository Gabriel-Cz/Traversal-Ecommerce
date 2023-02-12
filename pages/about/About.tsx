import Container from 'react-bootstrap/Container'
import type { NextPage } from 'next';
import styles from './About.module.scss';

export const About: NextPage = () => {
	return (
		<Container className="my-5 my-5">
			<div id={styles['about-container']} className="px-sm-5 py-5">
				<h1 className={styles.header}>
					About
				</h1>
				<div className="mx-2 mt-5 text-center">
					<p className={styles.content}>
						Traversal is a Jewelry Ecommerce Concept. Built & Designed for recreative purposes by&nbsp;
						<a className={styles.githubLink} target="_blank" href="https://github.com/Gabriel-Cz">
							 Gabriel Cz
						</a>.
					</p>
				</div>
			</div>
		</Container>
	);
}