import React from 'react';
import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner, Footer  } from '../../components';
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner />
      {console.log("products:",products)}      
      {console.log("bannerData:",bannerData)}      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map(
          (product) => product.name )}
      </div>

      <FooterBanner />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home