import React from 'react'
import { wrapper } from '../store'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import { loadStripe } from '@stripe/stripe-js'
import { saveCartState } from '../cartStore'
import '../styles/globals.scss'

const stripePromise = loadStripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w")

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NavbarComponent></NavbarComponent>
        <Component {...pageProps} />
        <FooterComponent></FooterComponent>
      </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.subscribe(() => {
    console.log('products:', store.getState().cartReducer.products)
  });
})


export default wrapper.withRedux(MyApp);
