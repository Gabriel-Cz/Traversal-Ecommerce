import { CheckoutMessage } from '@/components/atoms';
import { Container } from 'react-bootstrap';
import { navigationLinks } from '@/public/data-samples';
import { NavigationThumbnails } from '@/components/molecules';
import { MessageVariant } from '@/types';
import type { NextPage, GetServerSideProps } from 'next';
import styles from './Products.module.scss';

interface CheckoutProps {
	message: string;
	status: string;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const params = new URLSearchParams(query.params as string);
	if (params.get("success")) {
		return {
			props: {
				message: 'Your order was fully processed.',
				status: 'success'
			}
		};
	}
	if (params.get("canceled")) {
		return {
			props: {
				message: 'Your order was fully processed.',
				status: 'error'
			}
		}
	}
	return {
		props: {
			message: 'Go Back',
			status: 'success'
		}
	}
}

export const Checkout: NextPage<CheckoutProps> = ({ message, status }) => {
	return (
		<Container className={styles.containerMessageWrapper}>
			<CheckoutMessage message={message} variant={MessageVariant[status]} />
			<NavigationThumbnails navigationLinks={navigationLinks} />
		</Container>
	)
}