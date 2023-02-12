import { wrapper } from '@/store'
import { filterProducts } from '@/store/actions/productsActions'
import {
  FirstSection,
  TrendingSection,
  ElementsSection,
  ReviewsSection,
  ShipmentsInfo
} from '@/components/organisms';
import axiosInstance from '@/utils/axios-instance';
import type { GetServerSideProps, NextPage } from 'next'
import type { CustomerReviewType, ProductType } from '@/types';
import { AppDispatch } from '@/store/typing';

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    async ({ store }) => {
      //@ts-ignore
      await store.dispatch(filterProducts('state', 'trending'));
      //@ts-ignore
      const { productsReducer } = store.getState();
      const { data } = await axiosInstance.get<CustomerReviewType[]>(`${process.env.REACT_URL}/api/reviews`);
      return {
        props: {
          trendingProducts: productsReducer.server.filteredProducts,
          productsByElement: productsReducer.server.productsByElement,
          customerReviews: data
        }
      }
    });

interface HomeProps {
  trendingProducts: ProductType[],
  productsByElement: ProductType[],
  customerReviews: CustomerReviewType[]
}

const Home: NextPage<HomeProps> = ({
  trendingProducts,
  productsByElement,
  customerReviews
}) => {
  return (
    <>
      <FirstSection />
      <TrendingSection trendingProducts={trendingProducts} />
      <ElementsSection products={productsByElement} />
      <ReviewsSection reviews={customerReviews} />
      <ShipmentsInfo />
    </>
  )
}

export default Home;

