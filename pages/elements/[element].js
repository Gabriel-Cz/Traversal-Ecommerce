import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ElementHeader from '../../components/ElementsComponents/ElementHeader'
import ElementContent from '../../components/ElementsComponents/ElementContent'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts } from '../../store/actions/productsActions'

export default function Categories() {
  const router = useRouter();
  const {element} = router.query;
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);
  useEffect(() => {
    dispatch(filterProducts('element', element))
  }, []);
  return(
    <>
      <ElementHeader elementName={element}></ElementHeader>
      <ElementContent filteredProducts={filteredProducts}></ElementContent>
    </>
);
}