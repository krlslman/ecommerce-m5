import React, { useEffect, useState } from 'react'
import { Product } from '../../components'
import { client } from '../../lib/client';

const Shop = ({ products, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log("dasdasd:",category);

  useEffect(() => {
    if (category) {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products)
    }
  }, [products, category])
  return (
    <div>
        <div className="products-heading">
        <h2>Products</h2>
        <p>There are many models</p>
      </div>

      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}

        {filteredProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop

export const getServerSideProps = async ({ query }) => {
  const category = query.category || '';
  const queryStr = category ? `*[_type == "product" && category == "${category}"]` : `*[_type == "product"]`;
  const products = await client.fetch(queryStr);
  return {
    props: { products }
  }
}
  