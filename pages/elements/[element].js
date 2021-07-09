import React from 'react'
import ElementHeader from '../../components/ElementPageHeader/ElementHeader'
import ElementContent from '../../components/ElementPageContent/ElementContent'
import { wrapper } from '../../store' 
import { filterProducts } from '../../store/actions/productsActions'

export const getServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const params = query.element;
  await store.dispatch(filterProducts('element', params));
  return {
    props: {
      filteredProducts: store.getState().productsReducer.server.filteredProducts,
      elementName: params
    }
  }
})

function Element({filteredProducts, elementName}) {
  return(
    <>
      <ElementHeader elementName={elementName}></ElementHeader>
      <ElementContent filteredProducts={filteredProducts} elementName={elementName}></ElementContent>
    </>
);
}

export default Element;