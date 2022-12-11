import { useRouter } from 'next/router'
import { CategoryHeader, CategoryContent } from '@/components/organisms'
import { wrapper } from '@/store'
import { filterProducts } from '../../store/actions/productsActions'
import type { NextPage, GetServerSideProps } from 'next'
import type { ProductType } from 'types/Product'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    async ({ store, query }) => {
      const { productsReducer } = store.getState();
      const categoryName = query.category as string;
      filterProducts('category', categoryName);
      return {
        props: {
          filteredProducts: productsReducer.server.filteredProducts
        }
      }
    }
  );

interface CategoriesProps {
  filteredProducts: ProductType[];
}

const Categories: NextPage<CategoriesProps> = ({ filteredProducts }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <CategoryHeader categoryName={category as string} subHeader="" />
      <CategoryContent filteredProducts={filteredProducts} categoryName={category as string} />
    </>
  );
}

export default Categories;

