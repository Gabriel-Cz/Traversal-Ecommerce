import React from 'react'
import { wrapper } from '../store'
import AppNavbar from '../components/AppNavbar/AppNavbar'
import AppFooter from '../components/AppFooter/AppFooter'
import { CartProvider } from 'use-shopping-cart' 
import { loadStripe } from '@stripe/stripe-js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <CartProvider 
          mode="client-only"
          currency="usd"
        >
          <AppNavbar />
          <Component {...pageProps} />
          <AppFooter />
        </CartProvider>
      </>
  )
}

export default wrapper.withRedux(MyApp);
