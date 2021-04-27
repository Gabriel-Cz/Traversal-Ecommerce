import React from 'react'
import { wrapper } from '../store'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NavbarComponent></NavbarComponent>
        <Component {...pageProps} />
        <FooterComponent></FooterComponent>
      </>
  )
}

export default wrapper.withRedux(MyApp);
