import React from 'react'
import { wrapper } from '@/store/index';
import { filterProducts } from '@/store/actions'
import { ElementHeader, ElementContent } from '@/components/organisms'
import type { NextPage, GetServerSideProps } from 'next'
import type { ProductType } from '@/types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const { productsReducer } = store.getState();
  const elementName = query.element as string;
  filterProducts('element', elementName);
  return {
    props: {
      filteredProducts: productsReducer.server.filteredProducts,
      elementName: elementName
    }
  }
});

interface ElementProps {
  filteredProducts: ProductType[];
  elementName: string;
}

const Element: NextPage<ElementProps> = ({ filteredProducts, elementName }) => {
  return(
    <>
      <ElementHeader elementName={elementName}></ElementHeader>
      <ElementContent filteredProducts={filteredProducts} elementName={elementName} />
    </>
);
}

export default Element;