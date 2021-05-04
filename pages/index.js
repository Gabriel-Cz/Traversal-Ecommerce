import React from 'react'
import FirstSection from '../components/HomePageComponents/FirstSection'
import TrendingSection from '../components/HomePageComponents/TrendingSection'
import GoldAndSilverSection from '../components/HomePageComponents/GoldAndSilverSection'
import CustomersReviewsSection from '../components/HomePageComponents/CustomersReviewsSection'
import ShipmentsInformation from '../components/HomePageComponents/ShipmentsInformation'
import { wrapper } from '../store' 
import { filterProducts } from '../store/actions/productsActions'

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.dispatch(filterProducts('state', 'trending'))
  return {
    props: {
      trendingProducts: store.getState().productsReducer.server.filteredProducts
    }
  }
}) 

export function Home({trendingProducts}) {
  return (
    <>
      <FirstSection></FirstSection>
      <TrendingSection trendingProducts={trendingProducts}></TrendingSection>
      <GoldAndSilverSection></GoldAndSilverSection>
      <CustomersReviewsSection></CustomersReviewsSection>
      <ShipmentsInformation></ShipmentsInformation>
    </>
  )
}

export default Home;

