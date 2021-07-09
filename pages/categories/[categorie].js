import React from 'react'
import { useRouter } from 'next/router'
import CategorieHeader from '../../components/CategoriePageHeader/CategorieHeader'
import CategorieContent from '../../components/CategoriePageContent/CategorieContent'
import { useSelector } from 'react-redux'
import { wrapper } from '../../store' 
import { filterProducts } from '../../store/actions/productsActions'

export const getServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const params = query.categorie;
  await store.dispatch(filterProducts('categorie', params));
  return {
    props: {
      filteredProducts: store.getState().productsReducer.server.filteredProducts
    }
  }
})

function Categories({filteredProducts}) {
  const router = useRouter();
  const {categorie} = router.query;
  return(
    <>
      <CategorieHeader categorieName={categorie}></CategorieHeader>
      <CategorieContent filteredProducts={filteredProducts} categorie={categorie}></CategorieContent>
    </>
);
}

export default Categories;

