import React from 'react'
import FirstSection from '../components/FirstSection'
import TrendingSection from '../components/TrendingSection'
import GoldAndSilverSection from '../components/GoldAndSilverSection'
import ShipmentsInformation from '../components/ShipmentsInformation'
import CustomersReviewsSection from '../components/CustomersReviewsSection'
import styles from '../styles/Home.module.scss'
import { wrapper } from '../store' 
import { filterProducts } from '../store/actions/productsActions'
import { useSelector } from 'react-redux'


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.dispatch(filterProducts('state', 'trending'))
})

export function Home() {
  const {filteredProducts} = useSelector(state => state.productsReducer.server)
  return (
    <>
      <FirstSection></FirstSection>
      <TrendingSection trendingProducts={filteredProducts}></TrendingSection>
      <GoldAndSilverSection></GoldAndSilverSection>
      <CustomersReviewsSection></CustomersReviewsSection>
      <ShipmentsInformation></ShipmentsInformation>
    </>
  )
}

export default Home;

