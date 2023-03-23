import React from 'react';
import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner, Categories  } from '../../components';

const Home = ({ products, bannerData }) => {
  
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Categories products={products.length && products} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>There are many models</p>
      </div>

      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}
          
        {products?.slice(0,9).map(
          (product) => <Product key={ product._id } product={product} /> 
        )}
      </div>

      <FooterBanner footerBanner={bannerData[0]} />
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

