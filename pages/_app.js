import React from 'react'
import { wrapper } from '../store'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import { CartProvider } from 'use-shopping-cart' 
import { loadStripe } from '@stripe/stripe-js'
import '../styles/globals.scss'

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

function MyApp({ Component, pageProps }) {
  return (
      <>
        <CartProvider 
          mode="client-only"
          currency="usd"
        >
          <NavbarComponent></NavbarComponent>
          <Component {...pageProps} />
          <FooterComponent></FooterComponent>
        </CartProvider>
      </>
  )
}

export default wrapper.withRedux(MyApp);
