import React, { useEffect, useState } from "react";
import { Product } from "../../components";
import { client } from "../../lib/client";

const Shop = ({ products, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchProduct, setSearchProduct] = useState("")
  const [numToShow, setNumToShow] = useState(8);

  const handleShowMore = () => {
      setNumToShow(numToShow + 4);
  }
  const handleShowLess = () => {
      setNumToShow(8);
  }

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, category] );
  
  return (
    <div className="products-page">
      <div className="products-heading container m-auto mb-4">
        <h2>Products</h2>
        <p>We offer a wide variety of top-quality products, each crafted to meet your unique needs and preferences, ensuring your utmost satisfaction with every purchase.</p>
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
        .slice(0, numToShow)
        .map((product) => (
          <Product key={product._id} product={product} />
        ))}

        

      </div>
      <div className="show-more text-center mt-3">
            {/* {numToShow < myCards.length && (
                <button onClick={handleShowMore}>Show more</button>
            )} */}
            {numToShow < filteredProducts.length 
              ? <button className='btn btn-outline m-5' onClick={handleShowMore}>Show more</button> 
              : <button className='btn btn-outline m-5' onClick={handleShowLess}>Show less</button>}
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
