import React, { useEffect } from 'react'
import ElementHeader from '../../components/ElementsComponents/ElementHeader'
import ElementContent from '../../components/ElementsComponents/ElementContent'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../store' 
import { filterProducts } from '../../store/actions/productsActions'
import { useRouter } from 'next/router'

export const getServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const params = query.element;
  await store.dispatch(filterProducts('element', params));
})

function Element() {
  const router = useRouter();
  const {element} = router.query;
  const {filteredProducts} = useSelector(state => state.productsReducer.server)
  return(
    <>
      <ElementHeader elementName={element}></ElementHeader>
      <ElementContent filteredProducts={filteredProducts}></ElementContent>
    </>
);
}

export default Element;