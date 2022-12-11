import React from 'react'
import { AppProps } from 'next/app';
import { wrapper } from '../store'
import { CartProvider } from 'use-shopping-cart' 
import { Layout } from '@/components/organisms';
import { navigationLinks } from '@/public/data-samples'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartProvider mode="client-only" currency="usd">
			<Layout navLinks={navigationLinks}>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	)
}

export default wrapper.withRedux(MyApp);
