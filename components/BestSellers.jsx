import React from "react";
import  Product  from "./Product";

const BestSellers = ({ products }) => {
  return (
    <div>
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>There are many models</p>
      </div>

      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}

        {products?.slice(0, 9).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
