import React, { useEffect, useState } from "react";
import { Product } from "../../components";
import { client } from "../../lib/client";

const Shop = ({ products, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchProduct, setSearchProduct] = useState("")

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, category]);

  return (
    <div className="products-page">
      <div className="products-heading">
        <h2>Products</h2>
        <p>There are many models</p>
      </div>
      <div className="container d-flex justify-content-end">
        <div className="product-search-container me-1 pe-4">
          <input id="product-search " className="form-control" 
                type="text" placeholder='Search product...'
                onChange={(e)=>setSearchProduct(e.target.value)}
          />
        </div>
      </div>
      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}

        {filteredProducts?.filter((p) => {
          const searchTerm = searchProduct.toLocaleLowerCase();
          const resultsName = p.name.toLocaleLowerCase();
          const resultsDetails  = p.details.toLocaleLowerCase();
          return searchTerm === ''
            ? p
            : resultsName.includes(searchTerm) 
            || resultsDetails.includes(searchTerm) ;
        })
        .map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

export const getServerSideProps = async ({ query }) => {
  const category = query.category || "";
  const queryStr = category
    ? `*[_type == "product" && category == "${category}"]`
    : `*[_type == "product"]`;
  const products = await client.fetch(queryStr);
  return {
    props: { products },
  };
};
