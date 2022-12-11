import { wrapper } from '@/store'
import { filterProducts, filterByElement } from '@/store/actions/productsActions'
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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    async ({ store }) => {
      try {
        const { productsReducer } = store.getState();
        filterProducts('state', 'trending');
        filterByElement('element');
        const customerReviews = await axiosInstance.get<CustomerReviewType[]>('/api/reviews');
        console.log('D', customerReviews);
        return {
          props: {
            trendingProducts: productsReducer.server.filteredProducts,
            productsByElement: productsReducer.server.productsByElement,
            customerReviews: customerReviews
          }
        }
      } catch (error) {
        return {
          props: {
            trendingProducts: [],
            productsByElement: [],
            customerReviews: []
          }
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

