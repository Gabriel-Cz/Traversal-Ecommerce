import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FirstSection from '../components/FirstSection'
import TrendingSection from '../components/TrendingsSection'
import GoldAndSilver from '../components/GoldAndSilverSection'
import CustomersReviewsSection from '../components/CustomersReviewsSection'
import CategorieContent from '../components/CategorieContent'
import FooterComponent from '../components/FooterComponent'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <FirstSection></FirstSection>
      <TrendingSection></TrendingSection>
      <GoldAndSilver></GoldAndSilver>
      <CustomersReviewsSection></CustomersReviewsSection>
      <CategorieContent></CategorieContent>
    </>
  )
}
