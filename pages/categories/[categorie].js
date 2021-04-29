import React from 'react'
import { useRouter } from 'next/router'
import CategorieHeader from '../../components/CategoriesComponents/CategorieHeader'
import CategorieContent from '../../components/CategoriesComponents/CategorieContent'
import { useSelector } from 'react-redux'
import { wrapper } from '../../store'
import { filterProducts } from '../../store/actions/productsActions'

export const getServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const params = query.categorie;
  await store.dispatch(filterProducts('categorie', params));
})

function Categories() {
  const router = useRouter();
  const {categorie} = router.query;
  const {filteredProducts} = useSelector(state => state.productsReducer.server);
  return(
    <>
      <CategorieHeader categorieName={categorie}></CategorieHeader>
      <CategorieContent filteredProducts={filteredProducts}></CategorieContent>
    </>
);
}

export default Categories;

