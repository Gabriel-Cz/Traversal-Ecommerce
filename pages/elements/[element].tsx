import React from 'react'
import { wrapper } from '@/store/index';
import { filterProducts } from '@/store/actions'
import { ElementHeader, ElementContent } from '@/components/organisms'
import type { NextPage, GetServerSideProps } from 'next'
import type { ProductType } from '@/types';
import { AppDispatch } from '@/store/typing';

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    async ({ store, query }) => {
      const { productsReducer } = store.getState();
      const elementName = query.element as string;
      store.dispatch<AppDispatch>(filterProducts('element', elementName));
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
  return (
    <>
      <ElementHeader elementName={elementName}></ElementHeader>
      <ElementContent filteredProducts={filteredProducts} elementName={elementName} />
    </>
  );
}

export default Element;