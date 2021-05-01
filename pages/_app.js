import React from 'react'
import { wrapper } from '../store'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import '../styles/globals.scss'

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

function MyApp({ Component, pageProps }) {
  return (
      <>
        <CartProvider
          stripe={stripePromise}
          currency="USD"
          mode="checkout-session"
        >
          <NavbarComponent></NavbarComponent>
          <Component {...pageProps} />
          <FooterComponent></FooterComponent>
        </CartProvider>
      </>
  )
}

export default wrapper.withRedux(MyApp);
