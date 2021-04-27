import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import CategorieHeader from '../../components/CategorieHeader'
import CategorieContent from '../../components/CategorieContent'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts } from '../../store/actions/productsActions'

export default function Categories() {
  const router = useRouter();
  const {categorie} = router.query;
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);
  useEffect(() => {
    dispatch(filterProducts('categorie', categorie))
  }, []);
  return(
    <>
      <CategorieHeader categorieName={categorie}></CategorieHeader>
      <CategorieContent filteredProducts={filteredProducts}></CategorieContent>
    </>
);
}

