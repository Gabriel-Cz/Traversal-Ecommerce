import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CategorieHeader from '../../components/CategorieHeader'
import CategorieContent from '../../components/CategorieContent'

export default function Categories() {
  const router = useRouter();
  const {categorie} = router.query;
  return(
    <>
      <CategorieHeader categorieName={categorie}></CategorieHeader>
      <CategorieContent categorieName={categorie}></CategorieContent>
    </>
);
}
