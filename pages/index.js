import React from 'react'
import FirstSection from '../components/HomePageFirstSection/FirstSection'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import GoldAndSilverSection from '../components/HomePageGoldAndSilverSection/GoldAndSilverSection'
import CustomersReviewsSection from '../components/HomePageCustomersReviewsSection/CustomersReviewsSection'
import AboutShipments from '../components/HomePageAboutShipments/AboutShipments'
import { wrapper } from '../store' 
import { filterProducts, filterByElement } from '../store/actions/productsActions'

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.dispatch(filterProducts('state', 'trending'));
  await store.dispatch(filterByElement('element'));
  return {
    props: {
      trendingProducts: store.getState().productsReducer.server.filteredProducts,
      productsByElement: store.getState().productsReducer.server.productsByElement,
    }
  }
}) 

export function Home({trendingProducts, productsByElement}) {
  return (
    <>
      <FirstSection />
      <TrendingProducts trendingProducts={trendingProducts} />
      <GoldAndSilverSection products={productsByElement} />
      <CustomersReviewsSection />
      <AboutShipments />
    </>
  )
}

export default Home;

