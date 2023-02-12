import { CategoryHeader, CategoryContent } from '@/components/organisms'
import { filterProducts } from '../../store/actions/productsActions'
import { wrapper } from '@/store'
import type { NextPage, GetServerSideProps } from 'next'
import type { ProductType } from '@/types'


export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    async ({ store, query }) => {
      const categoryName = query.category as string;
      // @ts-ignore
      await store.dispatch(filterProducts('categorie', categoryName));
      const { productsReducer } = store.getState();
      return {
        props: {
          filteredProducts: productsReducer.server.filteredProducts,
          categoryName
        }
      }
    }
  );

interface CategoriesProps {
  filteredProducts: ProductType[];
  categoryName: string;
}

const Categories: NextPage<CategoriesProps> = ({ filteredProducts, categoryName }) => {

  return (
    <>
      <CategoryHeader categoryName={categoryName} />
      <CategoryContent filteredProducts={filteredProducts} categoryName={categoryName} />
    </>
  );
}

export default Categories;

