import React from 'react'
import { Product } from '../../components'
import { client } from '../../lib/client';

const Shop = ({ products }) => {
    console.log("asdasd: ",products);
  return (
    <div>
        <div className="products-heading">
        <h2>Products</h2>
        <p>There are many models</p>
      </div>

      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}

        {products?.slice(0, 21).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);  
    return {
      props: { products }
    }
  }
  