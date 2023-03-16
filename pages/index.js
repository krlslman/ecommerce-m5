import React from 'react';
import { Product, FooterBanner, HeroBanner, Footer } from '../components';

const Home = () => {
  return (      
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div>
        {['prd1','prd2'].map(
          (product) => product )}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home;