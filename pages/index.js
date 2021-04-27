import React, { useEffect } from 'react'
import FirstSection from '../components/FirstSection'
import TrendingSection from '../components/TrendingsSection'
import GoldAndSilverSection from '../components/GoldAndSilverSection'
import ShipmentsInformation from '../components/ShipmentsInformation'
import CustomersReviewsSection from '../components/CustomersReviewsSection'
import CategorieContent from '../components/CategorieContent'
import styles from '../styles/Home.module.scss'
import { wrapper } from '../store'
import { filterProducts } from '../store/actions/productsActions'
import { useSelector, useDispatch } from 'react-redux'


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  await store.dispatch(filterProducts('state', 'trending'))
})

export function Home() {
  const products = [{
    "id": "G3",
    "title": "Gold Ring",
    "description" : "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",  
    "price": "$349",
    "image": "../ProductsImages/GoldRing1.jpg",
    "rating": 4.5,
    "state": "trending",
    "categorie": "rings"
  }]
  const {filteredProducts} = useSelector(state => state.productsReducer)
  useEffect(() => {
    console.log(filteredProducts)
  }, [])
  return (
    <>
      <FirstSection></FirstSection>
      <TrendingSection trendingProducts={products}></TrendingSection>
      <GoldAndSilverSection></GoldAndSilverSection>
      <CustomersReviewsSection></CustomersReviewsSection>
      <ShipmentsInformation></ShipmentsInformation>
    </>
  )
}

export default Home;

