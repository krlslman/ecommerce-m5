import React from 'react';
import { client } from '../../lib/client';
import {  FooterBanner,
          HeroBanner,
          Categories,
          SupportArea,
          BestSellers 
        } from '../../components';
        
const Home = ({ products, bannerData }) => {  

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Categories products={products.length && products} />
      <SupportArea />
      <BestSellers products={products} />
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
