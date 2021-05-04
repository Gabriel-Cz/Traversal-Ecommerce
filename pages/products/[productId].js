import React, { useEffect } from 'react'
import { wrapper } from '../../store'
import { useDispatch, useSelector } from 'react-redux' 
import { getProduct } from '../../store/actions/productsActions'
import { setNewCartState } from '../../store/actions/cartActions'
import Container from 'react-bootstrap/Container'
import ProductInformation from '../../components/ProductsPageComponents/ProductInformation'
import Image from 'react-bootstrap/Image'
import styles from '../../styles/Product.module.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SvgTruck = () => {
  return(
      <svg width="60" height="60" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="54" cy="50" r="50" fill="url(#paint0_linear)"/>
</g>
<path d="M26 39.9982C26 38.6726 26.5926 37.4013 27.6475 36.4639C28.7024 35.5266 30.1332 35 31.625 35H65.375C66.8668 35 68.2976 35.5266 69.3525 36.4639C70.4074 37.4013 71 38.6726 71 39.9982V44.9964H74.825C75.6678 44.9971 76.4996 45.166 77.259 45.4907C78.0184 45.8154 78.686 46.2876 79.2125 46.8724L84.7662 53.0368C85.5653 53.9238 86.0005 55.0262 86 56.1624V63.3231C86 64.6488 85.4074 65.9201 84.3525 66.8574C83.2976 67.7948 81.8668 68.3213 80.375 68.3213H78.5C78.5 70.0888 77.7098 71.7839 76.3033 73.0337C74.8968 74.2835 72.9891 74.9856 71 74.9856C69.0109 74.9856 67.1032 74.2835 65.6967 73.0337C64.2902 71.7839 63.5 70.0888 63.5 68.3213H44.75C44.7522 69.2096 44.5544 70.0894 44.1685 70.9088C43.7825 71.7282 43.216 72.4708 42.5024 73.0929C41.7888 73.715 40.9425 74.204 40.0131 74.5313C39.0837 74.8585 38.0901 75.0174 37.0906 74.9985C36.0911 74.9796 35.106 74.7834 34.1931 74.4213C33.2802 74.0593 32.458 73.5387 31.7748 72.8902C31.0916 72.2417 30.5612 71.4784 30.2148 70.6452C29.8683 69.8119 29.7129 68.9255 29.7575 68.0381C28.6589 67.6945 27.7075 67.0564 27.0344 66.2119C26.3614 65.3674 25.9999 64.358 26 63.3231L26 39.9982ZM30.8525 64.8426C31.5305 63.8563 32.4857 63.0437 33.6241 62.4847C34.7626 61.9256 36.0451 61.6395 37.3457 61.6543C38.6463 61.6691 39.9202 61.9843 41.0422 62.569C42.1642 63.1537 43.0956 63.9878 43.745 64.9892H64.505C65.1646 63.9772 66.111 63.1362 67.25 62.5501V39.9982C67.25 39.5563 67.0525 39.1326 66.7008 38.8201C66.3492 38.5077 65.8723 38.3321 65.375 38.3321H31.625C31.1277 38.3321 30.6508 38.5077 30.2992 38.8201C29.9475 39.1326 29.75 39.5563 29.75 39.9982V63.3231C29.7497 63.6438 29.8536 63.9578 30.0491 64.2273C30.2447 64.4968 30.5237 64.7105 30.8525 64.8426ZM71 61.6571C72.3165 61.6571 73.6098 61.9651 74.7499 62.55C75.89 63.1349 76.8368 63.9761 77.495 64.9892H80.375C80.8723 64.9892 81.3492 64.8137 81.7008 64.5012C82.0525 64.1888 82.25 63.765 82.25 63.3231V56.1591C82.2492 55.781 82.1038 55.4143 81.8375 55.1194L76.2875 48.955C76.1121 48.7599 75.8897 48.6022 75.6365 48.4938C75.3834 48.3854 75.106 48.3289 74.825 48.3285H71V61.6571ZM37.25 64.9892C36.2554 64.9892 35.3016 65.3403 34.5983 65.9652C33.8951 66.5901 33.5 67.4376 33.5 68.3213C33.5 69.2051 33.8951 70.0526 34.5983 70.6775C35.3016 71.3024 36.2554 71.6535 37.25 71.6535C38.2446 71.6535 39.1984 71.3024 39.9017 70.6775C40.6049 70.0526 41 69.2051 41 68.3213C41 67.4376 40.6049 66.5901 39.9017 65.9652C39.1984 65.3403 38.2446 64.9892 37.25 64.9892ZM71 64.9892C70.0054 64.9892 69.0516 65.3403 68.3484 65.9652C67.6451 66.5901 67.25 67.4376 67.25 68.3213C67.25 69.2051 67.6451 70.0526 68.3484 70.6775C69.0516 71.3024 70.0054 71.6535 71 71.6535C71.9946 71.6535 72.9484 71.3024 73.6516 70.6775C74.3549 70.0526 74.75 69.2051 74.75 68.3213C74.75 67.4376 74.3549 66.5901 73.6516 65.9652C72.9484 65.3403 71.9946 64.9892 71 64.9892Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="54" y1="0" x2="54" y2="100" gradientUnits="userSpaceOnUse">
<stop stop-color="#039BE5"/>
<stop offset="1" stop-color="#01579B"/>
</linearGradient>
</defs>
</svg>
  );
}

const ShipmentInformation = () => {
  return(
      <>
        <div className="d-flex justify-content-center align-items-center ">
            <SvgTruck></SvgTruck>
            <small className="ml-4 text-muted" styles={{fontFamily: "Lora"}}>Shipment from 3 to 5 days</small>
        </div>
      </>
  );
}

const Loading = () => {
  return(
    <>
    <h1>Loading...</h1>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
  const params = query.productId;
  await store.dispatch(getProduct(params));
  const product = store.getState().productsReducer.server.product
  return { 
    props: {
      product: product
    }
  };
})

function Product({product}) {
  /* const {product} = useSelector(state => state.productsReducer.server); */ 
  return(
        <>
          <Container fluid className={styles.container}>
          <div className={styles.productCard}>
              <Row className="d-flex align-items-center justify-center">
                  <Col xs={12} sm={8} md={6}>
                    <ProductInformation product={product} />
                  </Col>
                  <Col xs={12} sm={4} md={6} className={styles.colImageWrapper}>
                    <Image src={product.image} fluid/>
                  </Col>
              </Row>
          </div>
          </Container>
          <Container className="mb-5">
            <ShipmentInformation />
          </Container>
        </>
  );
}

export default Product;

